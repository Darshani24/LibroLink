import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';



const HomePage = ({ navigation }) => {


  
  return (

    <View style={styles.container}>
      <View style={styles.content}>
      <Image source={require('../assets/images/Home.png')} style={styles.image} />
      <Image source={require('../assets/images/Logo.png')} style={styles.Logo}/>
      <Text style={styles.tagline}>Book Sharing Platform</Text>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('SignUp')}>
      <Icon name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
        
        
        </View>    
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 0.99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:105,
   },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    },
    Home: {
      width: 205,
      height: 234,
      resizeMode: 'contain',
      },
    Logo: {
        width: 195,
        height: 102.95,
        resizeMode: 'contain', 
       
       },
    tagline: {
       fontSize: 28,
       color: 'black',
       marginBottom: 75,
      },
      circle:{
        width: 60, 
        height: 60, 
        borderRadius: 45,
        backgroundColor: '#b9fc4b', 
        justifyContent: 'center', 
        alignItems: 'center', 
        
        },  

});
export default HomePage;