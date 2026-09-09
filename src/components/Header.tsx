import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

 

const Header = ({
   title = '',
}) => {
  return (
    <View>
       <View style={styles.header}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   header: {
    height: 80,
    width: '100%',
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
})