import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NoteScreen from "./screens/NoteScreen";

// RootStackParamList is a type that defines the parameters that can be passed to the screens in the stack.
export type RootStackParamList = {
  Home: undefined;
  Note: { noteId: number };
};

// Create a native stack navigator. This is a stack navigator that uses native navigation components.
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // NavigationContainer is a component which manages the navigation tree and contains the navigation state.
    <NavigationContainer>
      {/* Stack.Navigator is a component that manages the navigation stack. */}
      <Stack.Navigator>
        {/* Stack.Screen is a component that defines a screen in the stack. */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
