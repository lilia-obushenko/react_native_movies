import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../../constants";
import { genres, yearRanges } from "../../../utils";
import { useRouter } from "expo-router";

const FilterDropdown = () => {
  const [openFiltering, setFiltering] = useState(false);

  const router = useRouter();

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity onPress={() => setFiltering(!openFiltering)}>
        <View
          style={{
            backgroundColor: COLORS.orange,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: !openFiltering ? 10 : 0,
            borderBottomRightRadius: !openFiltering ? 10 : 0,
            width: 90,
            padding: 10,
            display: "flex",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#FFF" }}>
            {" "}
            {openFiltering ? (
              <Icon name={"arrow-up"} style={{ fontSize: 20 }} />
            ) : (
              <Icon name={"arrow-down"} style={{ fontSize: 20 }} />
            )}{" "}
            Filter
          </Text>
        </View>
      </TouchableOpacity>

      <View>
        {openFiltering && (
          <View
            style={{
              backgroundColor: COLORS.orange,
              padding: 20,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 700, color: "#FFF" }}>Genres: </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  maxHeight: 300,
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {genres.map((el) => (
                  <TouchableOpacity
                    key={el.id}
                    style={{ padding: 5 }}
                    onPress={() => {
                      router.push(`/genres/${el.id}`);
                      setFiltering(false);
                    }}
                  >
                    <Text style={{ color: "#FFF" }}>{el.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 700, color: "#FFF" }}>Year: </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  maxHeight: 130,
                  flexWrap: "wrap",
                  gap: 5,
                }}
              >
                {yearRanges.map((el) => (
                  <TouchableOpacity
                    key={el.id}
                    style={{ padding: 5 }}
                    onPress={() => {
                      router.push(`/genres/&year=${el.name}`);
                      setFiltering(false);
                    }}
                  >
                    <Text style={{ color: "#FFF" }}>{el.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default FilterDropdown;
