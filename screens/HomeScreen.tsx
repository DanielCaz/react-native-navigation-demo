import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { notes } from "../db";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type HomeScreenNavigationProp = HomeScreenProps["navigation"];

const HomeScreen = () => {
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
