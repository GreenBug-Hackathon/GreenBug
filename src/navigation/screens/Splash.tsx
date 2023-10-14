import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SvgLogo from "../../assets/icons/logo";
import Animated, { FadeInDown } from "react-native-reanimated";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getStatus } from "../../redux/authSlice";
import { AuthState } from "../../models";

type StackParamList = {
  Start: undefined;
};

const Splash = () => {
  type NavigationProps = NativeStackNavigationProp<StackParamList>;
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getStatus());
    setTimeout(() => {
      navigation.replace("Start");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInDown.duration(1000).springify().damping(12)}
      >
        <SvgLogo />
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#088551",
  },
});
