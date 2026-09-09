import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

export type Todo = {
  // id:string;
  title: string;
  category: string;
  date: string;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};



const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos doit être utilisé à l’intérieur d’un TodoProvider');
  }
  return context;
};


// const TodoContext = () => {
//   return (
//     <View>
//       <Text>TodoContext</Text>
//     </View>
//   )
// }
// export default TodoContext
// const styles = StyleSheet.create({})