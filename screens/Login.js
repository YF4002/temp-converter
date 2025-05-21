// screens/Login.js
import React, { useState } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";
import { s } from "./Login.style";
import { signInUser } from "../api/user";
import { auth, provider } from "../firebaseConfig";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    try {
      await signInUser(email, password);
      console.log("Logged in with:", email);
      navigation.replace("MainApp"); 
    } catch (error) {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
  try {
    await signInWithGoogle(auth);
    console.log("Logged in with Google");
    navigation.replace("MainApp");
  } catch (error) {
    Alert.alert("Google Sign-In Failed", "Please try again.");
  }
};

  return (
    <View style={s.container}>
      <Text style={s.title}>Temp Converter</Text>
      <Text style={s.title1}>Login</Text>
      <TextInput
        style={s.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={s.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={s.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#0066cc" />
      </View>
      
      <View style={s.buttonContainer}>
        <Button title="Sign in with Google" onPress={handleGoogleLogin} color="#DB4437" />
      </View>

      <Text style={s.link} onPress={() => navigation.navigate("Register")}>
        Don't have an account? Register
      </Text>
    </View>
  );
}
