import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { auth } from '../firebaseCon';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';

const ChatScreen = ({navigation}) => {

useLayoutEffect(() => {
  navigation.setOptions({
    headerLeft:()=>(
      <View style={{marginLeft:20}}>
        <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
      </View>
    ),
    headerRight:()=>(
      <TouchableOpacity style={{marginRight:30}} onPress={signout}>
    <AntDesign name="logout" size={24} color="black" />
    </TouchableOpacity>
    )
  })

}, [])

  const signout=()=>{
    auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Login')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen