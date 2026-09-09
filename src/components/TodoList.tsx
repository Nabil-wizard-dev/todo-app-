import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react';

interface TodoAttributs {
  title: string;
  category: string;
  date: string;
}

const TodoList = ({
  title = 'Terminer mon travail du jrs',
  category = 'Tache',
  date = '9/9/2026',
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.cercle} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.category}>{category}</Text>
        <Text>{date}</Text>
      </View>

      <TouchableOpacity style={styles.delete}>
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;

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
  },

  content: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 24,
    color: '#111',
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
