import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from "react-native";

const Input = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput placeholder="Your Task..." style={styles.input} />
      <TouchableOpacity activeOpacity={0.8} style={styles.inputBtn}>
        <Text style={styles.inputBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    flex: 4,
    height: 40,
    paddingLeft: 5,
    marginRight: 3
  },
  inputBtn: {
    flex: 1,
    backgroundColor: "tomato",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBtnText: {
    color: "white"
  }
});

export default Input;
