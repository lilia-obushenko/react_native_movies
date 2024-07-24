import { Stack } from "expo-router";
import { Image, SafeAreaView, ScrollView } from "react-native";
import { COLORS, images } from "../constants";
import { styles } from "../styles/login";

const LoginLayout = ({ children, logo = true }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.orange },
          headerShadowVisible: false,
          headerTitle: "",
          headerTintColor: COLORS.lightWhite,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {logo && (
          <Image
            source={images.logo}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginLayout;
