import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function DisplayOneEvent({ item }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.listItem}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "900", color: "white" }}>
          {item.day} {item.month}
        </Text>
        <Text style={{ fontWeight: "600", color: "white" }}>{item.title}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          height: 1,
          backgroundColor: "white",
          marginBottom: "2%",
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "500",
            textDecorationLine: "underline",
            marginBottom: "2%",
            color: "white",
          }}
        >
          {item.time}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontStyle: "italic", color: "white" }}>
          {item.address}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "orange", margin: "2%" }}>
            {showDetails ? "-" : "+"} Event Details
          </Text>
        </View>
      </TouchableOpacity>
      {showDetails ? (
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", margin: "2%" }}>{item.details}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#363636",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
});

export default DisplayOneEvent;
