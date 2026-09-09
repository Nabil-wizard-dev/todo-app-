import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import TodoElement from '../../components/TodoElement';
import FloatingButton from '../../components/FloatingButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { AppParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { useTodos } from '../../context/TodoContext';

// type Props = NativeStackScreenProps<AppParamList>;

const HomeScreen = () => {
  const { todos } = useTodos();
  console.log('data',todos);
  const data = todos;
 
  // const [deleted, setDeteled] = useState<boolean>(false);
  // const [done, setDone] = useState<boolean>(false);

  //rendu 
  return (
    <View style={{ flex: 1 }}>
      <Header title="TODO Header" />
      <Body>

        <View style={styles.top}>
          <Text style={styles.title}>To-Do.</Text>

          <Text style={styles.date}>2026-09-08</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <TodoElement/>
          {todos.map((todo, index)=>(
            <TodoElement
            key={index }
            title={todo.title}
            category={todo.category}
            date={todo.date}
            />
          ))}
        </ScrollView>

      </Body>
        <FloatingButton></FloatingButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  date: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
