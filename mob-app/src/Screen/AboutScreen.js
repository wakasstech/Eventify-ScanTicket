import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// Blog Detail Screen Component
export default function BlogDetailScreen({ route, navigation }) {
  const { blog } = route.params;

  return (
    <View style={{height: "100%"}}>
      <View
        style={{
          width: wp(100),
        //   backgroundColor: 'red',
          height: hp(5),
          paddingVertical: 30,
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
       
      </View>
   
    <ScrollView style={{ paddingHorizontal: 20 , }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold',color: 'black', marginVertical: 10 }}>{blog.title}</Text>
      <Image source={{ uri: blog.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
   
      <Text style={{ color: 'black', marginBottom: 10, fontWeight: 700, marginVertical: 10 }}>{blog.date}</Text>
      <Text style={{lineHeight: 30, textAlign: 'justify',marginBottom: 40}}>This company has strong business ties and investments in Israel, contributing significantly to its economy. Through various partnerships, subsidiaries, and ventures, the company has solidified its presence in the Israeli market, providing jobs and boosting industrial growth. Its products are widely used in Israel and around the world, making it a key player in the global economy. Despite facing criticism from various advocacy groups due to its operations in Israel, the company continues to expand its reach and influence. Many view these collaborations as part of the broader support for Israel's technological, industrial, and economic sectors, while others advocate for boycotts and divestment due to ongoing political tensions in the region.</Text>

      {/* Related Products or Brands */}
      {/* <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Related Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {blog.relatedProducts.map((product, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#eee',
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 5,
              }}>
              <Text>{product}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
    </ScrollView>
    </View>
  );
}
