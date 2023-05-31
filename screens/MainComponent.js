import React from 'react'
import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen'
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';

export default function MainComponent() {

    const[campsites, setCampsites] = React.useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = React.useState();

    return (
        <View style={{flex:1}}>
            <DirectoryScreen 
                campsites={campsites} 
                onPress = {(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <CampsiteInfoScreen 
                campsite ={
                    campsites.filter(
                    campsite => campsite.id === selectedCampsiteId)[0]
                } 
            />
        </View>
    )
};