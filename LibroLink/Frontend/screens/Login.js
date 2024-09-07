import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'

const LoginPage = ({navigation}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic
    Alert.alert('Login', 'Logging in...');
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <View style={styles.content}>
      <Image source={require('../assets/images/Logo.png')} style={styles.Logo} />
        <TextInput
          style={styles.input}
          placeholder="UserName"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookS')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Don’t have an account?{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('SignUp')}>
            Register
          </Text>
        </Text>
      </View>
      </View>
    </ScrollView>
  
  );
};



const styles = StyleSheet.create({

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
   
    
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 120,
    
  },
  Logo: {
    width:120,
    height:100,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 40,
  },
  input: {
    width:276,
    height:54,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 35,
    marginBottom: 20,
  },
  button: {
    width:276,
    height:54,
    backgroundColor: '#a3d949',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
   
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
  },
  registerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});


export default LoginPage;