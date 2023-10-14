import { StyleSheet, Text, View } from "react-native";

const DataItem = ({
  icon,
  value,
  label,
}: {
  icon: JSX.Element;
  value: string;
  label: string;
}) => (
  <View style={styles.dataContainer}>
    {icon}
    <View style={{ marginLeft: 10, width: 100 }}>
      <Text style={styles.title}>{value}</Text>
      <View style={styles.spacer} />
      <Text style={styles.desc}>{label}</Text>
    </View>
  </View>
);

export default DataItem;

const styles = StyleSheet.create({
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
  dataContainer: {
    flexDirection: "row",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#efefef",
  },
});
