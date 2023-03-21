import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

// nav imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>

				<Stack.Screen
          // removes header
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen name="Home" component={HomeScreen} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}
