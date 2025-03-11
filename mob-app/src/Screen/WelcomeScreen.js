import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function WelcomeScreen({navigation}) {
  return (
    <View>
      <View style={{width: wp(100), height: hp(65)}}>
        <FastImage
          style={{flex: 1}}
          source={require('../assets/onBording.gif')} // Adjust path as necessary
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{width: wp(100), height: hp(35), backgroundColor: 'white'}}>
        <View
          style={{
            width: wp(100),
            height: hp(35),
            backgroundColor: 'white',
            position: 'absolute',
            top: hp(-6),
            borderTopLeftRadius: hp(7),
            borderTopRightRadius: hp(7),
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: hp(18),
              //   backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={{fontSize: 38, fontWeight: '800', color: '#4CAD73'}}>
                Welcome!
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 24, fontWeight: '400'}}>
                Best Buycott App
              </Text>
            </View>
            <View style={{width: wp(75), alignItems: 'center'}}>
              <Text style={{color: '#7F7F7FB2', fontSize: 16, textAlign: 'center'}}>
                "Take a stand for your values—join the  movement with the Boycott App."
              </Text>
              {/* <Text style={{color: '#7F7F7FB2', fontSize: 16}}>
               
              </Text> */}
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: wp(40),
                borderRadius: 30,
                height: hp(6),
                backgroundColor: '#4CAD73',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Language')}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
