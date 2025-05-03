// import { AppleMaps, GoogleMaps } from "expo-maps";
import { Platform, Text } from "react-native";

const Map = () => {
  // return (
  //   <div>

  //   </div>
  // )

  // if (Platform.OS === "ios") {
  //   return <AppleMaps.View style={{ flex: 1 }} />;
  // } else if (Platform.OS === "android") {
  //   return <GoogleMaps.View style={{ flex: 1 }} />;
  // } else {
  //   return <Text>Maps are only available on Android and iOS</Text>;
  // }

  return <Text>Maps are only available on Android and iOS</Text>;
};

export default Map;
