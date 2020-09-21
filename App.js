import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Context from './src/Context';
import Landing from './src/components/Landing';
import Signup from './src/components/Auth/Signup';
import Login from './src/components/Auth/Login';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  //currently logged user's first name
  const [logged, setLogged] = useState();
  //four states for user info
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //state to keep track of whether sign up page should be displayed
  const [signDis, setSignDis] = useState(false);
  //state to keep track of whether login page should be displayed
  const [loginDis, setLoginDis] = useState(false);

  //sign up function to be called in signup component
  const signup = (newUser) => {
    //checks for correct email format with regex
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(newUser.email)){
      axios
      .get(
        `https://5yn7abeso1.execute-api.us-west-1.amazonaws.com/dev/user/${newUser.email.toLowerCase()}`,
      )
      .then((res) => {
        if (res.data.email) {
          //check if the account already exists
          Alert.alert('Account already exists');
        } else {
          //store the new user into the database
          axios({
            method: 'post',
            url:
              'https://5yn7abeso1.execute-api.us-west-1.amazonaws.com/dev/user/',
            data: newUser,
          }).then((res) => {
            //set the state for currently logged in user's first name
            setLogged(newUser.firstname);
            //set the current view on the screen back to the landing page
            setSignDis(false);
            //clearing all fields on signup page
            setEmail(null);
            setPassword(null);
            setFirstname(null);
            setLastname(null);
          });
        }
      });
    }else{
      Alert.alert("Please enter a correct email address");
    }
  };
  //login function to be called in login component
  const login = (userinfo) => {
    //retrieving user info from database
    axios
      .get(
        `https://5yn7abeso1.execute-api.us-west-1.amazonaws.com/dev/user/${userinfo.email.toLowerCase()}`,
      )
      .then((res) => {
        //check if the password matches what's on the database
        if (res.data.password === userinfo.password) {
          //set the state for currently logged user's first name
          setLogged(res.data.firstname);
        } else {
          //prompt the user for wrong password
          Alert.alert('Wrong email or password');
        }
        setLoginDis(false);
        setEmail(null);
        setPassword(null);
      });
  };

  return (
    //context for use for all components
    <Context.Provider
      value={{
        logged,
        setLogged,
        signup,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        signDis,
        setSignDis,
        loginDis,
        setLoginDis,
        login,
      }}>
      <SafeAreaView>
        {signDis ? <Signup /> : loginDis ? <Login /> : <Landing />}
      </SafeAreaView>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
