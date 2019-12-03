import React from "react";
import { View, StyleSheet } from "react-native";
import Todo from "./Todo";

const App = () => {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
