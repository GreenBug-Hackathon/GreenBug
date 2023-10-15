import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { AppDispatch, RootState } from "../../redux/store";
import { AuthState } from "../../models";
import SvgRainFall from "../../assets/icons/rainFall";
import SvgTemperature from "../../assets/icons/temperature";
import SvgWind from "../../assets/icons/wind";
import SvgHumidity from "../../assets/icons/humidity";
import general from "../../network/general";
import SvgFire from "../../assets/icons/fire";
import SvgNoFire from "../../assets/icons/noFire";
import SvgLight from "../../assets/icons/light";
import DataItem from "../../components/RenderData";
import { logoutState } from "../../redux/authSlice";
import SvgBattery from "../../assets/icons/battery";
import ScheduleCard from "../../components/ScheduleCard";

const Main = () => {
  const [data, setData] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    general.getData().then((res) => {
      setData(res);
    });
  }, []);

  const { user } = useSelector<RootState, AuthState>((state) => state.auth);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      bouncesZoom={false}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 275,
      }}
    >
      <Animated.View entering={FadeIn} style={styles.container}>
        <Animated.View
          entering={FadeInUp.springify().damping(20)}
          style={styles.headerContainer}
        >
          <Text style={styles.nameText}>Hello, {user.name}</Text>
          <Text style={styles.altText}>It's a sunny day!</Text>
        </Animated.View>
        <Animated.View style={styles.card} entering={FadeIn.duration(500)}>
          <DataItem
            icon={<SvgRainFall />}
            value={`${data.rain} mm`}
            label="Rainfall"
          />
          <DataItem
            icon={<SvgTemperature />}
            value={`${data.temperature}° C`}
            label="Temperature"
          />
          <DataItem icon={<SvgWind />} value="3.9 m/s" label="Wind Speed" />
          <DataItem
            icon={<SvgHumidity />}
            value={`${data.humidity}%`}
            label="Humidity"
          />
          <DataItem
            icon={data.gas ? <SvgFire /> : <SvgNoFire />}
            value={data.gas ? "Yes" : "No"}
            label="Gas"
          />
          <DataItem
            icon={<SvgLight />}
            value={`${data.light}%`}
            label="Light"
          />
        </Animated.View>
        <View style={{ flex: 0.8 }}>
          <View style={styles.deviceContainer}>
            <View>
              <Text style={styles.device}>Device 1</Text>
              <Text
                style={styles.model}
                onPress={() => {
                  dispatch(logoutState());
                }}
              >
                Mode JM-G801
              </Text>
            </View>
            <SvgBattery />
          </View>
          <ScheduleCard label="Watering Schedule" />
          <ScheduleCard label="Light Schedule" />
          <ScheduleCard label="Door Schedule" />
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    position: "absolute",
    top: "18%",
    alignSelf: "center",
    width: "91%",
    height: "25%",
    borderRadius: 8,
    shadowOpacity: 0.3,
    elevation: 8,
    shadowRadius: 8,
    flexDirection: "row",
    padding: 5,
    flexWrap: "wrap",
  },
  altText: {
    color: "#efefef",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 10,
  },
  headerContainer: {
    height: "26%",
    backgroundColor: "#088551",
    justifyContent: "center",
    padding: 20,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  nameText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "400",
  },
  device: {
    fontSize: 22,
    fontWeight: "500",
  },
  model: {
    fontSize: 16,
    fontWeight: "300",
    color: "#888",
  },
  deviceContainer: {
    marginTop: 170,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});
