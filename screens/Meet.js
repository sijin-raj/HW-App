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

const Meet = () => {
    const navigation = useNavigation(); 

   const [Meet, SetMeet] = useState([]);
   const db = firestore();
   useEffect(() => {
       console.log('useEffect Hook!!!');
   
       db.collection('Meet').onSnapshot(snapshot => {
         console.log('Firebase Snap!');
         SetMeet(snapshot.docs.map(doc => {
           // setLoading(false);
           return {
             id: doc.id,
             meetname: doc.data().meetname,
             contents:doc.data().contents,
             Authimage:doc.data().Authimage,
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
        Meet.map(Meets => {
            console.log(Meets.id)
            return(
            <View style={{ flex: 2 }} key={Meets.id}>
                <Image
                    source={images.meet}
                    // backgroundColor='yellow'
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '30%',
                    }}
                />
               
                <View
                    style={[{
                        position: 'absolute',
                        // bottom: "%",
                        left: "5%",
                        right: "5%",
                        top:'20%',
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            {/* <Image
                       source={{uri: Meets.Authimage}}

                                resizeMode="cover"
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 15,
                                }}
                            /> */}
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>{Meets.meetname}</Text>
                         
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
               
            </View>
 )})
}
            {/* Body */}
             
           
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

export default Meet;
