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

export default function Signup() {
  const context = useContext(Context);
  let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
    Landing: {
      backgroundColor: 'white',
      opacity: 0.7,
      height: '100%',
      justifyContent: 'space-evenly',
    },
    title: {
      fontSize: 30,
      textAlign: 'left',
      paddingLeft:"2%",
      padding: '8%',
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
      width: 80,
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
      <Text style={styles.title}>Starbucks Rewards</Text>

      <View>
        <Text style={{marginLeft: '2%'}}>Personal info</Text>
        <TextInput
          placeholder={'First name'}
          style={styles.form}
          onChangeText={(text) => context.setFirstname(text)}
          value={context.firstname}
        />
        <TextInput
          placeholder={'Last name'}
          style={styles.form}
          onChangeText={(text) => context.setLastname(text)}
          value={context.lastname}
        />
      </View>
      <View>
        <Text style={{marginLeft: '2%'}}>Security</Text>
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
              context.signup({
                firstname: context.firstname,
                lastname: context.lastname,
                email: context.email,
                password: context.password,
              });
            }}>
            <Text style={{color: 'white'}}>Join Now</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.bbutton}
            onPress={() => {
              context.setSignDis(false);
              context.setEmail(null);
              context.setFirstname(null);
              context.setLastname(null);
              context.setPassword(null);
            }}>
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
