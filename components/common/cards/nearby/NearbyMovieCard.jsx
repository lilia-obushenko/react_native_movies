import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyMovieCard.style";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NearbyMovieCard = ({ movie, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.movieName} numberOfLines={1}>
          {movie?.original_title}
        </Text>

        <Text style={styles.jobType}>
          {movie?.overview.slice(0, 60) + "..."}
        </Text>

        <Text style={{ marginTop: 20 }}>
          <Stars
            default={movie.vote_average / 2}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
            emptyStar={
              <Icon
                name={"star-outline"}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={<Icon name={"star-half"} style={[styles.myStarStyle]} />}
          />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyMovieCard;
