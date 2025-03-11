import React, { useState } from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
export default function FeedBackScreen({navigation, route}) {

  const [show,setShow]=useState(false)
  const {HandelSearch} = route.params;
  return (
    <View>
      <View style={{padding: hp(2)}}>
        <Image
          source={require('../assets/BackIcon.png')}
          style={{width: wp(8), height: hp(8)}}
        />
      </View>

      <View style={{paddingHorizontal: wp(5.3)}}>
        <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
          Product Not Found.
        </Text>
        <Text style={{fontSize: 17, color: 'black'}}>
          Help us improve by providing feedback.
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF', // Background color
            borderRadius: 8, // Rounded corners
            paddingHorizontal: 10,
            height: hp(7),
            elevation: 4,
            justifyContent: 'flex-end',
            marginBottom: hp(6),
            marginVertical: hp(3),
            width: wp(90),
          }}>
          <TextInput
            style={{width: wp(80)}}
            placeholder="Search a Boycott Product"
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: wp(90),
            height: hp(12),
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderWidth: 1,
            borderColor: '#01B763',
            borderRadius: 10,
          }}>
          <Image
            source={require('../assets/camera.png')}
            style={{width: wp(16), height: hp(6)}}
          />
          <Text>Camera</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: wp(90),
              backgroundColor: '#01B763',
              height: hp(6),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginVertical: hp(7),
            }} onPress={()=>setShow(true)}>
            <Text style={{fontWeight: '700', color: 'white'}}>
              Submit Feedback
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Modal transparent={true}visible={show}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
            <View
              style={{
                width: wp(95),
                height: hp(45),
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <FastImage
                  style={{width: wp(90), height: hp(30)}}
                  source={require('../assets/check.gif')} // Adjust path as necessary
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View
                style={{
                  width: wp(90),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // backgroundColor:'red'
                }}>
                <TouchableOpacity
                  style={{
                    width: wp(40),
                    height: hp(6),
                    backgroundColor: 'green',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    HandelSearch(), navigation.navigate('HomeScreen');
                  }}>
                  <Image
                    source={require('../assets/search.png')}
                    style={{width: wp(5), height: hp(2)}}
                  />
                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                    Search Product
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: wp(40),
                    height: hp(6),
                    backgroundColor: 'red',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                  }}
                  onPress={() => navigation.navigate('HomeScreen')}>
                  <Image
                    source={require('../assets/home.png')}
                    style={{width: wp(5), height: hp(2)}}
                  />

                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                    Explore Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
