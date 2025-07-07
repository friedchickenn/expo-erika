import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{backgroundColor: "black", padding: 10}}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "pink" }}>
            Erika Yanti
        </Text>
      </View>

          <View
        style={{
        width: 120,
        height: 50,
        backgroundColor: "gray",
        borderRadius: 30,
        marginTop: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        }}>  <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
            105841104322
        </Text>
      </View>
      
      <View style={{width: 100, height: 100, backgroundColor: "blue", marginTop: 20, borderRadius: 50}}>
      </View>

      <View
        style={{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "orange",
        marginTop: 20,
      }}/>

    </View>
  );
}
