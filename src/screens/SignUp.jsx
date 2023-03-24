import {
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// google auth
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
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

	const handleRegistration = () => {
        if (email.length || password.length <= 1) {
            alert("Please enter a valid email and password!");
        }

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				// console.log(user);
			})
			.catch((err) => {
				// alert(`Email already in use`);
				console.log(err.message);
			});
	};

	return (
		<>
			<KeyboardAvoidingView
				className="flex-1 justify-center items-center mt-24"
				behavior="padding"
			>
				<View className="mb-5">
					<Text className="font-bold text-2xl text-center mb-3">Sign Up</Text>
					<Text className="text-md font-light text-gray-600">
						Please create an account below
					</Text>
				</View>
				<View className="w-[90%] mb-5">
					<TextInput
						className="p-2 placeholder:text-left bg-white rounded-lg"
						placeholder="Email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>

				<View className="w-[90%] mb-5">
					<TextInput
						className="p-2 placeholder:text-left bg-white rounded-lg"
						placeholder="Password"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>

				<TouchableOpacity
					onPress={handleRegistration}
					className="bg-blue-600 p-3 rounded-lg w-[90%] mt-5"
				>
					<Text className="text-white text-center font-bold">Sign Up</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
			<View className="flex-1 flex-row justify-center items-end mb-16">
				<Text className="font-semibold">Already have an account?</Text>
				<TouchableOpacity className="ml-2">
					<Link to="/Login">
						<Text className="font-bold text-blue-600">Log In</Text>
					</Link>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default SignUp;
