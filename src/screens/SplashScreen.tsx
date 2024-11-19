import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Theme } from '../constant/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootParamList } from '../../App';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Theme.colors.white
    }
});

const SplashScreen = () => {
    const navigation = useNavigation<NavigationProp<RootParamList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 1000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Smart Manager</Text>
        </View>
    )
}

export default SplashScreen