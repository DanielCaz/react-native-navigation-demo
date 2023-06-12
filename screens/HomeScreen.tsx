import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { notes } from "../db";

// NativeStackScreenProps is a type that defines the props that are passed to the screen components in the stack.
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
// HomeScreenNavigationProp is a type that defines the navigation prop that is passed to the screen components in the stack.
type HomeScreenNavigationProp = HomeScreenProps["navigation"];

const HomeScreen = () => {
  // useNavigation is a hook that returns the navigation prop of the screen component.
  const navigator = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {notes.map((note) => (
        <TouchableOpacity
          onPress={() => navigator.navigate("Note", { noteId: note.id })}
          key={note.id}
          style={styles.noteContainer}
        >
          <Text style={styles.noteTitle}>{note.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noteContainer: {
    padding: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
  noteTitle: {
    fontSize: 20,
  },
});
