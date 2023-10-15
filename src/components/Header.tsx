import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SvgLogo from "../assets/icons/logo";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to</Text>
      <View style={styles.logo}>
        <SvgLogo width={80} height={80} />
        <Text style={styles.logoText}>GreenBug</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flex: 0.7,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "400",
    color: "white",
    marginTop: 10,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
    marginTop: 15,
  },
});
