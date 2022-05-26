import { View, StyleSheet } from "react-native"
import ShoppingZone from "./src/ShoppingZone";

export default function App() {
  


  return (
    <View style = {{ flex: 1, flexDirection: "row" }}>
      <View style = {{ flex: 1, flexShrink: 0, borderColor: "black", borderWidth: 3 }}><ShoppingZone/></View>
      <View style = {{ flex: 1 }}></View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
