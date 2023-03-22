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
} from "firebase/auth";

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
        <>
		<KeyboardAvoidingView
			className="flex-1 justify-center items-center"
			behavior="padding"
		>
			<Text className="font-bold text-2xl mb-3">Welcome Back!</Text>
			<Text className="font-light mb-8 text-gray-600">
				Please enter your account here
			</Text>
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
				<Text className="h-px my-8 bg-gray-400 w-full mb-2"/>
                <Text className="text-gray-800">Or continue with</Text>

				<TouchableOpacity
					onPress={loginWithGoogle}
					className="bg-red-600 p-2 mb-2 rounded-lg w-full mt-5"
				>
					<Text className="text-white text-center font-bold">Google</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
        <View className="flex justify-center flex-row my-16">
					<Text className="text-center font-semibold ">
						Don't have an account?
					</Text>

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("SignUp");
						}}
						className=""
					>
						<Text className="text-blue-600 text-center font-bold ml-2">Sign Up</Text>
					</TouchableOpacity>
				</View>
        </>
	);
};

export default LoginScreen;
