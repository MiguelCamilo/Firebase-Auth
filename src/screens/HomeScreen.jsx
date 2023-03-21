import { Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";

const HomeScreen = () => {
	return (
		<KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
			<View>
				<Text>Home Screen</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

export default HomeScreen;
