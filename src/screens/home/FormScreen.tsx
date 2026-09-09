import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppParamList } from '../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import FloatingButton from '../../components/FloatingButton';

type Props = NativeStackScreenProps<AppParamList>;

const FormScreen = () => {
  const nom = useNavigation<Props>();
  return (
    <View>
      <Text>FormScreen</Text>
      <FloatingButton route={()=>{nom.navigation.navigate('Home')}}></FloatingButton>
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({})