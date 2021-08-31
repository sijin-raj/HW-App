import React from 'react';
import { View, Text, Image,  StyleSheet } from 'react-native';
import { images } from '../constants';

const SplashScreen = () =>{

return(

<View style={styles.container}>
<Image
                        source={require("../assets/images/hw-logo.png")}
                        style={{alignSelf:"center" , height:235 , width:220, marginTop:150}}

                         />
</View>

);

};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02367e"
  }

  });