import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableHighlight} from 'react-native';


function TaskModal(props) {
    return (

  
       <View style={styles.main}>
           <View style={styles.modal} >

           <Text style={styles.title} >{props.taskname}</Text>
           <Text style={styles.customer} >Customer:     {props.customer}</Text>
           <Text style={styles.time} >Time:             {props.time}</Text>
           <Text style={styles.machine} >Machine:       {props.machine}</Text>

           </View>
           
       </View>

    );
}

const styles = StyleSheet.create({
    main:{
      flex: 1,
      backgroundColor: '#000000aa'
    },
    modal:{
        backgroundColor:"white",
        margin: 30,
        padding: 40,
        borderRadius: 10,
        flex:1
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

export default TaskModal;