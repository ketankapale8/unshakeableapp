/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {  Pressable, TouchableOpacity } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from './screens/LoginPage';
import CreateAccountPage from './screens/CreateAccountPage';
import ContactUsPage from './screens/ContactUsPage';
import PaymentInfo from './screens/PaymentInfo';
const Stack = createNativeStackNavigator();



// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
    {hideSplashScreen ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="CreateAccount"
          component={CreateAccountPage}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="ContactUs"
          component={ContactUsPage}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="PaymentInfo"
          component={PaymentInfo}
          options={{ headerShown: false }}
        />



      </Stack.Navigator>
    ) : null}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
