import { View, Text, TouchableOpacity, Image, Linking, Alert } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = ({ data }) => {
  const [selected, setSelected] = useState(false);

  const getItems = async () => {
    try {
      const items = await AsyncStorage.getItem("selectedMovies");
      const urls = JSON.parse(items);

      return urls;
    } catch (error) {
      console.log("Error")
    }
  }

  const checkJob = async () => {
    try {
      const savedMovies = await getItems();

      if (!data) return;

      if (savedMovies && savedMovies.some(el => el.id === data?.id)) {
        setSelected(true);
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  const toggleSelect = async () => {
    try {
      const movies = await getItems();

      if (movies && movies.some(el => el?.id === data?.id)) {
        setSelected(false);

        const newItems = movies.filter(el => el?.id !== data?.id);

        await AsyncStorage.setItem("selectedMovies", JSON.stringify(newItems));

        return;
      }

      const newItems = movies ? [...movies, data] : [data];

      await AsyncStorage.setItem("selectedMovies", JSON.stringify(newItems));
      setSelected(true);
    } catch (error) {
      console.log("Error saving job.");
      Alert.alert("Error saving job.");
    }
  }

  useEffect(() => {
    checkJob();
  }, [data])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={toggleSelect}>
        <Image
          source={selected ? icons.heart : icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(`https://www.imdb.com/title/${data.imdb_id}`)}
      >
        <Text style={styles.applyBtnText}>Watch this movie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
