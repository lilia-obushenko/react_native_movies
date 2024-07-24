import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      paddingTop: 30,
    },
    image: {
      height: 140,
      width: 170,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      paddingVertical: 40,
      color: COLORS.orange,
    },
    inputView: {
      gap: 15,
      width: "100%",
      paddingHorizontal: 40,
      marginBottom: 20,
    },
    input: {
      height: 50,
      paddingHorizontal: 20,
      borderColor: COLORS.orange,
      borderWidth: 1,
      borderRadius: 7,
    },
    rememberView: {
      width: "100%",
      paddingHorizontal: 50,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 8,
    },
    switch: {
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    rememberText: {
      fontSize: 13,
    },
    forgetText: {
      fontSize: 11,
      color: "red",
    },
    button: {
      backgroundColor: "red",
      height: 45,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10 
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    buttonView: {
      width: "100%",
      paddingHorizontal: 50,
    },
    optionsText: {
      textAlign: "center",
      paddingVertical: 10,
      color: "gray",
      fontSize: 13,
      marginBottom: 6,
    },
    mediaIcons: {
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 23,
    },
    icons: {
      width: 40,
      height: 40,
    },
    footerText: {
      textAlign: "center",
      color: "gray",
    },
    signup: {
      color: "red",
      fontSize: 13,
    },
  });