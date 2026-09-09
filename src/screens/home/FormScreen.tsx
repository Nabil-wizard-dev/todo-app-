import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import Body from '../../components/Body';


const FormScreen = () => {

  const [title , setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState<string>();

  interface Todo {
  title: string;
  category: string;
  date: string | undefined;}

  const [dotos, setTodos] = useState<Todo[]>([]);

  const onSubmit = ()=>{
    const data={
      title:title,
      category:category,
      date:date
    }

    console.log('data:', dotos);

    setTodos((prevTodos) => [...prevTodos, data]);
    
    Alert.alert("new to do",`Title: ${title}\nCategory: ${category}\nDate: ${date}`)

  };


  return (
    <View style={{ flex: 1 }}>
      <Header title="TODO add form" />
      <Body>
        <View style={{ padding: 20 }}>
          {/* Titre */}
          <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '600',color:'white'}}>
            Title
          </Text>

          <TextInput
            onChangeText={setTitle}
            value={title}
            placeholder="le titre"
            style={{
              borderWidth: 1,
              // placeholder ='white',
              borderColor: '#ccc',
              color:"#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 20,
            }}
          />

          {/*  categorie */}
          <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '600' ,color:'white'}}>
            Category
          </Text>

          <TextInput
           onChangeText={setCategory}
            value={category}
            placeholder="la categorie"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              color:"#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 20,
            }}
          />

          {/* Date */}
          <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '600',color:'white' }}>
            Date
          </Text>

          <TextInput
            onChangeText={setDate}
            value={date}
            placeholder="la date"
            placeholderTextColor="#aaaaaa"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              color:"#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 30,
            }}
          />

          {/* envoi */}
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              backgroundColor: '#007AFF',
              paddingVertical: 14,
              borderRadius: 8,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Body>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({});
