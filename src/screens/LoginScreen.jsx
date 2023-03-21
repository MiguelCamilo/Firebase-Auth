import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        <View
            // style={styles.inputContainer}
        >
            <Text>Hello</Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 40,
        paddingLeft: 40
    }
})