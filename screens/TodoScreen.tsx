import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ITodo } from "../interfaces/ITodo";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useEffect, useState } from "react";

// NativeStackScreenProps is a type that defines the props that are passed to the screen components in the stack.
type NoteScreenProps = NativeStackScreenProps<RootStackParamList, "Todo">;
// NoteScreenRouteProp is a type that defines the route prop that is passed to the screen components in the stack.
type NoteScreenRouteProp = NoteScreenProps["route"];

const TodoScreen = () => {
  // useRoute is a hook that returns the route prop of the screen component.
  const route = useRoute<NoteScreenRouteProp>();

  // Get the noteId from the route params.
  const { todoId } = route.params;

  const [todo, setTodo] = useState<ITodo>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((json) => setTodo(json))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>{todo?.title}</Text>
      <Text style={styles.todoContent}>Completed: {`${todo?.completed}`}</Text>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  todoContent: {
    fontSize: 18,
  },
});
