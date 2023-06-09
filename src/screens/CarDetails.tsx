import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import Animated from "react-native-reanimated";
import { sharedElementTransition } from "../animations/sharedElementTransition";

export function CarDetails() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
        sharedTransitionTag="sharedTag"
        sharedTransitionStyle={sharedElementTransition}
      />
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
