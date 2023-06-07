import React from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

export default function DirectoryScreen({navigation}) {


        const campsites = useSelector((state) => state.campsites)

    const renderDirectoryItem = ({item:campsite}) => {
        
        return (
            <Tile onPress= {() => navigation.navigate('CampsiteInfo', { campsite })}
                title={campsite.name}
                caption={campsite.description}
                imageSrc={{ uri: baseUrl + campsite.image }}
                featured
            />   
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