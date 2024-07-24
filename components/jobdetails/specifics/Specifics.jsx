import { View, Text, Image } from "react-native";

import styles from "./specifics.style";
import { images } from "../../../constants";

const Specifics = ({ title, points, array = false }) => {
  return (
    <View style={styles.container}>
      {!array ? (
        <View>
          <Text style={styles.title}>{title}:</Text>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointText}>{points.overview}</Text>
          </View>

          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w342${points.backdrop_path}`,
            }}
            resizeMode="contain"
            style={{ width: "100%", height: 180 }}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{title}:</Text>

          {points.map((el) => (
            <View
              key={el.id}
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={{
                  uri: el.logo_path
                    ? `https://image.tmdb.org/t/p/w342${el.logo_path}`
                    : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
                }}
                resizeMode="contain"
                style={{ height: 50, width: 50 }}
              />

              <Text>
                {el.name} {el.origin_country}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Specifics;
