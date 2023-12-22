import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { Button, Input } from '@rneui/base';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <Button title='Sign In' buttonStyle={styles.button} />
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