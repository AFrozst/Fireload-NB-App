import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MaterliaItem from "./MaterliaItem";
import Loading from "../common/Loading";
import { SIZES, FONTS } from "../../constants";

const MaterialsList = ({ combustibles }) => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      setMaterials(combustibles);
      //setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => {
    return <MaterliaItem material={item} />;
  };

  useEffect(() => {
    //loadData();
    setMaterials(combustibles);
    setIsLoading(false);
    console.log("====================Use Effect: List====================");
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={combustibles}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: SIZES.extralarge * 3 }}
      ListHeaderComponent={() => (
        <View style={{ paddingTop: SIZES.font }}>
          <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.InterSemiBold  }}>
            Materiales Combustibles
          </Text>
        </View>
      )}
    />
  );
};

export default MaterialsList;
