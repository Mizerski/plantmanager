import React from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import { EnviromentButton } from "../components/enviroment_button";
import { Header } from "../components/header";

export function APlantsSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>voce quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <EnviromentButton title="Cozinha" active />}
          horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  enviromentList:{
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
