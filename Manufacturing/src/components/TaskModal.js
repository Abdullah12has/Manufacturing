import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal, TouchableHighlight, Alert, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';


function TaskModal(props) {


    const [modalVisible, setModalVisible] = useState(false);

    const [value, onChangeText] = React.useState('');
    return (

        <View style={{flex:1, width: '100%'}}>

            <View style={styles.header} >
            <Text style={styles.title} >{props.taskname}</Text>
          
                <TouchableHighlight style={styles.completeButton}
                onPress={() => Alert.alert('Simple Button pressed')}
                 >
                     <Text style={styles.btnTextStyle}>Complete</Text>

     </TouchableHighlight> 
       </View>
                
           <Text style={styles.description} >{props.description}</Text>
           <Text style={styles.customer} >Customer:     {props.customer}</Text>
           <Text style={styles.time} >Time:             {props.time}</Text>
           <Text style={styles.machine} >Machine:       {props.machine}</Text>

           <View style={styles.files}>
               <Text style={styles.filesText}>Files</Text>
           </View>

           <View style={styles.problems} >
               <Text style={styles.problemTitle}>Problems </Text>

                <View style={styles.problemInner}>
               <Text>Name </Text>
               <Text>Date Time</Text>
               </View>

               <Modal
                 animationType="fade"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                 //   Alert.alert("Modal has been closed.");
                 }}>


<ScrollView >
            <View style={styles.centeredView}>
          
            
            
            <KeyboardAvoidingView>
          <View style={styles.modalView}>
          
              <View >
                  <Text style={styles.title}>Report Problem</Text>
                
                  <TextInput
      style={{ color:'black', borderColor: 'black', borderWidth: 0, width: 250, marginTop: 0, borderBottomWidth: 0.6, marginBottom: 60 }}
      onChangeText={text => onChangeText(text)}
      value={value} multiline={true}
    />
 


              </View>
            

        <View style={{flexDirection:'row'}}>

            
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#841584" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "red" }}
              onPress={() => Alert.alert("Submitted")  }
            >
              <Text style={styles.textStyle}>Report</Text>
            </TouchableHighlight>
            </View>
            

           
          </View>
          </KeyboardAvoidingView>

        </View>

        </ScrollView>

               </Modal>

               <TouchableHighlight style={styles.failButton}
                       onPress={() => {
                        setModalVisible(true);
                      }}
                 >
                     <Text style={styles.btnTextStyle}>Problem</Text>

     </TouchableHighlight> 
     
           </View>
          
           </View>


      

    );
}

const styles = StyleSheet.create({
    main:{
      flex: 1,
      backgroundColor: '#000000aa',
      padding: 5
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
        marginBottom: 15,
        textAlign: 'center'
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
    },
    description:{
        fontSize: 13,
        marginBottom: 10,
        margin: 5,
        paddingTop: 30
    },
    files:{
        padding: 10,
        width: '100%',
    },
    filesText:{
        fontWeight: 'bold',
        marginTop: 10
    },
    problemTitle:{
        fontWeight: 'bold',
        marginTop: 10

    },
    problems:{
        padding: 10,
        width: '100%',
    },
    problemInner:{
        flexDirection:'row',
        width:'100%'
    },
    completeButton:{
        borderRadius: 20,
      padding: 10,
      elevation: 5,
      backgroundColor: 'green',

    },
    btnTextStyle:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",

    },
    failButton:{
        borderRadius: 20,
      padding: 10,
      elevation: 5,
      backgroundColor: 'red',
      marginTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
      },
      modalView: {
        width: '100%',
        flex:1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        borderRadius: 20,
        padding: 12,
        elevation: 5,
        paddingHorizontal: 35,
        marginHorizontal: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        
  
  
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})

export default TaskModal;