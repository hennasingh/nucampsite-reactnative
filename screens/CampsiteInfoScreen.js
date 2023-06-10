import RenderCampsite from '../features/campsites/RenderCampsite'
import React from 'react'
import { FlatList, StyleSheet, Text, View, Button, Modal} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

export default function CampsiteInfoScreen({ route }) {
    
    const {campsite } = route.params;

    const comments = useSelector((state) => state.comments)
    const [favorite, setFavorite] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem} >
                <Text style={{ fontSize:14 }}>{item.text}</Text>
                <Text style={{ fontSize:12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        )
    }
    return (
        <>
            <FlatList 
                data={ comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20}}
                ListHeaderComponent= {
                    <>
                        <RenderCampsite 
                        campsite={campsite}
                        isFavorite= {favorites.includes(campsite.id)} 
                        markFavorite= {() => dispatch(toggleFavorite(campsite.id))}
                        onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }
            />
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modal}>
                    <View style={{margin: 10}}>
                        <Button 
                            onPress={() => setShowModal(!showModal)} 
                            color='#808080'
                            title='Cancel'
                        />
                    </View>                  
                </View>
            </Modal>
        </>
        
    )
}

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        justifyContent:'center',
        margin:20
    }

})