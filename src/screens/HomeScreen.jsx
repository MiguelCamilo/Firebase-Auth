import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React from "react";

// google authentication
import { auth } from '../../firebase'
import { signOut } from "firebase/auth";


const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login")
                alert("You have successfully signed out")
            })
            .catch(err => console.error(err))
    }

	return (
		<KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
			<View>
                {/* reason for question mark is because email can be undefined which can cause crash */}
				<Text className="font-bold text-sm">Welcome {auth.currentUser?.email}</Text>
			</View>

            <View>
                <TouchableOpacity onPress={handleSignOut} className="mt-2 bg-red-600 rounded-lg">
                    <Text className="text-white font-bold p-1.5">Sign Out</Text>
                </TouchableOpacity>
            </View>
		</KeyboardAvoidingView>
	);
};

export default HomeScreen;
