import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Jadwal from "../database/db"

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.keberangkatan} - {item.kedatangan}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.maskapaiContainer}>
          <Text style={styles.maskapai}>{item.maskapai}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {item.tanggalTerbang}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Hiling.id</Text>
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
      Copyright Satrio M. J. Sianturi - 120140238
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ec55",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#00ec55",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapaiContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  maskapai: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "#000000",
  },
  copyright: {
    color: "white",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;
