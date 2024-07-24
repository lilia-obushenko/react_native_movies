import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Switch,
  Alert,
} from "react-native";
import { COLORS, images } from "../constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import { styles } from "../styles/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginLayout from "./_logiLayout";

const LoginPage = () => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const existingData = await AsyncStorage.getItem("users");
      const users = JSON.parse(existingData);

      const user = users.find(
        (el) => el.email === username && el.password === password
      );

      if (!user) {
        Alert.alert("Incorrect email or password.");
        return;
      }

      router.replace("/home");
    } catch (error) {
      console.error("Error getting data:", error);
      Alert.alert("An error occurred while getting data.");
    }
  };

  return (
    <LoginLayout>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL OR USERNAME"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={COLORS.gray}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={COLORS.gray}
        />
      </View>

      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{ true: COLORS.orange, false: "gray" }}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable
            onPress={() => Alert.alert("This feature is not implemented")}
          >
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <Pressable onPress={() => Alert.alert("This feature is not implemented")}>
        <View style={styles.mediaIcons}>
          <Image source={images.facebook} style={styles.icons} />
          <Image source={images.instagram} style={styles.icons} />
          <Image source={images.twitter} style={styles.icons} />
        </View>
      </Pressable>

      <Text style={styles.footerText}>
        Don't Have Account?
        <Text style={styles.signup} onPress={() => router.replace("/signUp")}>
          {" "}
          Sign Up
        </Text>
      </Text>
    </LoginLayout>
  );
};

export default LoginPage;
