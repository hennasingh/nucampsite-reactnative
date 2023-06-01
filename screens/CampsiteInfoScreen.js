import RenderCampsite from '../features/campsites/RenderCampsite'

export default function CampsiteInfoScreen({ route }) {
    
    const {campsite } = route.params

    return <RenderCampsite campsite = {campsite} />
}