import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CreateScreen from '../screens/Create';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../constant/colors';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Create') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }

                    // Retourner l'icône avec les propriétés spécifiées
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: '',headerShown: false  }} />
            <Tab.Screen name="Create" component={CreateScreen} options={{ title: '',headerShown: false  }} />
        </Tab.Navigator>
    );
}
