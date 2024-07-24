import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
} from "react-native";

import {
  MovieAbout,
  MovieTabs,
  MovieFooter,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import CopyMenu from "../../components/common/copyMenu/CopyMenu";

const tabs = ["About", "Description", "Companies"];

const MovieDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch(`/movie/${params.id}`);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Description":
        return <Specifics title="Description" points={data ?? ["N/A"]} />;
      case "About":
        return <MovieAbout data={data ?? "No data provided"} />;
      case "Companies":
        return (
          <Specifics
            title="Companies"
            points={data.production_companies ?? ["N/A"]}
            array={true}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <CopyMenu movie={data} />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w342${data.poster_path}`,
                }}
                resizeMode="contain"
                style={{ height: 200 }}
              />

              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 20,
                  marginBottom: 20,
                  fontWeight: 600,
                }}
              >
                {data.original_title}
              </Text>

              <MovieTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <MovieFooter data={data} />
      </>
    </SafeAreaView>
  );
};

export default MovieDetails;
