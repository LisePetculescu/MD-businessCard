import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function App() {
  function buttonPressed() {
    console.log("Pressable Pressed");
    alert("Studér Mobile Development! 😄");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/kea-logo.png")} />
      <Text style={styles.textBold}>Velkommen til Københavns Erhvervsakademi!</Text>
      <Text style={styles.text}>Guldbergsgade 29n, 2200 København N</Text>
      <Text style={styles.text}>+45 46 46 00 00</Text>
      <Text style={styles.text}>kea@kea.dk</Text>
      <StatusBar style="auto" />
      <Pressable style={styles.knap} onPress={buttonPressed}>
        <Text style={styles.textBoldSmall}>Klik mig</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3333",
    alignItems: "center",
    justifyContent: "center"
  },

  textBold: {
    fontSize: 15,
    fontWeight: "800",
    margin: 4
  },
  textBoldSmall: {
    fontSize: 15,
    fontWeight: "700",
    margin: 4
  },

  text: {
    fontSize: 15,
    fontWeight: "500",
    margin: 4
  },

  knap: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    padding: 2,
    borderRadius: 5,
    marginTop: 20
  },

  image: {
    marginBottom: 30
  }
});
