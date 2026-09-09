import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import TodoList from '../../components/TodoList';
import FloatingButton from '../../components/FloatingButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<AppParamList>;

const HomeScreen = () => {
  const navigate = useNavigation<Props>();
  return (
    <View style={{ flex: 1 }}>
      <Header title="TODO Header" />
      <Body>

        <View style={styles.top}>
          <Text style={styles.title}>To-Do.</Text>

          <Text style={styles.date}>2026-09-08</Text>
        </View>

        <View>
          <TodoList></TodoList>
        </View>

      </Body>
        <FloatingButton route={()=>{navigate.navigation.push('Form')}}></FloatingButton>
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
