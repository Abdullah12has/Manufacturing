import React from 'react';
import { ImageBackground, StyleSheet, View, Image, TextInput, Text , Button, A:} from 'react-native';


function WelcomeScreen(props) {

    const [value, onChangeText] = React.useState('');
   


    return (
        // <ImageBackground style={styles.background} source={require('../assets/background2.jpg')}>
           <View style={styles.inner}>
           <View style={styles.innerView}>
                <Image style={styles.logo} source={require('../assets/factory.png')}/>

                <View style={styles.input}>

                    <Text style={styles.innerText} >Company Code </Text>
                     <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 0, width: 250, marginTop: 0, borderBottomWidth: 0.6, marginBottom: 60 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <Button title="Next" color="#841584" onPress={() => Alert.alert('Simple Button pressed')} />
                </View>



            </View>


            </View>

        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    logo: {
        width: 100,
        height: 100,
        // alignSelf: 'center',
        paddingVertical: 20

    },
    innerView:{
        marginTop: '40%',
        alignItems: 'center'

    },
    inner:{
        flex: 1,
        backgroundColor: 'rgb(200,200,200)'
    },
    input:{
        marginTop: 70
    },
    innerText:{
        color: 'rgb(100,100,100)'
    }
})

export default WelcomeScreen;