import { useState } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user.email)
            })
            .catch(err => {
                alert(`Email does not exist`)
                console.log(err.message)
            })
    }

    const handleRegistration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                // console.log(user.email)
            })
            .catch(err => {
                alert(`Email already in use`)
                console.log(err.message)
            })
    }

    // console.log(password)
    // console.log(email)

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
        {/* input container */}
        <View className="w-[80%] bg-white rounded-lg mb-3">                        
            <TextInput
                className="p-2 placeholder:text-center"
                placeholder='Email' 
                value={email} 
                onChangeText={text => setEmail(text)}
            />
        </View>

        <View className="w-[80%] bg-white rounded-lg">
        <TextInput       
                className="p-2 placeholder:text-center"          
                placeholder='Password'
                secureTextEntry 
                value={password} 
                onChangeText={text => setPassword(text)}
            />
        </View>

        {/* button container */}
        <View className="w-[60%] justify-center items-center mt-10">
            <TouchableOpacity
                onPress={handleLogin}
                className="bg-blue-600 p-2 mb-2 rounded-lg w-full"
            >
                <Text className="text-white text-center font-bold">
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity     
                onPress={handleRegistration}           
                className="bg-white p-2 rounded-lg w-full border-2 border-blue-600" 
            >
                <Text className="text-blue-600 text-center font-bold">
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen