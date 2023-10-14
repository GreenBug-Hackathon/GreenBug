import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Animated, { FadeIn } from "react-native-reanimated";
import { RootState } from "../../redux/store";
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

const Main = () => {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    general.getData().then((res) => {
      console.log(data);
      setData(res);
    });
  }, []);

  const { user } = useSelector<RootState, AuthState>((state) => state.auth);

  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.nameText}>Hello, {user.name}</Text>
        <Text style={styles.altText}>It's a sunny day!</Text>
      </View>
      <View style={styles.card}>
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
        <DataItem icon={<SvgLight />} value={`${data.light}%`} label="Light" />
      </View>
    </Animated.View>
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
    width: "80%",
    height: "25%",
    borderRadius: 8,
    shadowOpacity: 0.3,
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
    backgroundColor: "#088551",
    justifyContent: "center",
    flex: 0.2,
    padding: 20,
  },
  nameText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "400",
  },
  dataContainer: {
    flexDirection: "row",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#efefef",
  },
  line: {
    width: 1,
    height: 40,
    backgroundColor: "#efefef",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  spacer: {
    height: 5,
  },
  desc: {
    color: "#888",
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
