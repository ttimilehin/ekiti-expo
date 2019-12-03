import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
import Input from "./Input";
import Todos from "./Todos";

const Todo = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <Todos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Todo;
