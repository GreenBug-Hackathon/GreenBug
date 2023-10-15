import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import TextField from "../../components/TextField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginState } from "../../redux/authSlice";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const Login = () => {
  const [email, setEmail] = useState<string>("ilhambabayev@smartgreen.az");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    dispatch(loginState({ email, password }));
  };

  return (
    <Animated.View entering={FadeIn}>
      <ImageBackground
        source={require("../../assets/images/backGround.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.container}>
          <Header />
          <View style={{ height: 110 }} />
          <Animated.View
            entering={FadeInDown.springify().damping(12)}
            style={styles.inputs}
          >
            <View style={styles.spacer} />
            <TextField
              label="Email"
              inputValue={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextField
              label="Password"
              inputValue={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.submitButton}
              >
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(8, 133, 81, 0.8)",
    justifyContent: "flex-end",
  },
  inputs: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    height: "70%",
    gap: 20,
  },
  spacer: {
    height: 20,
  },
  submitText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
  },
  submitButton: {
    backgroundColor: "#088551",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Login;
