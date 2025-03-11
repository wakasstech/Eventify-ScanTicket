import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  StyleSheet,
  Modal,
  Alert
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PayHeader from '../component/PayHeader';

import FastImage from 'react-native-fast-image';


export default function PaymentScreen({ navigation }) {
  // State variables for input fields and switch
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false); // Toggle state
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle payment confirmation and validation
  const handleConfirmPayment = () => {
    // Check if all fields are filled
    if (!cardName || !cardNumber
      //  || !expiryDate
        || !cvv) {
      Alert.alert('Validation Error', 'All fields are mandatory!');
      return;
    }

    // If validation passes, log all values
    console.log('Name on Card:', cardName);
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Save this card:', saveCard);

    // Show success modal
    setModalVisible(true);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      {/* Payment Header */}
      <View>
      <PayHeader navigation={navigation}/>

      </View>

      {/* Card Image */}
      <View style={{ width: wp(90), height: hp(30), justifyContent: 'flex-end' }}>
        <Image
          source={require('../assets/card.png')}
          style={{ width: wp(90), height: hp(30), resizeMode: 'contain' }}
        />
      </View>

      {/* Input Fields */}
      <View style={{ height: hp(40), width: wp(90) }}>
        <View
          style={{
            height: hp(25),
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          {/* Name on Card */}
          <View
            style={{
              borderWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderColor: '#00000040',
              borderRadius: 5,
            }}
          >
            <Image
              source={require('../assets/user.png')}
              style={{ width: wp(6.6), height: hp(3.1), resizeMode: 'contain' }}
            />
            <TextInput
              style={{ width: wp(70) }}
              placeholder="Name on the card"
              value={cardName}
              onChangeText={setCardName}
            />
          </View>

          {/* Card Number */}
          <View
            style={{
              marginTop: 8,
              borderWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderColor: '#00000040',
              borderRadius: 5,
            }}
          >
            <Image
              source={require('../assets/card2.png')}
              style={{ width: wp(6.6), height: hp(2.2), resizeMode: 'contain' }}
            />
            <TextInput
              style={{ width: wp(70) }}
              placeholder="Card number"
              keyboardType="number-pad"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
          </View>

          {/* Expiry Date and CVV */}
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Expiry Date */}
            <View
              style={{
                borderWidth: 2,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderColor: '#00000040',
                borderRadius: 5,
                width: wp(44),
              }}
            >
              <Image
                source={require('../assets/calender.png')}
                style={{ width: wp(6.6), height: hp(3), resizeMode: 'contain' }}
              />
              <TextInput
                style={{ width: wp(30) }}
                placeholder="Month / Year"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
            </View>

            {/* CVV */}
            <View
              style={{
                borderWidth: 2,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderColor: '#00000040',
                borderRadius: 5,
                width: wp(44),
              }}
            >
              <Image
                source={require('../assets/lock.png')}
                style={{ width: wp(4.8), height: hp(3), resizeMode: 'contain' }}
              />
              <TextInput
                style={{ width: wp(30) }}
                placeholder="CVV"
                keyboardType="number-pad"
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </View>
        </View>

        {/* Save Card Toggle */}
        <View
          style={{ width: wp(90), alignItems: 'center', flexDirection: 'row', marginTop: 6 }}
        >
          <Switch value={saveCard} onValueChange={setSaveCard} />
          <Text>Save this card</Text>
        </View>
      </View>

      {/* Confirm Payment Button */}
      <View>
        <TouchableOpacity
          style={{
            width: wp(90),
            height: hp(8),
            backgroundColor: '#01B763',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleConfirmPayment}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Confirm payment</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Success Icon */}
            <View style={styles.successIcon}>
              <FastImage
                source={require('../assets/check.gif')}
                style={{width: wp(20), height: hp(18)}}
              />
            </View>

            {/* Payment Success */}
            <Text style={styles.paymentSuccessText}>Payment Success!</Text>

            {/* Payment Details */}
            <View style={styles.paymentDetails}>
              <View style={styles.row}>
                <Text style={styles.label}>Reference Number</Text>
                <Text style={styles.value}>000085752257</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>Mar 22, 2023</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>07:80 AM</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Payment Method</Text>
                <Text style={styles.value}>Credit Card</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Amount</Text>
                <Text style={styles.amount}>USD 1,000,000</Text>
              </View>
            </View>

            {/* Get PDF Receipt Button */}
            <TouchableOpacity style={styles.pdfButton}>
              <Image
                source={require('../assets/download.png')}
                style={{width: wp(10), height: hp(4)}}
              />
              <Text style={styles.pdfButtonText}>Get PDF Receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for modal
  },
  modalView: {
    width: wp('85%'),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successIcon: {
    marginBottom: 20,
  },
  paymentSuccessText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  paymentDetails: {
    width: '100%',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#777',
  },
  value: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  pdfButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
});
