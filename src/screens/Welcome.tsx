import { View} from 'react-native'
import React from 'react'
import MainTabNavigator from '../components/MainTabNavigator'


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: Theme.colors.primary,
//     }
// });

// const MyTabs = createBottomTabNavigator({
//     screens: {
//         Home: HomeScreen,
//         Profile: ProfileScreen,
//     },
// });

const Welcome = () => {

    return (
        <View>
            <MainTabNavigator />
        </View>
    )
}

export default Welcome