import React,{ useState ,useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
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

const Earth = () => {
    const navigation = useNavigation(); 

//    const [profiles, setProfiles] = useState([]);
//    const db = firestore();
//    useEffect(() => {
//        console.log('useEffect Hook!!!');
   
//        db.collection('profile').onSnapshot(snapshot => {
//          console.log('Firebase Snap!');
//          setProfiles(snapshot.docs.map(doc => {
//            // setLoading(false);
//            return {
//              id: doc.id,
//              Authorname: doc.data().Authorname,
//              contents:doc.data().contents,
//              Authimage:doc.data().Authimage,
//              // address:doc.data().address, 
//              // page:doc.data().id,
//            }
//          }))
//        })
   
//      }, []); 
    // Render

    return (
        <View style={styles.container}>
            {/* Header */}
            {/* {
        profiles.map(profile => {
            console.log(profile.id) */}
            {/* return( */}
         
 {/* )})
} */}
            {/* Body */}
            <ScrollView style={{ flex: 1.9 }}>
            <View >
                {/* Icons */}
                

                {/* About */}
                <View style={{ marginTop: '50%', paddingHorizontal: SIZES.padding , alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h2 , color:'green'}}>will Update Soon</Text>
                    {/* <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                        Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.
                    </Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                        Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.
                    </Text> */}
                     {/* Footer */}
           
                </View>
            </View>
            </ScrollView>     
           
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

export default Earth;
