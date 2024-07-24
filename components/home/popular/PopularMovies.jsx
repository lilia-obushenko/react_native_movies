import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./PopularMovies.style";
import { COLORS, SIZES } from "../../../constants";
import PopularMovieCard from "../../common/cards/popular/PopularMovieCard";
import useFetch from "../../../hook/useFetch";

const PopularMovies = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("/movie/popular");

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/movies/${item.id}`);
    setSelectedJob(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular movies</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.results}
            renderItem={({ item }) => (
              <PopularMovieCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularMovies;
