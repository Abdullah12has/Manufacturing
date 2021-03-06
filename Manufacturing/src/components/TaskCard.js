import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


function TaskCard(props) {
    return (
       <View style={styles.main}>
           <Text style={styles.title} >{props.taskname}</Text>
           <Text style={styles.customer} >Customer:     {props.customer}</Text>
           <Text style={styles.time} >Time:             {props.time}</Text>
           <Text style={styles.machine} >Machine:       {props.machine}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    main:{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 6,
        padding: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    customer:{
        fontWeight: 'bold',
        fontSize: 15,


    },
    time:{
        fontWeight: 'bold',
        fontSize: 15

    },
    machine:{
        fontWeight: 'bold',
        fontSize: 15

    }
    
   
})

export default TaskCard;