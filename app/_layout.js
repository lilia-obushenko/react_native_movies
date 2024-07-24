import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from "react-native-paper";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
      <Stack initialRouteName="login">
        <Stack.Screen name="login" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="home" />
        <Stack.Screen name="saved" />
      </Stack>
    </Provider>
  );
};

export default Layout;
