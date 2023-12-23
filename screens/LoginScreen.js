import { View, Text ,StyleSheet} from 'react-native'
import React,{useEffect, useState} from 'react'
import { Button, Input } from '@rneui/base';
import { auth } from '../firebaseCon';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signin=()=>{
    auth.signInWithEmailAndPassword(email, password)
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
  });
  }

  useEffect(() => {
   const unsubscribre=auth.onAuthStateChanged((user) => {
      if (user) {
        
        var uid = user.uid;
        navigation.navigate('Chat');
        // ...
      } else {
        navigation.canGoBack()&&navigation.popToTop();
      }
    });
    return unsubscribre
  }, []);


  return (
    <View style={styles.container}>
      <Input
      placeholder='Enter Your email'
      label='Email'
      leftIcon={{type:'material',name:'email'}} 
      value={email}
      onChangeText={(text)=>setEmail(text)}
      />
      <Input
      placeholder='Enter Your password'
      label='Password'
      leftIcon={{type:'material',name:'lock'}} 
      value={password}
      onChangeText={(text)=>setPassword(text)}
      secureTextEntry
      />
      <Button title='Sign In' onPress={signin} buttonStyle={styles.button} />
      <Button title='Register' onPress={()=>{navigation.navigate('Register')}} buttonStyle={styles.button} />
    </View>
  )
}

const styles=StyleSheet.create({
  button:{
    width:200,
    marginTop:10
  },
  container:{
    flex:1,
    alignItems:'center',
    padding:10
  }
})
export default LoginScreen