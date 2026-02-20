import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("./assets/generic-avatar.png")}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.name}>Dev Junior</Text>
          <Text style={styles.title}>Full Stack Developer</Text>

          <View style={styles.separator}></View>

          <View style={styles.icons}>
            <View style={styles.iconBox}>
              <FontAwesome
                name="github"
                size={28}
                color="#333"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconBox}>
              <FontAwesome
                name="linkedin"
                size={28}
                color="#0077B5"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconBox}>
              <FontAwesome
                name="envelope"
                size={28}
                color="#333"
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 28,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 6,
    borderColor: "#fff",
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 22,
    fontWeight: "900",
    marginTop: 8,
    color: "#111",
  },
  title: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 14,
    color: "#8a8a8a",
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 16,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    top: -55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  iconBox: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#eee",
    marginHorizontal: 8,
  },
  separator: {
    width: "60%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },
});
