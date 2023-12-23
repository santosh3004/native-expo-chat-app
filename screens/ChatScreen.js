import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect,useState, useCallback, useEffect } from 'react'
import { auth, db } from '../firebaseCon';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = ({navigation}) => {

useLayoutEffect(() => {
  navigation.setOptions({
    headerLeft:()=>(
      <View style={{marginLeft:20}}>
        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}}/>
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

  const [messages, setMessages] = useState([])

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: auth?.currentUser?.photoURL,
  //       },
  //     },
  //   ])
  // }, [])
  useLayoutEffect(() => {
    const unsubscribe=db.collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
      snapshot.docs.map(
        doc=>({
          _id:doc.data()._id,
          createdAt:doc.data().createdAt.toDate(),
          text:doc.data().text,
          user:doc.data().user,
        })
      )
    ))
  return unsubscribe
    
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    const {
      _id,createdAt,text,user
    }=messages[0]
    db.collection('chats').add({
      _id,createdAt,text,user
    })
  }, [])
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name:auth?.currentUser?.displayName,
        avatar:auth?.currentUser?.photoURL
      }}
    />
  )
}

export default ChatScreen