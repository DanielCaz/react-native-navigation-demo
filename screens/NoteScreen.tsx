import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { INote } from "../interfaces/INote";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { notes } from "../db";

type NoteScreenProps = NativeStackScreenProps<RootStackParamList, "Note">;
type NoteScreenRouteProp = NoteScreenProps["route"];

const NoteScreen = () => {
  const route = useRoute<NoteScreenRouteProp>();

  const { noteId } = route.params;
  const note = notes.find((note) => note.id === noteId) as INote;

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text style={styles.noteContent}>{note.content}</Text>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noteContent: {
    fontSize: 18,
  },
});
