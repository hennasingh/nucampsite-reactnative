import React from 'react'
import DirectoryScreen from './DirectoryScreen'
import { View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import { Icon } from 'react-native-elements';


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor:'#5637DD' }
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='About'
                component= { AboutScreen } 
                options={({ navigation }) => ({ 
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />

                    )
                 })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Contact'
                component = { ContactScreen }
                options={({ navigation }) => ({ 
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />

                    )
                 })}
            />
        </Stack.Navigator>
    )
}

const HomeNavigator =() => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({ 
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />

                    )
                 })}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
        <Stack.Screen 
            name='Directory'
            component = {DirectoryScreen}
            options={({ navigation }) => ({ 
                title: 'Campsite Directory',
                headerLeft: () => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
             })}
        />
        <Stack.Screen 
            name='CampsiteInfo'
            component = {CampsiteInfoScreen}
            options={({ route }) => ({
                title: route.params.campsite.name
            })}
        />
       </Stack.Navigator>
    )
}
export default function MainComponent() {

    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0 : Constants.statusBarHeight}}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{backgroundColor: '#CEC8FF'}}
             >
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options = {{ title: 'Home'}}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
                <Drawer.Screen
                    name='About'
                    component= {AboutNavigator}
                />
                <Drawer.Screen
                    name='Contact'
                    component= {ContactNavigator}
                    options= {{ title: 'Contact Us'}}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});