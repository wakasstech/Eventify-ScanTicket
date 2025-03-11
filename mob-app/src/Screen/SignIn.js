import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSuccess } from "../globalStore/slices/authSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error de validación", "El correo y la contraseña son obligatorios.");
      return;
    }
  
    if (!validateEmail(email)) {
      Alert.alert("Error de validación", "Por favor, introduce un correo válido.");
      return;
    }
  
    console.log(email, password);
  
    try {
      setLoading(true);
      const response = await fetch("https://demoticket.inasnapmarketing.ai/api/v1/users/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const responseData = await response.json(); // Convert response to JSON
  
      if (response.status === 200) {  // Check if response status is 201
        Alert.alert("Éxito", "¡Inicio de sesión exitoso!");
        console.log(responseData, "response data");
        console.log(responseData.data.user?.role, "rol del usuario");
        const role = responseData.data.user?.role;
        const userName = responseData.data.user?.username;

        await AsyncStorage.setItem('userRole', role);
        await AsyncStorage.setItem('username', userName);
        await AsyncStorage.setItem('isAuthenticate', "true");
        dispatch(loginSuccess({ username: userName, role }));

        // Navegar a la pantalla de inicio o dashboard
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Credenciales inválidas, inténtalo de nuevo.");
      }
    } catch (error) {
      Alert.alert("Error en la solicitud", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    // <View style={styles.container}>
    //   {/* Back Arrow Button */}
    //   <TouchableOpacity onPress={() =>navigation.navigate("TabNavigator")} style={styles.backButton}>
    //   <Image source={require('../assets/BackIcon.png')} style={{width: 30, height: 10, tintColor: 'black'}}     onPress={() => navigation.goBack()} />
    //   </TouchableOpacity>

    //   <Text style={styles.title}>SIGN IN</Text>
      
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     keyboardType="email-address"
    //     value={email}
    //     onChangeText={setEmail}
    //   />
      
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     secureTextEntry
    //     value={password}
    //     onChangeText={setPassword}
    //   />

    //   <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
    //     {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign In</Text>}
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={() => navigation.navigate("register")}>
    //     <Text style={styles.signupText}>Don't have an account? Sign up</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={styles.container}>
      {/* Botón de flecha atrás */}
      <TouchableOpacity onPress={() => navigation.navigate("TabNavigator")} style={styles.backButton}>
        <Image source={require('../assets/BackIcon.png')} style={{width: 30, height: 10, tintColor: 'black'}} onPress={() => navigation.goBack()} />
      </TouchableOpacity>

      <Text style={styles.title}>INICIAR SESIÓN</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Iniciar sesión</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={styles.signupText}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 80,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#6497df",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#6497df",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    marginTop: 15,
    color: "#6497df",
    fontWeight: "bold",
  },
});

export default SignIn;
