import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView,Image  } from 'react-native';
import React,{ useState }from 'react';

const SignUp = ({navigation}) => {
  
  const [username, setUsername] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Handle the signup logic
    Alert.alert('Success', 'Account created successfully');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
    <View style={styles.content}>
    <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
    <TextInput
      style={styles.input}
      placeholder="UserName"
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      style={styles.input}
      placeholder="ContactNo"
      value={contactNo}
      onChangeText={setContactNo}
      keyboardType="phone-pad"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={styles.loginText}>
      Do you have an account?{' '}
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Log In
      </Text>
    </Text>
  </View>
  </View>
  </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    padding:100,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height:100,
    width:120,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: 276,
    height:54,
    padding: 15,
    borderWidth: 1,
    borderColor: '#91908c',
    borderRadius: 28,
    marginBottom: 20,
  },
  button: {
    height:54,
    width:276,
    backgroundColor: '#a3d949',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
     fontWeight:'bold',
    textAlign:'center'
   
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight:'bold'
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUp;