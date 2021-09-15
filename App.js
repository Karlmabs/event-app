import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DisplayOneEvent from "./app/DisplayOneEvent";
import AdvancedModal from "./app/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const events = [
    {
      day: "11TH",
      month: "NOV",
      title: "Sunday Supper Club",
      details:
        "A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn cooking methods from top chef...",
      time: "16:00 - 19:00",
      address: "1620 Vineyard Drive,USA",
    },
    {
      day: "13TH",
      month: "NOV",
      title: "Evenings in the Park",
      details:
        "We invite you to listen bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tast...",
      time: "06:30 - 08:30",
      address: "Estuary Park",
    },
    {
      day: "15TH",
      month: "NOV",
      title: "Morning Breews & Views",
      details:
        "Enjoy free samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet cofee d...",
      time: "08:00 - 15:00",
      address: "The Teapot and Brew Club",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>Events</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={events}
        renderItem={({ item }) => <DisplayOneEvent item={item} />}
        keyExtractor={(item) => item.day}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          position: "absolute",
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: "orange",
          borderRadius: 100,
        }}
        onPress={() => setShowModal(true)}
      >
        <Icon name="chat" size={45} color="black" />
      </TouchableOpacity>
      {showModal ? (
        <AdvancedModal open={showModal} onClose={() => setShowModal(false)} />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    // marginTop: 30,
  },
  header: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: "2%",
    // marginTop: 30,
  },
});
