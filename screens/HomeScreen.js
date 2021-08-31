import React,{ useState ,useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet ,ScrollView ,StatusBar,Image, ImageBackground,TouchableOpacity,Button } from 'react-native';
import { images } from '../constants';
import { Card ,} from 'react-native-paper';
import ShowScreen from './ShowScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen =()=> {
  const navigation = useNavigation(); 

  const [articles, setArticles] = useState([]);
  

  // const [data,setData]=useState([]);
  const db = firestore();
  // useEffect(() => {
  //   db.collection("articles").get().then((response) => {
  //     console.log(response.docs)
  //     if (response.docs && response.docs.length){
  //    setData(response.docs)
  //    console.log(response.docs)
  //   }})
  // }, []) 
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
          content2:doc.data().content2,
          image:doc.data().image,
          code:doc.data().code,
          code1:doc.data().code1,
          code2:doc.data().code2,
          code3:doc.data().code3,
          code4:doc.data().code4,
          code5:doc.data().code5,

          // address:doc.data().address, 
          // page:doc.data().id,
        }
      }))
    })

  }, []); 
  const [promoting, setPromoting] = useState([]);


  useEffect(() => {
    console.log('useEffect Hook promotion!!!');

    db.collection('promoting').onSnapshot(snapshot => {
      console.log('Firebase Snap!');
     setPromoting(snapshot.docs.map(doc => {
        // setLoading(false);
        return {
          id: doc.id,
          name: doc.data().name,
          contents:doc.data().contents,
          content2:doc.data().content2,
          image:doc.data().image,
          code:doc.data().code,
          code1:doc.data().code1,
          code2:doc.data().code2,
          code3:doc.data().code3,
          code4:doc.data().code4,
          code5:doc.data().code5,

          // address:doc.data().address, 
          // page:doc.data().id,
        }
      }))
    })

  }, []); 
  return (
    
    <ScrollView style={styles.container}>
    <StatusBar  />
    <View style={styles.sliderContainer}>
    <ImageBackground source={images.Background}
      resizeMode="stretch" style={styles.image1}>
      {/* <Text style={styles.welcometext}>Hello Folks</Text>
      <Text style={styles.welcometext1}>Welcome To HomeWorks</Text> */}
      </ImageBackground>
    </View>
    
    <View style={styles.categoryContainer}>
    <Card   style={{
                          height:hp('20%'),
                          // elevation:2,
                          backgroundColor:"#FFF",
                          marginLeft: hp('4%'),
                          marginTop:10,
                          borderRadius:15,
                          marginBottom:10,
                          width:wp('83%') ,

                      }} >
     <View style={styles.image2Row}>
     <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate("Meet")}>

      <Image
             source={images.meet}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.categoryBtnTxt}>MeetUps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate("Club")}>

            <Image
               source={images.club}

              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.categoryBtnTxt}>Club&Hub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBtn}   onPress={()=>navigation.navigate("Hackathon")}>

            <Image
              source={images.hackathon}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.categoryBtnTxt}>Hackathon</Text>
      </TouchableOpacity>
            </View>
         
     </Card> 
            </View>
            <View style={{
                 flexDirection:"row",
                 paddingHorizontal:20,
                 width:"100%",
                 alignItems:"center"
             }}>
                 <View style={{width:"50%"}}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:17,
                          color:"#585a61"
                      }}>Blogs</Text>
                      {/* <View style={{
                          height:4,
                          backgroundColor:"#8a66f8",
                          width:115,
                          marginTop:-5
                      }}>

                      </View> */}
                      </View>
                 <View style={{width:"50%", alignItems:"flex-end"}}>
                      <View style={{
                          backgroundColor:"#02367e",
                          paddingHorizontal:20,
                          paddingVertical:5,
                          borderRadius:15
                      }}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:13,
                              color:"#FFF"
                          }}>More</Text>
                      </View>
                 </View>
             </View>
            
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{height:200}}
   
