import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { MainStack } from '../../App';
import {createStackNavigator} from '@react-navigation/stack';


export default function Login({navigation}) {
    const Stack = createStackNavigator();
  function LoginPage(){
    const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const check = () => {
    username == 'admin' && password == '123'
      ? Alert.alert('Login Successful!', 'Welcome!', [
          { text: 'Continue', onPress: () => navigation.navigate("main")} ,
        ])
      : username == '' && password == ''
      ? Alert.alert(
          'Login Unsuccessful!',
          'Please Fill In Your Username And Password'
        )
      : username == ''
      ? Alert.alert('Login Unsuccessful!', 'Please Fill In Your Username')
      : password == ''
      ? Alert.alert('Login Unsuccessful!', 'Please Fill In Your Password')
      : Alert.alert('Login Unsuccessful!', 'Wrong Username Or Password', [
          { text: 'Try Again' },
        ]);
  };
  const qrlogin = () => {
    Alert.alert('Login Successful!', 'Welcome!', [
      { text: 'Continue', onPress: () => console.log('OK Pressed') },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>
        Scan with Singpass app
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 25, marginBottom: 5 }}>
        to login
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={qrlogin}>
        <Image
          source={{
            uri: 'https://resource.stg.fpdsapim.myinfo.gov.sg/mockpass/images/qr-code.png',
          }}
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
            marginTop: 5,
            borderWidth: 5,
            borderColor: 'red',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.paragraph1}>-------------- OR --------------</Text>
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'white',
          fontSize: 18,
          margin: 10,
        }}
        placeholder="  Singpass ID"
        onChangeText={(newText) => setUsername(newText)}
        defaultValue={username}
      />
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'white',
          fontSize: 18,
          margin: 10,
        }}
        placeholder="  Password"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          borderRadius: 10,
          height: 50,
        }}
        onPress={check}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
          Log In
        </Text>
      </TouchableOpacity>
      <Text style={{ padding: 10, fontSize: 42 }}></Text>
    
    </View>
  );
  }
  return(
    <Stack.Navigator >
        <Stack.Screen name ="Login" component={LoginPage}options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name ="main" component={MainStack}options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph1: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
  paragraph2: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
});
