import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


function TasksScreen(props) {
    return (
       <View style={styles.main}>

           <View style={styles.header}>
               <Text style={styles.headerText}> 
                   Tasks
               </Text>

           </View>



       </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'black'
    },
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#841584',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    headerText:{
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 10
    }
})

export default TasksScreen;