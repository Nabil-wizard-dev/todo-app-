import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, ReactNode, useContext, useState } from 'react';

export type Todo = {
  id: string;
  title: string;
  category: string;
  date: string;
  isDone: boolean;
  isDeleted: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id' | 'isDone' | 'isDeleted'>) => void;
  updateTodo: (id: string, updated: Omit<Todo, 'id' | 'isDone' | 'isDeleted'>) => void;
  toggleDone : (id: string) =>void;
  toggleDeleted : (id: string) =>void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Omit<Todo, 'id' | 'isDone' | 'isDeleted'>) => {
    const newTodo = {
      ...todo,
      id: Date.now().toString(),
      isDone: false,
      isDeleted: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const updateTodo = (id: string, updated: Omit<Todo, 'id' | 'isDone' | 'isDeleted'>) => {
  setTodos((prev) =>
    prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
  );
};

  const toggleDone = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, isDone: !t.isDone } : t)),
    );
  };

  const toggleDeleted = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, isDeleted: !t.isDeleted } : t)),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo,toggleDone,toggleDeleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(
      'useTodos doit être utilisé à l’intérieur d’un TodoProvider',
    );
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
