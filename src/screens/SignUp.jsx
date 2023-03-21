import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
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
    <KeyboardAvoidingView>
        <View>
            <Text>Hello</Text>
        </View>
    </KeyboardAvoidingView>
    
  )
}

export default SignUp
