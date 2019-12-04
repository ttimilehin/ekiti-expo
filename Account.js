import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.Intro1}>Create</Text>
        <Text style={styles.Intro2}>your account</Text>
        <Text style={styles.welcomeText}>
          Enter your personal details and {"\n"} start your journey today.
        </Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  textWrapper: {
    flex: 1,
    padding: 20
  },
  Intro1: {
    fontSize: 30,
    color: "#128690"
  },
  Intro2: {
    fontSize: 30,
    color: "#128690",
    marginTop: -5
  },
  welcomeText: {
    fontSize: 17,
    color: "#ACB2B2",
    opacity: 0.8,
    marginTop: 20
  },
  footer: {
    flex: 1,
    backgroundColor: "#2FD6B6"
  }
});
export default Account;
