import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  FlatList,
  Button,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';

const VRC = ({routes, navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [Data, setData] = useState([]);
 

  var Complaint = firestore().collection('Complaint');

  useEffect(() => {
    var Dataa = async () => {
      await Complaint.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        console.log(data);
      });
    };
    Dataa();
  });

  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
        <View
          style={{
            height: 400,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('UserPanel')}>
              <Image
                source={require('../images/arrow.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          {/* <View>
            <TouchableOpacity>
              <Image
                source={require('../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,

                  marginTop: -44,
                }}
              />
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View
              style={{
                marginBottom: 0,
                marginTop: 15,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 19, fontWeight: 'bold'}}>
                REGISTERED COMPLAINTS
              </Text>
            </View>
            <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={Data}
                horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                      //  <FlatList
                      <View style={{width: 370, marginRight: 19, height: 640}}>
                        <View
                          style={{
                            //   backgroundColor: 'white',
                            borderColor: 'red',
                            marginBottom: 10,
                            //   borderRadius: 19,
                            margin: 10,

                            width: 370,
                            height: 530,
                          }}>
                          <ScrollView>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 180,
                                fontSize: 18,
                                alignItems: 'center',
                                name: 'cnic',
                              }}>
                              {index + 1}
                            </Text>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                              }}>
                              ID:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                  name: 'cnic',
                                }}>
                                {1 + 2 + Math.Random}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                marginBottom: -5,
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                // name: 'cnic',
                              }}>
                              NAME:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.name}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                marginBottom: -5,
                              }}>
                              CNIC:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                  name: 'cnic',
                                }}>
                                {item.cnic}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              CONTACT NO:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.contact}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginBottom: 15,
                                marginLeft: 10,
                                fontSize: 14,
                                marginBottom: -5,
                              }}>
                              VICTIM:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                  name: 'cnic',
                                }}>
                                {item.victimValue}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                marginBottom: -5,
                              }}>
                              CRIME TYPE:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.crimeValue}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                marginBottom: -5,
                                fontSize: 14,
                              }}>
                              DISTRICT:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.districtValue}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                marginBottom: -5,
                              }}>
                              CITY:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.cityValue}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              POLICE STATION:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.policeValue}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                marginBottom: -5,
                              }}>
                              DESCRIPTION:
                            </Text>

                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.description}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,
                                name: 'cnic',

                                marginBottom: -5,
                              }}>
                              SUSPECT NAME:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                  name: 'cnic',
                                }}>
                                {item.suspectname}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              SUSPECT CONTACT INFORMATION:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.suspectcontact}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              SUSPECT REASON: {item.reason}
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.reason}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              SUSPECT RELATION WITH YOU:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.name}
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#10942e',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                fontSize: 14,

                                marginBottom: -5,
                              }}>
                              SUSPECT DESCRIPTION:
                            </Text>
                            <View
                              style={{
                                backgroundColor: '#eceded',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                marginBottom: 30,
                                marginVertical: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.SuspectDescription}
                              </Text>
                            </View>
                          </ScrollView>

                          <View style={{marginBottom: -5}}></View>
                        </View>

                        <TouchableOpacity
                          style={{
                            backgroundColor: '#10942e',
                            borderRadius: 10,
                            width: 150,
                            marginLeft: 10,
                            marginTop: 30,
                            height: 50,
                            alignItems: 'center',
                            alignContent: 'center',
                          }}>
                          <Text>Status:{item.Status}</Text>
                        </TouchableOpacity>

                        {item.Status == 'Accepted' ?<TouchableOpacity
                          style={{
                            backgroundColor: '#10942e',
                            borderRadius: 10,
                            width: 150,
                            marginLeft: 200,
                            marginTop: -50,
                            height: 50,
                            alignItems: 'center',
                            alignContent: 'center',
                          }}
                          onPress={() =>
                            navigation.navigate('Track', {
                              trackval: item.trackValue,
                            })
                          }>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 22,
                              marginTop: 11,
                              fontWeight: 'bold',
                            }}>
                            TRACK
                          </Text>
                        </TouchableOpacity>

                        :
                        
                        <TouchableOpacity
                        disabled={true}
                        style={{
                          backgroundColor: '#10942e',
                          borderRadius: 10,
                          width: 150,
                          marginLeft: 200,
                          marginTop: -50,
                          height: 50,
                          alignItems: 'center',
                          alignContent: 'center',
                        }}
                        onPress={() =>
                          navigation.navigate('Track', {
                            trackval: item.trackValue,
                          })
                        }>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 22,
                            marginTop: 11,
                            fontWeight: 'bold',
                          }}>
                          TRACK
                        </Text>
                      </TouchableOpacity> }

                        
                      </View>
                    );
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Back3>
  );
};

export default VRC;
