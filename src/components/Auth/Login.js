import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from 'react-native';
import Context from '../../Context';

export default function Login() {
  const context = useContext(Context);
  let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
    Landing: {
      backgroundColor: 'white',
      height: '100%',
      justifyContent: 'space-evenly',
    },
    title: {
      fontSize: 30,
      textAlign: 'left',
      padding: '8%',
      paddingLeft:"2%",
      fontWeight: 'bold',
    },
    button: {
      borderStyle: 'solid',
      width: '40%',
      height: '10%',
      padding: '5%',
    },
    buttonCon: {
      borderStyle: 'solid',
    },
    signinIcon: {
      width: '1%',
      height: '0.5%',
    },
    form: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginLeft: '2%',
      marginRight: '2%',
      margin: '1%',
      width: '96%',
      borderRadius: 5,
    },
    sbutton: {
      backgroundColor: 'green',
      borderStyle: 'solid',
      width: 65,
      height: 30,
      paddingLeft: 10,
      opacity: 0.8,
      paddingTop: '1%',
      paddingBottom: '1%',
      borderRadius: 10,
      textAlign: 'center',
      marginTop: '3%',
      marginBottom: '3%',
      marginLeft: '2%',
      marginRight: '2%',
    },
    bbutton: {
      backgroundColor: 'green',
      borderStyle: 'solid',
      width: 52,
      height: 30,
      paddingLeft: 10,
      opacity: 0.8,
      paddingTop: '1%',
      paddingBottom: '1%',
      borderRadius: 10,
      textAlign: 'center',
      marginTop: '3%',
      marginBottom: '3%',
      marginLeft: '2%',
      marginRight: '2%',
    },
    buttonsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <View>
      <View>
        <Text style={styles.title}>Sign in to Rewards</Text>
      </View>
      <View>
        <TextInput
          placeholder={'Email'}
          style={styles.form}
          onChangeText={(text) => context.setEmail(text)}
          value={context.email}
        />
        <TextInput
          secureTextEntry={true}
          placeholder={'Password'}
          style={styles.form}
          onChangeText={(text) => context.setPassword(text)}
          value={context.password}
        />
        <View style={styles.buttonsView}>
          <TouchableHighlight
            style={styles.sbutton}
            onPress={() => {
              context.login({email: context.email, password: context.password});
            }}>
            <Text style={{color: 'white'}}>Sign in</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.bbutton}
            onPress={() => {
              context.setLoginDis(false);
              context.setEmail(null);
              context.setPassword(null);
            }}>
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
