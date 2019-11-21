/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import { Alert } from 'react-native';  
import { TouchableHighlight } from 'react-native';
import styles from './assets/style'



export default class  App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      contact: [
        {
          type : "Medecine",
          call : "9 upcoming",
          image: require( "./assets/medecin.png" ),
        },
        {
          type : "Reminders",
          call : "3 upcoming",
          image: require( "./assets/reminders.png" ),
        },
        {
          type : "Doctor Visits",
          call : "1 upcoming",
          image: require( "./assets/doctor.png" ),
        },
        {
          type : "Calls",
          call : "3 upcoming",
          image: require( "./assets/calls.png" ),
        },
      ],
      cancall: [
        {
          mytreefamily : "Son",
          name : "Marty McFly",
          photo: require( "./assets/marty.png" ),
        },
        {
          mytreefamily : "Wife",
          name : "Glados Douglas",
          photo: require( "./assets/glados.png" ),
        },
        {
          mytreefamily : "Daughter",
          name : "Clara Oswald",
          photo: require( "./assets/clara.png" ),
        },
        {
          mytreefamily : "Brother",
          name : "Leonard Hofstadter",
          photo: require( "./assets/leonard.png" ),
        },
      ],
      days: [
        {
          numbers : 5,
          day : "Tue",
        },
        {
          numbers : 6,
          day : "Wed",
        },
        {
          numbers : 7,
          day : "Fri",
        },
        {
          numbers : 8,
          day : "Sat",
        },
        {
          numbers : 9,
          day : "Sun",
        }
      ]
    };
  }

  showAlert1() {  
    Alert.alert(  
        'Baptiste !!!!!',  
        "Baptiste arrete de toucher les buttons",  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
  }  

  showAlert2() {  
    Alert.alert(  
        'Oopss you want it all',  
        "Baptiste tout pour toi",  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
  } 

  showAlert3() {  
    Alert.alert(  
        'Waouw Love is what you need',  
        "Baptiste un vrai loveur",  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
  } 

  showAlert4() {  
    Alert.alert(  
        'Arrete ca sert à rien',  
        "Baptiste stopp ca sert à rien",  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
  } 

  showAlert5() {  
    Alert.alert(  
        'Je suis a cote de toi baptiste tu le sais',  
        "Baptiste j'arriveeee",  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
  } 


  render() {

    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <View style={styles.left}></View>
                <View style={styles.mysection}>
                  <Text style={styles.sectionTitle}>John Doe</Text>
                  <Text style={styles.titleid}>ID: Q1734567891</Text>
                </View>
                  <Image style={styles.stretch} source={require('./assets/squareexit.png')}/>
                <View>
                </View>
              </View>

              <View style={styles.dayscontainer}>
                {this.state.days.map((data, index) => {
                  return (
                    <View style={[styles.days, index == 1? styles.changecolor: null]}>
                      <View style={styles.mycontainer}>
                        <View style={index == 0? styles.reddot: null}></View>
                        <Text style={[styles.numbers, index == 1? styles.changetowhite: null]}>{data.numbers}</Text>
                        <Text style={[styles.day, index == 1? styles.changetowhite: null]}>{data.day}</Text>
                      </View>
                    </View>
                  )
                })}                
              </View>


              <View style={styles.midpage}>
                <View style={styles.container}> 
                  {this.state.contact.map((contact) => {
                    return (
                      <View style={styles.fonctionnalities} onPress={this.showAlert1} title="Button 1">
                      {/* <Button onPress={this.showAlert1} title="Button 1"/>   */}
                         <Image source={contact.image} style={styles.imageofcontact} />
                        <Text style={styles.info}>{contact.type}</Text>
                        <Text style={styles.call}>{contact.call}</Text>
                      </View>
                    )
                  })}
                </View>
                

                <View style={styles.greensecondcontainer}>
                  <View style={styles.complet}>
                    <Text style={styles.visit}>Visites effectuées ce mois-ci</Text>
                    <View style={styles.containercolor}>
                      <View style={styles.colorbyjauge}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.mytitlefamily}>
                  <View style={styles.family}>
                    <Text style={styles.familysize}>Family</Text>
                    <Text style={styles.contact}>Contact with your family</Text>
                  </View>
                  <View style={styles.add}>
                  <TouchableHighlight onPress={this.showAlert1} underlayColor="white">
                    <Image style={styles.addme} source={require('./assets/add.png')}/>
                  </TouchableHighlight>
                  </View>
                </View>
              </View>

              <View style={styles.greencontainer}>
                <View style={styles.misterpic}>
                  <Image style={styles.mister} source={require('./assets/mister.png')}/>
                </View>
                <View style={styles.complet}>
                  <Text style={styles.pourcent}>Vous avez complété 75% {"\n"}de vos tâches cette semaine</Text>
                </View>
              </View>

              <View style={styles.endpage}>
                <View style={styles.description}>
                    <TouchableHighlight onPress={this.showAlert2}><Text style={[styles.all, styles.myall]}>All</Text></TouchableHighlight>
                    <TouchableHighlight onPress={this.showAlert3}><Text style={[styles.all, styles.grey]}>Loved</Text></TouchableHighlight>
                    <TouchableHighlight onPress={this.showAlert4}><Text style={[styles.all, styles.grey]}>Usefull</Text></TouchableHighlight>
                    <TouchableHighlight onPress={this.showAlert5}><Text style={[styles.all, styles.grey]}>Close</Text></TouchableHighlight>
                </View>
                <View style={styles.hr}>
                  <View style={styles.divinhr}></View>
                </View>
                <View style={styles.mycontact}>
                  {this.state.cancall.map((cancall) => {
                      return (
                      <View style={styles.mycall}>
                        <View style={styles.idinfo}>
                          <View style={styles.photo}>
                            <Image style={styles.myphoto} source={cancall.photo}/>
                          </View>
                          <View style={styles.treeandname}>
                            <Text style={styles.treefamily}>{cancall.mytreefamily}</Text>
                            <Text style={styles.treename}>{cancall.name}</Text>
                          </View> 
                        </View>
                        <Image style={styles.phone} source={require('./assets/phone.png')}/>
                      </View>
                      )
                    })}
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};