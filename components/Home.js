import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, 
  TextInput, FlatList, TouchableOpacity, Image  } from 'react-native';

export default function Home({navigation}) {
  const [ search , setSearch ]= useState('')
  const [ taska , setTaska ]= useState([])
  const callApi = () => {
    fetch('https://api-explore.anak2u.com.my/api/clients/negeri/selangor')
    .then(response=>response.json())
    .then(responseJson => {
       // setIsLoading(false);
        console.log(responseJson);
        setTaska(responseJson["data"])

    })
    .catch(error=> {
       // setIsLoading(false);
        console.log(error);
    //when it got error jump back to previous
    })
  }
  
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row' , marginBottom:10 }}>
    <TextInput placeholder="Search for Kindergarden " 
    style={styles.textInput}
    value ={search} onChangeText={(text)=>setSearch(text)}/>
    <Button onPress ={callApi} title="Search Kindergarden" 
    style={{color:'#13a89e'}}/>
    </View>

    <FlatList data={taska} renderItem={({ item })=> (
      <TouchableOpacity key={item.imdbID}
       onPress={()=>navigation.push('Detail',{imdbID:item.imdbID})}>
    <View style={styles.viewStyle}>
      
      <Image 
      source={{ uri: item.Poster}}
      style={{flex:1,marginRight:10,backgroundSize:'cover'}}/>
        <View style={{flex:3}}>
      <Text style={{fontsize:20}}>{item.Title}</Text>
      <Text>{item.Year}</Text>
         </View>


    </View>
    </TouchableOpacity>
  
  )}
  />
    <StatusBar style="auto" />
  </View>


);
}

const styles = StyleSheet.create({

  textInput: {
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    flex:2,
    padding:10,
    marginRight:10
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding:10
  },
  buttonStyle: {
    
  
  }
});
