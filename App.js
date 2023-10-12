// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

import ShoppingLists from "./components/ShoppingLists";
import Welcome from "./components/Welcome";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCwX8peWg9oCr6bf5JPQmmDrfBHEiseIyU",
    authDomain: "shopping-list-demo-fbfb0.firebaseapp.com",
    projectId: "shopping-list-demo-fbfb0",
    storageBucket: "shopping-list-demo-fbfb0.appspot.com",
    messagingSenderId: "320982864209",
    appId: "1:320982864209:web:78755689579042ed2c4370",
    measurementId: "G-H0GQKSSV1S",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ShoppingLists">
          {(props) => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
