import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background1.jpg')}>
            <View style={styles.innerView}>
                <Image style={styles.logo} source={require('../assets/man_logo.jpg')}/>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        paddingVertical: 20

    },
    innerView:{
        marginTop: '20%'
    }
})

export default WelcomeScreen;