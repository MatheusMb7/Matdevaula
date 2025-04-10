import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function EscudoScreen() {
    const time = {
        escudo: "https://i.pinimg.com/736x/96/a4/6d/96a46d845af876f648963f99df451e82.jpg"
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: time.escudo }} style={styles.escudo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    escudo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});