>
{
        articles.map(article => {
            console.log(article.id)
            return(
   <TouchableOpacity 
                      onPress={()=>navigation.navigate("ShowScreen",{dbid:article})}
                      style={{
                          height:140,
                          // elevation:2,
                          // backgroundColor:"#FFF",
                          marginLeft:20,
                          marginTop:20,
                          borderRadius:15,
                          marginBottom:10,
                          width:200
                      }}
                      key={article.id}
                  >
                      <Image
                       source={{uri: article.image}}
                      style={{alignSelf:"center" , height:120 , width:160 , marginTop:20 ,borderRadius: 15,}}
                      />
                      <View style={{
                          flexDirection:"row",
                          paddingTop:10,
                          paddingHorizontal:10
                      }}>
                          <Text style={{
                              fontWeight:"bold", alignContent:"center"
                          }}>{article.articlesname}</Text>
                          
                      </View>
                      
                  </TouchableOpacity>
                    )})
                }
                  
</ScrollView>
       
   <View style={{
                 flexDirection:"row",
                 paddingHorizontal:20,
                 width:"100%",
                 alignItems:"center"
             }}>
                 <View style={{width:"50%"}}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:17,
                          color:"#585a61"
                      }}>Promoting New Tools</Text>
                      {/* <View style={{
                          height:4,
                          backgroundColor:"#8a66f8",
                          width:115,
                          marginTop:-5
                      }}>

                      </View> */}
                      </View>
                 <View style={{width:"50%", alignItems:"flex-end"}}>
                      <View style={{
                          backgroundColor:"#02367e",
                          paddingHorizontal:20,
                          paddingVertical:5,
                          borderRadius:15
                      }}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:13,
                              color:"#FFF"
                          }}>More</Text>
                      </View>
                 </View>
             </View>
    <ScrollView 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{height:200}}
              >
               {
        promoting.map(promotings => {
            console.log(promotings.id)
            return(
                  <TouchableOpacity 
                      onPress={()=> navigation.navigate("Onbard")}
                      style={{
                          height:140,
                          // elevation:2,
                          // backgroundColor:"#FFF",
                          marginLeft:20,
                          marginTop:20,
                          borderRadius:15,
                          marginBottom:10,
                          width:200
                      }}
                      key={promotings.id}
                  >
                      <Image
                       source={{uri: promotings.image}}
                      style={{alignSelf:"center" , height:120 , width:160 , marginTop:20 , borderRadius: 15,
                    }}
                      />
                      <View style={{
                          flexDirection:"row",
                          paddingTop:10,
                          paddingHorizontal:10
                      }}>
                          <Text style={{
                              fontWeight:"bold", alignContent:"center"
                          }}>{promotings.name}</Text>
                          
                      </View>
                      
                  </TouchableOpacity>
   )})
  }
                  
                

              </ScrollView>   


  </ScrollView>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fdfdfd"
},
sliderContainer: {
  height: hp('45%'),
  width: '100%',
  justifyContent: 'center',
  alignSelf: 'center',
},  backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},


wrapper: {},

// slide: {
//   flex: 1,
//   justifyContent: 'center',
//   backgroundColor: 'transparent',
// },
sliderImage: {
  height: hp('100%'),
      width:wp('100%'),
      resizeMode: 'stretch',
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100
},
categoryContainer: {
     flexDirection: 'row',
     top:hp('-3%'),
      height: hp('30%'),
      width:wp('95%'),
      alignSelf:'center',
      // backgroundColor:'green',
      // backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 27,
},
categoryBtn: {
  flex: 1,
  width: '20%',
  marginHorizontal: 10,
  alignSelf: 'center',
},
categoryIcon: {
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  width: 70,
  height: 70,
  backgroundColor: '#fdeae7' /* '#FF6347' */,
  borderRadius: 50,
},
categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 3,
  color: '#000',
},
cardsWrapper: {
  marginTop: 20,
  width: '80%',
  alignSelf: 'center',
},
card: {
  height: 100,
  marginVertical: 10,
  flexDirection: 'row',
  shadowColor: '#999',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
},
cardImgWrapper: {
  flex: 1,
},
cardImg: {
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  borderRadius: 8,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
},
cardInfo: {
  flex: 2,
  padding: 10,
  borderColor: '#ccc',
  borderWidth: 1,
  borderLeftWidth: 0,
  borderBottomRightRadius: 8,
  borderTopRightRadius: 8,
  backgroundColor: '#fff',
},
cardTitle: {
  fontWeight: 'bold',
},
cardDetails: {
  fontSize: 12,
  color: '#444',
},
rect1: {
  height: hp('20%'),
  backgroundColor: "rgba(128,7,235,1)",
  borderBottomLeftRadius: 34,
  borderBottomRightRadius: 34
},
rect2: {
  width:wp('90%'),
  paddingVertical: 20,
  // backgroundColor: "rgba(255,255,255,1)",
  backgroundColor:"red",
  borderRadius: 40,
},
materialIconTextbox1: {
  height: hp('8%'),
  width: wp('80%'),
  marginTop: 41,
  marginLeft: 6
},  
rect3: {
 
  height: hp('25%'),
  top:hp('40%') ,
  borderTopLeftRadius: 34,
  borderTopRightRadius: 34,
  backgroundColor: "rgba(128,7,235,1)",
 
},
welcometext: {
  fontFamily: "roboto-700",
  color: "#1e0264",
  alignSelf:'center',
  fontSize: 40,
  marginTop: 60,
},
welcometext1: {
    fontFamily: "roboto-700",
    color: "#ffff",
    alignSelf:'center',
    fontSize: 15,
    marginTop: 90,
  },
