import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../App';

type Props = {route: ( )=>void};

const FloatingButton = ({route}:Props) => {

  // const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.button}
      onPress={()=>route()}>
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
