import { useEffect,useState } from 'react'; 
import * as React from 'react'; 
import { View, Text,StatusBar } from 'react-native';
import Menu from './app/Screens/AppMenu';
import { getCustomers } from './app/service/CustomerService';
import { useNavigation } from '@react-navigation/core';
import { RootNavigator } from './app/Screens/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

function HomeScreen() {
  let navigation = useNavigation();
  const [state,setState] = useState(0);
  //React.useReducer // useContext
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => { 
      console.log(">> reload");
      setState((val)=>(val+1));
    });
    return unsubscribe;
  },[navigation]);
  return (
    <View>
       <Menu/>
       <View style={{marginLeft:10}}>
        <Text>Home Screen</Text>
        <Text>You have {getCustomers().length} customer registered</Text>
       </View>
    </View>
  );
}


function App() 
{
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
    {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
    <RootNavigator />
    </>
  );
}
export default App;