quotes: {
  fontFamily: "roboto-300",
  color: "rgba(128,7,235,1)",
  alignSelf:'center',
  fontSize: 18,
  marginTop: 30,
},
cupertinoButtonPurple1: {
  height: 45,
  width: 245,
  alignSelf:'center',
  marginTop: 20,
},
rect3Stack: {
  flex: 1,
},
rect4: {
  width: wp('92%'),
  bottom:hp('8%'),
  alignSelf:"center",
  backgroundColor: "rgba(255,255,255,1)",
  borderTopLeftRadius: 34,
  borderTopRightRadius: 34,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  position:"relative",
  
},
kitLearnlike2: {
  fontFamily: "roboto-700",
  color: "#121212",
  fontSize: 29,
  marginTop: 28,
  alignSelf:'center',
},
text1: {
  fontFamily: "roboto-300",
  color: "#121212",
  fontSize: 17,
  marginTop: 28,
  marginLeft:25,
  alignSelf:'center',
},
materialButtonHamburger1: {
  height: hp('5%'),
  width: hp('5%'),
  borderRadius: 8
  
},
materialButtonHamburger2: {
  height: hp('5%'),
  width: hp('5%'),
  borderRadius: 8,
  backgroundColor: "rgba(27,152,223,1)",
  marginLeft: 32

},
materialButtonHamburger3: {
  height: hp('5%'),
  width: hp('5%'),
  borderRadius: 8,
  backgroundColor: "rgba(126,211,33,1)",
  marginLeft: 32
},
materialButtonHamburger4: {
  height: hp('5%'),
  width: hp('5%'),
  borderRadius: 8,
  backgroundColor: "rgba(255,29,154,1)",
  marginLeft: 24
},
materialButtonHamburger1Row: {
  height: 36,
  flexDirection: "row",
  marginTop: 58,
  alignSelf:'center',
  marginLeft: 46,
  marginRight: 46
},
image1: {
  height: hp('50%'),
  width:wp('100%'),
  resizeMode: 'stretch',
  borderBottomRightRadius: 100,
  borderBottomLeftRadius: 100
},
rect2: {
  height: hp('43%'),
  width:wp('97%'),
  alignSelf:'center',
  position: "absolute",
  backgroundColor: "rgba(255,255,255,1)",
  borderRadius: 27,
},
image2: {
  width:wp('28%') ,
  height: hp('11%'),
  marginTop: 2,
  marginRight: 20,
  borderRadius: 15,

},
image3: {
  width:wp('28%') ,
  height: hp('11%'),
  marginRight: 5,
  marginTop: 2,
  borderRadius: 15,

},
image4: {
  width:wp('28%') ,
  height: hp('11%'),
  marginRight: 5,
  borderRadius: 15,

},
image2Row: {
  // height: 94,
  flexDirection: "row",
  marginTop: 20,
  alignItems:'center',
  marginLeft: 10,
  marginRight: 12
},
image5: {
  width:wp('25%') ,
  height: hp('10%'),
},
image6: {
  width:wp('22%') ,
  height: hp('10%'),
  marginLeft: 17
},
image5Row: {
  height: 92,
  flexDirection: "row",
  // marginTop: 24,
  marginLeft: 15,
  marginRight: 106
},
imageStack: {
  width: 372,
  height: 577,
  marginLeft: 46
}
});


