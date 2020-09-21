import React, {useContext} from 'react';
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
  TouchableWithoutFeedback,
} from 'react-native';
import Context from '../../Context';

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  Landing: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    textAlign: 'left',
    padding: '2%',
    paddingBottom:"8%",
    paddingTop:"8%",
    fontWeight: 'bold',
  },
  button: {
    borderStyle: 'solid',
    width: 65,
    height: 30,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.8,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    textAlign: 'center',
    borderWidth: 1,
    marginBottom: '3%',
    marginLeft: '2%',
  },
  sbutton: {
    borderStyle: 'solid',
    width: 80,
    height: 30,
    paddingLeft: 10,
    opacity: 0.8,
    paddingTop: '1%',
    paddingBottom: '1%',
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '2%',
  },
  lbutton: {
    borderStyle: 'solid',
    width: 68,
    height: 30,
    paddingLeft: 10,
    opacity: 0.8,
    paddingTop: '1%',
    paddingBottom: '1%',
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
  },
  Jbutton: {
    borderStyle: 'solid',
    width: 80,
    height: 30,
    backgroundColor: 'green',
    opacity: 1.1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    textAlign: 'center',
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  signinIcon: {
    width: '1%',
    height: '0.5%',
  },
  signintext: {
    opacity: 1,
  },
  picCon: {
    height: 300,
    width: 300,
  },
  bpicCon: {
    height: 300,
    width: '100%',
  },
  imgstyle: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: '2%',
  },
  caption: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cred: {
    height: 40,
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  welcome: {
    marginLeft: 10,
    marginRight: 3,
  },
});

export default function Landing(props) {
  const context = useContext(Context);
  return (
    <View style={styles.Landing}>
      <View>
        <Text style={styles.title}>It's a great day for coffee</Text>
      </View>
      {context.logged ? (
        <View style={styles.cred}>
          <Text style={{fontSize: 20}}>Hi, {context.logged}!</Text>
          <TouchableHighlight
            style={styles.lbutton}
            onPress={() => {
              context.setLogged(null);
            }}>
            <View>
              <Text style={{color: 'black'}}>Logout</Text>
            </View>
          </TouchableHighlight>
        </View>
      ) : (
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            context.setLoginDis(true);
          }}>
          <View style={styles.buttonCon}>
            <Text style={styles.signintext}>Sign in</Text>
          </View>
        </TouchableHighlight>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.frame}>
            <TouchableHighlight
              style={styles.picCon}
              onPress={() => {
                context.setSignDis(true);
              }}>
              <Image
                style={styles.imgstyle}
                source={{
                  uri:
                    'https://ei.marketwatch.com/Multimedia/2018/06/07/Photos/ZQ/MW-GK519_SBUX_C_20180607154259_ZQ.jpg?uuid=fbddf7f4-6a8a-11e8-97d0-ac162d7bc1f7',
                }}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.picCon}
              onPress={() => {
                context.setSignDis(true);
              }}>
              <Image
                style={styles.imgstyle}
                source={{
                  uri:
                    'https://stories.starbucks.com/uploads/2019/01/Starbucks_White_Center_Store_1.jpg',
                }}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.picCon}
              onPress={() => {
                context.setSignDis(true);
              }}>
              <Image
                style={styles.imgstyle}
                source={{
                  uri:
                    'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/02/25/starbucks-launches-premium-instant-coffee-with-nestle/10740947-3-eng-GB/Starbucks-launches-premium-instant-coffee-with-Nestle_wrbm_large.jpg',
                }}
              />
            </TouchableHighlight>
          </View>
        </ScrollView>
        <View>
          <Text style={styles.welcome}>
            Welcome! You are on your way to earning Stars however you choose to
            pay
          </Text>
          <TouchableHighlight
            style={styles.sbutton}
            onPress={() => {
              context.setSignDis(true);
            }}>
            <View style={styles.buttonCon}>
              <Text style={{color: 'black'}}>Join Now</Text>
            </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.bpicCon}
          onPress={() => {
            context.setSignDis(true);
          }}>
          <Image
            style={styles.imgstyle}
            source={{
            uri:
              'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40082.jpg',
          }}/>
        </TouchableHighlight>
      </ScrollView>
      <TouchableHighlight
        style={styles.Jbutton}
        onPress={() => {
          context.setSignDis(true);
        }}>
        <View style={styles.buttonCon}>
          <Text style={{color: 'white'}}>Join Now</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
