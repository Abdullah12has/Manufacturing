import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import TaskCard from "./TaskCard";
import TaskModal from './TaskModal';

function ModalTest(props) {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <TaskModal taskname={props.taskname} description={props.description} customer={props.customer} time={props.time} machine={props.machine}/>
           

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#841584" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight style={{flex:1, width:'100%'}}
       
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <TaskCard taskname={props.taskname} customer={props.customer} time={props.time} machine={props.machine}/>
      </TouchableHighlight>
    </View>
  

    );
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      
    },
    modalView: {
      width: '80%',
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
      paddingHorizontal: 35
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
  });
  

export default ModalTest;