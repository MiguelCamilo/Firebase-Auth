import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const SignUp = () => {

    const handleRegistration = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
                // console.log(user)
			})
			.catch((err) => {
				alert(`Email already in use`);
				console.log(err.message);
			});
	};

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior='padding'>
        <View className="w-[80%]">
            <TextInput
                className="p-1 rounded-md bg-white"
                placeholder='Email'
            >
            </TextInput>            
        </View>
    </KeyboardAvoidingView>
    
  )
}

export default SignUp
