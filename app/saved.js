import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginLayout from "./_logiLayout";
import styles from "../components/home/nearby/NearbyMovies.style";
import { NearbyMovieCard } from "../components";
import { COLORS, SIZES, icons } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";

const Saved = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  const router = useRouter();

  const getSavedItems = async () => {
    try {
      const items = await AsyncStorage.getItem("selectedMovies");
      const movies = JSON.parse(items);

      setSavedMovies(movies);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSavedItems();
    
    let intervalId;

    intervalId = setInterval(() => {
        getSavedItems();
    }, 5000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.orange },
          headerShadowVisible: false,
          headerTitle: "",
          headerTintColor: COLORS.lightWhite,
        }}
      />
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={styles.headerTitle}>Saved movies</Text>
      </View>
      <FlatList
        data={savedMovies}
        renderItem={({ item }) => (
          <NearbyMovieCard
            movie={item}
            handleNavigate={() => router.push(`/movies/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
      />
    </SafeAreaView>
  );
};

export default Saved;
