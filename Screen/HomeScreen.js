import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>Hiling.id</Text>
      </View>
      <View style={styles.UIContainer}>
        <Text>Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="Radin Intan"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Tujuan</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="Soekarno Hatta"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="17 Maret 2022"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Detail Screen")}>
          <Text style={styles.button}>Cari</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          Copyright Satrio M. J. Sianturi - 120140238
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#fc7500",
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#00ec55",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 200,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 0,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#000000",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "#ffffff",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#000000",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
