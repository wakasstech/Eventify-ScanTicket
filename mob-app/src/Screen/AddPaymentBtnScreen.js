import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View, 
 Alert
} from 'react-native';
import PayHeader from '../component/PayHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaymentScreen = ({ navigation }) => {
  // State for managing card details and payment method selection
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Function to handle form submission and console the values
  const handleSubmit = () => {
    // const paymentDetails = {
    //   cardNumber,
    //   expiryDate,
    //   cvv,
    //   selectedPaymentMethod,
    // };
    // console.log(paymentDetails);
    // Alert.alert('Payment details submitted!', JSON.stringify(paymentDetails));
    // Navigation or other logic can go here
    navigation.navigate('ConfirmPayment')
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Payment Header */}
      <PayHeader navigation={navigation}/>

      <View style={{ paddingHorizontal: wp(5), marginTop: hp(2) }}>
       
        {/* <View>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>
            Credit & Debit Card
          </Text>
        </View>

       
        <View style={{ marginTop: hp(2) }}>
          <TextInput
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            style={{
              width: '100%',
              height: hp(6),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#0000004D',
              paddingHorizontal: wp(4),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          />
          <TextInput
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
            style={{
              width: '100%',
              height: hp(6),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#0000004D',
              marginTop: hp(1),
              paddingHorizontal: wp(4),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          />
          <TextInput
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            style={{
              width: '100%',
              height: hp(6),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#0000004D',
              marginTop: hp(1),
              paddingHorizontal: wp(4),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          />
        </View>  */}

        <View>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>
            Credit & Debit Card
          </Text>
        </View>
        <View
          style={{
            width: wp(90),
            height: hp(7),
           
            marginTop: hp(1),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 7, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1.3
          }}>
          <View
            style={{
              width: wp(40),
              // backgroundColor: 'yellow',
              height: hp(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/pyment4.png')}
              style={{width: wp(7), height: hp(4), resizeMode:'contain'}}
            />
            <View>
              <Text>Add Card</Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <Image
              source={require('../assets/image42.png')}
              style={{width: wp(4), height: hp(3)}}
            />
          </View>
        </View>
        
        <View style={{ marginTop: 20,padding: wp(4) }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>
              More Payment Options
            </Text>
          </View>
      
        <View style={{ marginTop: 0, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 4 }}>
          

          {/* PayPal Option */}
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('PayPal')}
            style={{
              width: '100%',
              height: hp(7),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: wp(4),
              borderBottomWidth: 1,
              borderBottomColor: '#E0E0E0',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/pyment2.png')}
                style={{ width: wp(5), height: hp(3), marginRight: wp(2) }}
              />
              <Text style={{ fontSize: 16, color: 'black' }}>PayPal</Text>
            </View>
            <View
              style={{
                width: wp(6),
                height: hp(3),
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0000004D',
                backgroundColor: selectedPaymentMethod === 'PayPal' ? '#01B763' : 'white',
              }}
            />
          </TouchableOpacity>

          {/* Apple Pay Option */}
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('Apple Pay')}
            style={{
              width: '100%',
              height: hp(7),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: wp(4),
              borderBottomWidth: 1,
              borderBottomColor: '#E0E0E0',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/pyment3.png')}
                style={{ width: wp(5), height: hp(3), marginRight: wp(2), resizeMode:'contain' }}
              />
              <Text style={{ fontSize: 16, color: 'black' }}>Apple Pay</Text>
            </View>
            <View
              style={{
                width: wp(6),
                height: hp(3),
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0000004D',
                backgroundColor: selectedPaymentMethod === 'Apple Pay' ? '#01B763' : 'white',
              }}
            />
          </TouchableOpacity>

          {/* Google Pay Option */}
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('Google Pay')}
            style={{
              width: '100%',
              height: hp(7),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: wp(4),
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/pyment1.png')}
                style={{ width: wp(6), height: hp(3), marginRight: wp(2), resizeMode:'contain' }}
              />
              <Text style={{ fontSize: 16, color: 'black' }}>Google Pay</Text>
            </View>
            <View
              style={{
                width: wp(6),
                height: hp(3),
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0000004D',
                backgroundColor: selectedPaymentMethod === 'Google Pay' ? '#01B763' : 'white',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

     
      <View style={{ paddingHorizontal: wp(5), marginTop: hp(15) }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: hp(7),
            backgroundColor: '#01B763',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
          }}
          onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
