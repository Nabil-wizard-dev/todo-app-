import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Todo, useTodos } from '../context/TodoContext';

interface TodoAttributs {
  title: string;
  category: string;
  date: string;
  isDeleted:false;
  idDone:false;
}

const TodoElement = ({
  id,
  title = 'Terminer mon travail du jrs',
  category = 'Tache',
  date = '9/9/2026',
  isDeleted,
  isDone,
  
}:Todo) => {
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {toggleDone, toggleDeleted} = useTodos();

  return (
    <Pressable onPress={()=>{navigation.navigate('Form',{ todoId:id }),console.log({ todoId:id });
    }} style={styles.card}>
      <TouchableOpacity style={[styles.cercle, isDone && styles.cercleDone]} onPress={()=>toggleDone(id)} />

      <View style={styles.content}>
        <Text style={[styles.title, isDone && styles.titleDone]} >{title}</Text> 

        <Text style={styles.category}>{category}</Text>
        <Text>{date}</Text>
      </View>

      <TouchableOpacity
       style={styles.delete} onPress={()=>toggleDeleted(id)}
       >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default TodoElement;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginBottom: 25,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  cercle: {
    width: 38,
    height: 38,
    borderRadius: '100%',
    borderWidth: 4,
    borderColor: '#211f78',
    // backgroundColor:'#211f78'
  },

  cercleDone: {
    width: 38,
    height: 38,
    borderRadius: '100%',
    borderWidth: 4,
    borderColor: '#211f78',
    backgroundColor:'#211f78'
  },

  content: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 24,
    color: 'black',
  },

  titleDone: {
    fontSize: 24,
    color: 'black',
    opacity:0.2,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'double',
  },

  category: {
    fontSize: 18,
    color: '#d6ac2e',
    marginTop: 5,
  },

  delete: {
    width: 40,
    alignItems: 'center',
    alignSelf:'flex-end',
  },

  deleteIcon: {
    fontSize: 26,
  },
});
