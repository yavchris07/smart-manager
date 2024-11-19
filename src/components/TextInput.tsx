import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'green'
    }
})

interface textInputProps {
    icon:string,
    placeholder:string,
    validate: (input:string)=>boolean
}

const TextInput = ({icon,placeholder,validate}:textInputProps) => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

// export default TextInput