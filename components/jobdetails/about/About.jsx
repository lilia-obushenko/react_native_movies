import { View, Text } from "react-native";

import styles from "./about.style";
import { useMemo } from "react";

import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const About = ({ data }) => {
  const genres = useMemo(() => {
    return data.genres.map((el) => el.name).join(", ");
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the movie:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Country: </Text>
          {data.origin_country}
        </Text>
        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Language: </Text>
          {data.original_language}
        </Text>

        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Status: </Text>
          {data.status}
        </Text>

        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Run time: </Text>
          {data.runtime} minutes
        </Text>

        <Text style={styles.contextText}>
          <Text style={{ fontWeight: "bold", color: "black" }}>
            Vote average:{" "}
          </Text>
          <Stars
            default={data.vote_average / 2}
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

        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Adult: </Text>
          {data.adult.toString()}
        </Text>

        <Text style={styles.contextText}>
          <Text style={{ fontWeight: 700, color: "black" }}>Genre: </Text>
          {genres}
        </Text>
      </View>
    </View>
  );
};

export default About;
