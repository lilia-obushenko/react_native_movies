import { useRouter } from "expo-router";
import {
  Pressable,
  TextInput,
  View,
  Text,
  Alert
} from "react-native";
import { styles } from "../styles/login";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginLayout from "./_logiLayout";


const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
        Alert.alert("Your password differs");

        return;
    }

    const newUser = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      };
    
      try {
        let usersData = [];
        const existingData = await AsyncStorage.getItem('users');
        if (existingData) {
          usersData = JSON.parse(existingData);
        }
    
        usersData.push(newUser);
    
        const serializedData = JSON.stringify(usersData);
        await AsyncStorage.setItem('users', serializedData);
    
        router.replace("/home");
      } catch (error) {
        console.error('Error saving data:', error);
        Alert.alert('An error occurred while saving data.');
      }
  };

  return (
    <LoginLayout>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={styles.inputView}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="FULL NAME"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="gray"
              />
            )}
            name="fullName"
          />
          {errors.fullName && (
            <Text style={{ color: "red" }}>This field is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="EMAIL ADDRESS"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="gray"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red" }}>Enter a valid email address.</Text>
          )}

          <Controller
            control={control}
            rules={{ required: true, minLength: 6 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="PASSWORD"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="gray"
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: "red" }}>
              Password must be at least 6 characters.
            </Text>
          )}

          <Controller
            control={control}
            rules={{ required: true, minLength: 6 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="CONFIRM PASSWORD"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="gray"
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={{ color: "red" }}>
              Password must be at least 6 characters.
            </Text>
          )}
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Already have an account?
          <Text style={styles.signup} onPress={() => router.replace("/login")}>
            {" "}
            Login
          </Text>
        </Text>
      </LoginLayout>
  );
};

export default SignUp;
