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

const ShowScreen = ({ navigation ,route }) => {
  const articleid = route.params.dbid
  console.log(articleid);
   const [articles, setArticles] = useState([]);
   const db = firestore();
   useEffect(() => {
       console.log('useEffect Hook!!!');
   
       db.collection('articles').onSnapshot(snapshot => {
         console.log('Firebase Snap!');
         setArticles(snapshot.docs.map(doc => {
           // setLoading(false);
           return {
             id: doc.id,
             articlesname: doc.data().articlesname,
             contents:doc.data().contents,
             code:doc.data().code,
             code1:doc.data().code1,
             image:doc.data().image,
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
            <View style={{ flex: 2 }}>
                <Image
                    source={{uri :articleid.image}}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '50%',
                    }}
                />
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "25%",
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
                                                source={{uri :articleid.image}}

                                resizeMode="cover"
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>{articleid.articlesname}</Text>
                            {/* <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text> */}

                            {/* <StarReview
                                rate={4.5}
                            /> */}
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 30,
                        left: 20,
                        right: 20,
                        color: COLORS.white ,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Tabs') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>
                {/* Icons */}
                

                {/* About */}
                <View style={{ marginTop: '5%', paddingHorizontal: SIZES.padding }}>
                    <ScrollView>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                    {articleid.contents}
                    </Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                      {articleid.content2}
                    </Text>
                     {/* Footer */}
            <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={[{ height: '100%', width: '100%', borderRadius: 15 }]}
                    colors={['#edf0fc', '#d6dfff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code}</Text>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code1}</Text>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code2}</Text>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code3}</Text>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code4}</Text>
                            <Text style={{ ...FONTS.h2 }}>{articleid.code5}</Text>

                        </View>

                        
                    </View>
                </LinearGradient>
                
            </View>
            <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                      {articleid.contents}
                    </Text>
                    </ScrollView>
                </View>
            </View>

           
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

export default ShowScreen;
