import React from 'react';
import { ImageBackground, StyleSheet, View, Image, TextInput, Text , Button, Alert} from 'react-native';


function LoginScreen(props) {

    const [value, onChangeText] = React.useState('');
   


    return (
           <View style={styles.inner}>
           <View style={styles.innerView}>
                <Image style={styles.logo} source={require('../assets/man_logo.jpg')}/>

                <View style={styles.input}>

                    <Text style={styles.innerText} >Phone Number </Text>
                     <TextInput
      style={{ height: 40, borderColor: 'white', borderWidth: 0, width: 250, marginTop: 0, borderBottomWidth: 0.6, marginBottom: 60 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <Button title="Login" color="#841584" onPress={() => Alert.alert('Simple Button pressed')} />
                </View>



            </View>


            </View>
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
        backgroundColor: 'rgb(0,0,0)'
    },
    input:{
        marginTop: 70
    },
    innerText:{
        color: 'rgb(200,200,200)',
        fontSize: 15
    }
})

export default LoginScreen;