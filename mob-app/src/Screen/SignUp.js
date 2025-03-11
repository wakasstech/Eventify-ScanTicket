import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Select, Box, CheckIcon, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const userName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!userName.current || !email.current || !password.current || !confirmPassword.current || !role) {
//       Alert.alert("Validation Error", "All fields are required");
//       return;
//     }
//     if (password.current !== confirmPassword.current) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }

//     const user = {
//       username: userName.current,
//       email: email.current,
//       password: password.current,
//       role: role,
//     };
// console.log(user)
// // navigation.navigate('login')
//     try {
//       setLoading(true);
//       const response = await fetch("https://demoticket.inasnapmarketing.ai/api/v1/users/createUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       if (response.ok) {
//         Alert.alert("Success", "User created successfully");
//         navigation.navigate("login");
//       } else {
//         Alert.alert("Error", "Something went wrong");
//       }
//     } catch (error) {
//       Alert.alert("Request failed", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
const handleSubmit = async () => {
  if (!userName.current || !email.current || !password.current || !confirmPassword.current || !role) {
    Alert.alert("Validation Error", "All fields are required");
    return;
  }
  if (password.current !== confirmPassword.current) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }

  const user = {
    username: userName.current,
    email: email.current,
    password: password.current,
    role: role,
  };

  console.log(user);

  try {
    setLoading(true);
    const response = await fetch("https://demoticket.inasnapmarketing.ai/api/v1/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 201) {  // Check if status is 201
      Alert.alert("Success", "User created successfully");
      navigation.navigate("login");
    } else {
      const responseData = await response.json(); // Parse error response
      Alert.alert("Error", responseData.message || "Something went wrong");
    }
  } catch (error) {
    Alert.alert("Request failed", error.message);
  } finally {
    setLoading(false);
  }
};

  return (
//     <View style={styles.container}>

// <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//       <Image source={require('../assets/BackIcon.png')} style={{width: 30, height: 10, tintColor: 'black'}}    onPress={() => navigation.goBack()} />
//       </TouchableOpacity>

//       <Text style={styles.title}>SIGN UP</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={(text) => (userName.current = text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         onChangeText={(text) => (email.current = text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => (password.current = text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         onChangeText={(text) => (confirmPassword.current = text)}
//       />
//       <Box maxW="500">
//         <Select
//           minWidth="200"
//           placeholder="Select Role"
//           selectedValue={role}
//           onValueChange={(itemValue) => setRole(itemValue)}
//           _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }}
//         >
//           <Select.Item label="User" value="user" />
//           <Select.Item label="Organizer" value="organizer" />
//           {/* <Select.Item label="Admin" value="admin" /> */}
//         </Select>
//       </Box>
//       <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
//         {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("login")}>
//         <Text style={styles.loginText}>Already have an account? Sign in</Text>
//       </TouchableOpacity>
//     </View>
<View style={styles.container}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
  <Image source={require('../assets/BackIcon.png')} style={{width: 30, height: 10, tintColor: 'black'}} />
</TouchableOpacity>

<Text style={styles.title}>REGISTRARSE</Text>
<TextInput
  style={styles.input}
  placeholder="Nombre de usuario"
  onChangeText={(text) => (userName.current = text)}
/>
<TextInput
  style={styles.input}
  placeholder="Correo electrónico"
  keyboardType="email-address"
  onChangeText={(text) => (email.current = text)}
/>
<TextInput
  style={styles.input}
  placeholder="Contraseña"
  secureTextEntry
  onChangeText={(text) => (password.current = text)}
/>
<TextInput
  style={styles.input}
  placeholder="Confirmar contraseña"
  secureTextEntry
  onChangeText={(text) => (confirmPassword.current = text)}
/>
<Box maxW="500">
  <Select
    minWidth="200"
    placeholder="Seleccionar Rol"
    selectedValue={role}
    onValueChange={(itemValue) => setRole(itemValue)}
    _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }}
  >
    <Select.Item label="Usuario" value="user" />
    {/* <Select.Item label="Organizador" value="organizer" /> */}
  </Select>
</Box>
<TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Registrarse</Text>}
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("login")}>
  <Text style={styles.loginText}>¿Ya tienes una cuenta? Iniciar sesión</Text>
</TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: "#f5f5f5",
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
    marginTop:15
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    marginTop: 15,
    color: "#6497df",
    fontWeight: "bold",
  },
});

export default SignUp;
