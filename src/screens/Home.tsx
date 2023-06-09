import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import Animated from "react-native-reanimated";

import * as MyModule from "../../modules/my-module";

export function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{ width: 150, height: 150, backgroundColor: "green" }}
        sharedTransitionTag="sharedTag"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("CarDetails")}
      />

      <Button title="Vibrate" onPress={() => MyModule.vibrate()} />
      <Button
        title="Open Youtube"
        onPress={() => MyModule.openLink("https://youtube.com")}
      />
    </View>
  );
}
