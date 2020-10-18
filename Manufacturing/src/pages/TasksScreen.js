import React from 'react';
import {View, StyleSheet, Text, ScrollView, Modal, TouchableHighlight, FlatList} from 'react-native';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';

// const [modalVisible, setModalVisible] = React.useState(false);


function TasksScreen(props) {
    return (
       <View style={styles.main}>

           <View style={styles.header}>
               <Text style={styles.headerText}> 
                   Tasks
               </Text>
           </View>
                <ScrollView >

                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
              
                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
                <TaskCard taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/>
              
           </ScrollView>

           {/* <TaskModal taskname={'Task name'} customer={'Ali  '} time={'12:00 '} machine={'Machine 1'}/> */}
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
        marginBottom: 10
    },
    headerText:{
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 10
    },
 
})

export default TasksScreen;