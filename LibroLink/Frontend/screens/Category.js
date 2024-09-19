import {
  StyleSheet,
} from "react-native";
import React, { useState } from "react"
import {useNavigation} from "@react-navigation/native"


const Category = ({}) => {

    const navigation =useNavigation();
    

  };

  return (
    <View style={styles.contentback}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.Category}>Category</Text>

        <View style={styles.container}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Novels</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Children's Books</Text>
          </TouchableOpacity>
        
          <View style={styles.content}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Biography</Text>
          </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Buddhism</Text>
          </TouchableOpacity>
          </View>


          <View style={styles.content}>
           <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Art & Design</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => navigation.navigate('BookS')}>
            <Text style={styles.button}> Cookery</Text>
          </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );

const styles = StyleSheet.create({
  scrollContainer: {},
  contentback: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  container: {
    flex: 1,
    paddingHorizontal: 1,
    gap: 40,
    marginTop: 5,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 2,
  },
  button: {
    width: 276,
    height: 54,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "white",
    textAlign: "center",
  },
  Category: {
    fontSize: 25,
    paddingLeft: 30,
    padding: 70,
    fontcolor: "black",
    marginRight: 100,
  },
});

export default Category;
