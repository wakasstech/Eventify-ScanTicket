import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PayHeader({navigation}) {
  return (
    <View>
      <View
        style={{
          width: wp(100),
        //   backgroundColor: 'red',
          height: hp(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between'
        }}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{width:wp(12),height:hp(6),margin:10,alignItems:'center',justifyContent:'center',borderRadius:30,backgroundColor:'#EDEDED'}}>
          <Image
            source={require('../assets/img40.png')}
            style={{width: wp(3.5), height: hp(6),}}
          />
        </TouchableOpacity>
        <View>
          <Text style={{fontWeight: 600, color: 'black'}}>Payment Methods</Text>
        </View>
        <View style={{width:wp(12),height:hp(6)}}></View>
      </View>
    </View>
  );
}
