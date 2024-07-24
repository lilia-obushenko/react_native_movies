import React from "react";
import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./NearbyMovies.style";
import { COLORS } from "../../../constants";
import NearbyMovieCard from "../../common/cards/nearby/NearbyMovieCard";
import useFetch from "../../../hook/useFetch";

const NearbyMovies = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("/movie/upcoming");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming movies</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.results?.map((movie) => (
            <NearbyMovieCard
              movie={movie}
              key={`movie-${movie.id}`}
              handleNavigate={() => router.push(`/movies/${movie.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyMovies;
