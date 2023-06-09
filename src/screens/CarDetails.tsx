import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export function CarDetails() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
