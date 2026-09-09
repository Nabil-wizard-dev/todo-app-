import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

// export type RootStackParamList = {
//   Home: undefined,
//   Form: undefined,
// }

const FloatingButton = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <TouchableOpacity style={styles.button}
      onPress={()=>navigation.navigate('Form')}
      >
        <Text style={styles.Text}>+</Text>
      </TouchableOpacity>
   </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
   position:'absolute',
   bottom:'20',
   right:'10',
    height: '60',
    width: '60',
    borderRadius:'100%',
    backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent:'center',
  },
  Text:{
   fontSize:30,
  }
});
