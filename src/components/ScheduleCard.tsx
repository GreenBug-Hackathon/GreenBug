import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TimePicker from "./TimePicker";

const ScheduleCard = ({ label }: { label: string }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <View style={styles.scheduleCard}>
      <Text style={styles.labelText}>{label}:</Text>
      <View style={styles.timePickerContainer}>
        <TimePicker label="Start Time" />
        <TimePicker label="Finish Time" />
      </View>
      <TouchableOpacity
        onPress={toggleStatus}
        style={[
          styles.statusButton,
          { backgroundColor: isActive ? "#088551" : "tomato" },
        ]}
      >
        <Text style={styles.statusButtonText}>
          {isActive ? "Active" : "Inactive"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  scheduleCard: {
    borderWidth: 1,
    borderColor: "#088551",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  labelText: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
  },
  timePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusButton: {
    backgroundColor: "#088551",
    width: "100%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  statusButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
