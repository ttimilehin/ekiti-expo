import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.profile}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={styles.profileImg}
          />
        </View>
        <View style={[styles.signinBtns]}>
          <TouchableOpacity style={[styles.signinBtn, styles.activeBtn]}>
            <Text style={styles.activeBtnText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signinBtn}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formWrapper}>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.username}>Dayo</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email address"
            keyboardType="email-address"
            placeholderTextColor="#c8c8c8"
            style={styles.formInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#c8c8c8"
            style={styles.formInput}
          />
        </View>
        <TouchableOpacity style={styles.footerPassBtn}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBtnWrapper}>
          <TouchableOpacity activeOpacity={0.8} style={styles.footerBtn}>
            <Text style={styles.footerBtnText}>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  profile: {
    flex: 1
  },
  signinBtns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "flex-start"
  },
  signinBtn: {
    fontSize: 18
  },
  activeBtn: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  activeBtnText: {
    fontWeight: "600",
    color: "#000"
  },
  formWrapper: {
    flex: 3,
    width: "100%",
    paddingHorizontal: 20
  },
  footer: {
    flex: 1
  },
  welcome: {
    fontSize: 40,
    color: "#000"
  },
  username: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginTop: -3
  },
  inputWrapper: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 50
  },
  formInput: {
    borderBottomColor: "#c8c8c8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 30
  },
  footer: {
    backgroundColor: "#c8c8c8",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  footerBtn: {
    backgroundColor: "powderblue",
    color: "#fff",
    width: 85,
    height: 48,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    marginRight: 20
  },
  footerBtnText: {
    color: "#fff",
    fontSize: 18
  }
});
