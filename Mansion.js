import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Mansion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubText}>Create an account</Text>
        <Text style={styles.headerText}>
          Mansions you only {"\n"} dreamed of
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.signinBtn}>
          <Text style={styles.signinBtnText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.footerBtns}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.footerBtnText}>Create one</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 70
  },
  header: {
    flex: 1
  },
  headerSubText: {
    fontSize: 20,
    color: "#A8A8A8"
  },
  headerText: {
    fontSize: 34,
    color: "#1D2CD9",
    marginTop: 10,
    fontWeight: "bold"
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  signinBtn: {
    backgroundColor: "#434AE5",
    borderRadius: 5,
    height: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  signinBtnText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold"
  },
  footerBtns: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20
  },
  footerBtnText: {
    color: "#1E35E6",
    marginLeft: 5
  }
});

export default Mansion;
