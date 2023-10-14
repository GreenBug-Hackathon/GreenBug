import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logoutState } from "../../redux/authSlice";
import Animated, { FadeIn } from "react-native-reanimated";

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <Text
        onPress={() => {
          dispatch(logoutState());
        }}
      >
        Main
      </Text>
    </Animated.View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#088551",
  },
});
