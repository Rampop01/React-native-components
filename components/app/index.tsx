import { Text, View } from "react-native";
import Toggle from "../components/Toggle";
import WeatherApp from "@/components/WeatherApp";
import ColorPicker from "@/components/ColorPicker";
import TodoList from "@/components/TodoList";
import UserProfileManager from "@/components/Profile";
export default function Index() {
  return (
    <View>
      {/* <Toggle /> */}
      {/* <WeatherApp/> */}
      {/* <ColorPicker/> */}
      {/* <TodoList/> */}
      <UserProfileManager/>
    </View>
  );
}
