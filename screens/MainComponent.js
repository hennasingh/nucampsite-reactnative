import React from 'react'
import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen'

export default function MainComponent() {

    const[campsites, setCampsites] = React.useState(CAMPSITES);

    return <DirectoryScreen campsites={campsites} />;
};