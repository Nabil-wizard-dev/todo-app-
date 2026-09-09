import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface BodyProps{
   children: ReactNode
}


const Body = ({ children }: BodyProps) => {
  return (
    <View style={styles.body}>
      {children}
    </View>
  );
}

export default Body

const styles = StyleSheet.create({
   body : {
    flex: 1,
    width: '100%',
    backgroundColor: '#191970',
    paddingHorizontal: 8,
   }
})