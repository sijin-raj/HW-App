import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import AboutDev from '../screens/AboutDev';
import Earth from '../screens/Earth';
// const AlbumsRoute = () => <Text style={{alignSelf:'center', color: '#3F51B5'}}>Albums</Text>;
// const RecentsRoute = () => <Text style={{alignSelf:'center' , color: 'green'}}>Recents</Text>;


const MyTabs = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: '', icon: 'home', color: 'green'},
    { key: 'albums', title: '', icon: 'earth' ,color: '#ffec07'},
    { key: 'recents', title: '', icon: 'account',color:'#3F51B5', backgroundColor:'#ffec07'},
  ]);

 const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Home':
        return <HomeScreen jumpTo={jumpTo} />;
      case 'albums':
        return <Earth jumpTo={jumpTo} />;
         case 'recents':
        return <AboutDev jumpTo={jumpTo} />;
    }
  }
  return (
    <BottomNavigation
    borderTopLeftRadius='80'
    barStyle={{ backgroundColor: '#010344',
        }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
     
    />
  );
};

export default MyTabs;