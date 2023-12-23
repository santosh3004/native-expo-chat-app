import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/base';
import { auth } from '../firebaseCon'



const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setImageURL] = useState('');

  const Register = () => {

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        user.updateProfile({
          displayName: name, 
          photoURL: imageURL? imageURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          alert(error.message)
        });
        // ...
        navigation.popToTop()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter Your name'
        label='Name'
        leftIcon={{ type: 'material', name: 'person' }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder='Enter Your email'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder='Enter Your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Input
        placeholder='Enter Your image'
        label='Profile Picture'
        leftIcon={{ type: 'material', name: 'face' }}
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      <Button title='Register' onPress={Register} buttonStyle={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})
export default RegisterScreen