import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ScannerScreen({navigation}) {
  return (
    <View>
      <View style={{width: wp(100), height: hp(65)}}>
        <FastImage
          style={{flex: 1}}
          // source={require('../assets/3.gif')} // Adjust path as necessary

          source={require('../assets/scangiff.gif')} // Adjust path as necessary
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={{width: wp(100), height: hp(35), backgroundColor: 'white'}}>
        <View
          style={{
            width: wp(100),
            height: hp(45),
            backgroundColor: 'white',
            position: 'absolute',
            top: hp(-6),
            borderTopLeftRadius: hp(7),
            borderTopRightRadius: hp(7),
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            elevation: 4,
            borderWidth: 1,
            borderColor: '#d4d3d2',
          }}>
          <View
            style={{
              height: hp(32),
              //   backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={{fontSize: 33, fontWeight: '800', color: '#4CAD73'}}>
                Scan All Products
              </Text>
            </View>
            <View style={{width: wp(60), alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '400', lineHeight: 18, color: '#878787B2', textAlign: 'center'}}>
                "To identify  products, we'll need access to your camera."
              </Text>
            
            </View>
            {/* <View style={{width: wp(70), alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                By continuing, you agree with our{' '}
                <Text style={{color: 'red'}}>Privacy Policy</Text> and{' '}
                <Text style={{color: 'red'}}>Terms & Conditions</Text>
              </Text>
            </View> */}
            <View>
              <TouchableOpacity
                style={{
                  width: wp(70),
                  borderRadius: 30,
                  height: hp(6),
                  marginTop: 12,
                  backgroundColor: '#4CAD73',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('CameraScreen')}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: '700'}}>
                  Start Scanning
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
