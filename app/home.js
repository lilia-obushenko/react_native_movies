import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import {
  NearbyMovies,
  PopularMovies,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import CustomMenu from "../components/home/menu/CustomMenu";
import FilterDropdown from "../components/home/filterDropdown/FilterDropdown";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <CustomMenu />,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <FilterDropdown />

          <PopularMovies />
          <NearbyMovies />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
