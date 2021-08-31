import React,{ useState ,useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const StarReview = ({ rate, }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }
   
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}

const AboutDev = () => {
    const navigation = useNavigation(); 

   const [profiles, setProfiles] = useState([]);
   const db = firestore();
   useEffect(() => {
       console.log('useEffect Hook!!!');
   
       db.collection('profile').onSnapshot(snapshot => {
         console.log('Firebase Snap!');
         setProfiles(snapshot.docs.map(doc => {
           // setLoading(false);
           return {
             id: doc.id,
             Authorname: doc.data().Authorname,
             Authintro:doc.data().Authintro,
             Authimage:doc.data().Authimage,
             rules:doc.data().rules,

             // address:doc.data().address, 
             // page:doc.data().id,
           }
         }))
       })
   
     }, []); 
    // Render

    return (
        <View style={styles.container}>
            {/* Header */}
            {
        profiles.map(profile => {
            console.log(profile.id)
            return(
            <View style={{ flex: 2 }} key={profile.id}>
                <View
                    // source={{uri: profile.image}}
                    backgroundColor='yellow'
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '50%',
                    }}
                />
               
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "20%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                       source={{uri: profile.Authimage}}

                                resizeMode="cover"
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>{profile.Authorname}</Text>
                            {/* <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text> */}

                            {/* <StarReview
                                rate={4.5}
                            /> */}
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            {profile.Authintro}
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
                {/* <View style={{ marginTop:'35%' }}>
        <Button title="Signout" onPress={() => auth().signOut()} />
      </View> */}
    
            </View>
 )})
}              
            {/* Body */}
            {
        profiles.map(profile => {
            console.log(profile.id)
            return(
            <ScrollView style={{ flex: 1.8 }}>
            <View >
                {/* Icons */}
                

                {/* About */}
                <View style={{ marginBottom: '25%', paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                    {profile.rules}
                    </Text>
                   
                     {/* Footer */}
           
                </View>
            </View>
            </ScrollView>  
            )})
        }      
            <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding , width: '20%', height: 40, alignItems: 'center', justifyContent: 'center' }]}
                    title="Signout" onPress={() => auth().signOut()}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#f93005', '#fc512c']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Signout</Text>
                    </LinearGradient>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default AboutDev;
