import {
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import React from "react";

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
		<KeyboardAvoidingView
			className="flex-1 justify-center items-center"
			behavior="padding"
		>
			<View className="w-[90%] mb-5">
				<TextInput className="p-1.5 rounded-md bg-white" placeholder="Email" />
			</View>

            <View className="w-[90%] mb-5">
				<TextInput className="p-1.5 rounded-md bg-white" placeholder="Password" secureTextEntry={true}/>
            </View>

            <TouchableOpacity className="bg-blue-600 p-3 rounded-lg w-[90%]">
                <Text className="text-white text-center font-bold">Register</Text>                                
            </TouchableOpacity>            
		</KeyboardAvoidingView>
	);
};

export default SignUp;
