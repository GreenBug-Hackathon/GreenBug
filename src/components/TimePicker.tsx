import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePicker = ({ label }: { label: string }) => {
  return (
    <View style={styles.timePicker}>
      <Text style={styles.timePickerLabel}>{label}:</Text>
      {/* <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={() => {}}
      /> */}
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  timePicker: {
    alignItems: "center",
    gap: 8,
  },
  timePickerLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
});
