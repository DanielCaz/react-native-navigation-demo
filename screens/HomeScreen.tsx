import { StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useEffect, useState } from "react";
import { ITodo } from "../interfaces/ITodo";

// NativeStackScreenProps is a type that defines the props that are passed to the screen components in the stack.
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
// HomeScreenNavigationProp is a type that defines the navigation prop that is passed to the screen components in the stack.
type HomeScreenNavigationProp = HomeScreenProps["navigation"];

const HomeScreen = () => {
  // useNavigation is a hook that returns the navigation prop of the screen component.
  const navigator = useNavigation<HomeScreenNavigationProp>();

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.todoContainer}
          onPress={() => navigator.navigate("Todo", { todoId: item.id })}
        >
          <Text style={styles.todoTitle}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  todoContainer: {
    padding: 5,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#fff",
  },
  todoTitle: {
    fontSize: 20,
  },
});
