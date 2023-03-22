import { useState, useEffect } from "react";
// import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import {
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";

// google auth
import { auth } from "../../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth"

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// removes the log out button on the top left
				// that appears if we use navigate
				navigation.replace("Home");
			}
		});
		// returning unsubscribe here stops the listener from being called
		return unsubscribe;
	}, []);

	const handleLogin = () => {        
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
			})
			.catch((err) => {
				alert(`Incorrect email or password, try again`);
				console.log(err.message);
			});
	};

	const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user.email);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<KeyboardAvoidingView
			className="flex-1 justify-center items-center"
			behavior="padding"
		>
			<Text className="font-bold text-2xl mb-3">Welcome Back!</Text>
			<Text className="font-light mb-8 text-gray-600">Please enter your account here</Text>
			{/* input container */}
			<View className="w-[80%] bg-white rounded-lg mb-3">
				<TextInput
					className="p-2 placeholder:text-left"
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
			</View>

			<View className="w-[80%] bg-white rounded-lg">
				<TextInput
					className="p-2 placeholder:text-left"
					placeholder="Password"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>

			{/* button container */}
			<View className="w-[60%] justify-center items-center mt-10">
				<TouchableOpacity
					onPress={handleLogin}
					className="bg-blue-600 p-2 rounded-lg w-full"
				>
					<Text className="text-white text-center font-bold">Login</Text>
				</TouchableOpacity>

                {/* TODO */}
				<Text className="mt-2 font-bold">Or continue with</Text>
				<TouchableOpacity
					onPress={loginWithGoogle}
					className="bg-white p-2 mb-2 rounded-lg w-full border-2 border-red-600 mt-2"
				>
					<Text className="text-red-600 text-center font-bold">Google</Text>
				</TouchableOpacity>
				
                <Text className="text-center font-semibold my-5">Don't have an account, Sign Up:</Text>
                <TouchableOpacity
					onPress={() => {
                        navigation.navigate("SignUp")
                    }}
					className="bg-white p-2 rounded-lg w-full border-2 border-blue-600"
				>
					<Text className="text-blue-600 text-center font-bold">Sign Up</Text>
				</TouchableOpacity>				
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
