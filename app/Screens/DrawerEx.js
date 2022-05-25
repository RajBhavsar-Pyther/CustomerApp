// import * as React from 'react';
// import { Button, View } from 'react-native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// import Menu from './AppMenu';
// import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//         <Menu  navigation={navigation}/>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//         <Menu  navigation={navigation}/>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// function ProducstsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//         <Menu  navigation={navigation}/>
//       <Button onPress={() => navigation.goBack()} title="This is Product" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="Products" component={ProducstsScreen} />
//       </Drawer.Navigator>
//   );
// }