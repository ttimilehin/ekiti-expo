import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.intro}>Todo App</Text>
      <Text style={styles.subIntro}>Welcome to the best todo app.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "flex-start",
    paddingVertical: 50,
    alignItems: "center"
  },
  intro: {
    fontSize: 30
  },
  subIntro: {
    fontSize: 15
  }
});

export default Header;
