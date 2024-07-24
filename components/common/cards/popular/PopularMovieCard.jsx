import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./PopularMovieCard.style";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PopularMovieCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        Release date: {item.release_date}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.movieName(selectedJob, item)} numberOfLines={1}>
          {item.original_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.overview.slice(0, 50) + "..."}
          </Text>
        </View>
        <Text>
          <Stars
            default={item.vote_average / 2}
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

export default PopularMovieCard;
