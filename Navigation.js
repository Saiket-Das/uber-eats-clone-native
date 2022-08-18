// import React from 'react'
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from './screens/Home';
// import RestaurantInfo from './screens/RestaurantInfo';
// import { Provider as ReduxProvider } from 'react-redux'
// import configureStore from './redux/store';


// const store = configureStore();

// export default function RootNavigation() {
//     const Stack = createStackNavigator();
//     const screenOptions = {
//         headerShown: false,
//     };


//     return (
//         <ReduxProvider state={store}>
//             <NavigationContainer >
//                 <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
//                     <Stack.Screen name="Home" component={Home} />
//                     <Stack.Screen name="RestaurantInfo" component={RestaurantInfo} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </ReduxProvider>
//     )
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import RestaurantInfo from './screens/RestaurantInfo';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
// import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantInfo" component={RestaurantInfo} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}