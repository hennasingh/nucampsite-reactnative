import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable';

export default function DirectoryScreen({navigation}) {


    const campsites = useSelector((state) => state.campsites)

    const renderDirectoryItem = ({item:campsite}) => {
        
    if(campsites.isLoading){
        return <Loading />
    }

    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        )
    }
        return (
            <Animatable.View
                animation='fadeInRightBig'
                duration={2000}
            >
                <Tile onPress= {() => navigation.navigate('CampsiteInfo', { campsite })}
                    title={campsite.name}
                    caption={campsite.description}
                    imageSrc={{ uri: baseUrl + campsite.image }}
                    featured
                />
            </Animatable.View>   
        );
    }
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};