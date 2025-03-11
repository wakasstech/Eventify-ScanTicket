// import React, { useState } from 'react';
// import {
//   Image,
//   ImageBackground,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//    Modal, FlatList, StyleSheet
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// const currencyList = [
//   { label: 'USD', value: 'USD' },
//   { label: 'PKR', value: 'PKR' },
//   { label: 'EUR', value: 'EUR' },
//   { label: 'GBP', value: 'GBP' },
//   { label: 'JPY', value: 'JPY' },
// ];

// export default function DonatScreen({ navigation }) {
//   const [amount, setAmount] = useState(''); // State to hold the selected amount
//   const [selectedCurrency, setSelectedCurrency] = useState('PKR'); // Default currency
//   const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

//   // Function to format the number as currency
//   const formatCurrency = (value) => {
//     let formattedValue = value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters

//     // Add commas for thousands
//     formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//     // Limit to two decimal places
//     if (formattedValue.includes('.')) {
//       const parts = formattedValue.split('.');
//       formattedValue = `${parts[0]}.${parts[1].slice(0, 2)}`;
//     }

//     return formattedValue;
//   };

//   // Handle amount change
//   const handleAmountChange = (value) => {
//     setAmount(formatCurrency(value));
//   };

//   // Function to render currency selection modal
//   const renderCurrencyModal = () => (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => setModalVisible(false)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Select Currency</Text>
//           <FlatList
//             data={currencyList}
//             keyExtractor={(item) => item.value}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.currencyOption}
//                 onPress={() => {
//                   setSelectedCurrency(item.value);
//                   setModalVisible(false);
//                 }}
//               >
//                 <Text style={styles.currencyText}>{item.label}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Header /> */}
//       <View style={{ flex: 1, alignItems: 'center' }}>
//         <View
//           style={{
//             marginTop: 100,
//             height: hp(60),
//             flexDirection: 'column',
//             justifyContent: 'space-evenly',
//             alignItems: 'center',
//           }}
//         >
//           <View>
//             <Image
//               source={require('../assets/donateimg.png')}
//               style={{
//                 borderRadius: 10,
//                 width: wp(92),
//                 height: hp(30),
//                 marginBottom: hp(0),
//               }}
//             />
//           </View>

//           <View
//             style={{
//               flexDirection: 'column',
//               justifyContent: 'space-evenly',
//               width: wp(90),
//               height: hp(30),
//               alignItems: 'center',
//               marginVertical: hp(10),
//             }}
//           >
//             <View style={{display: 'flex', flexDirection: 'row', gap: 7,paddingHorizontal: 10 }}>
//  {/* Currency Selector */}
//  <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.currencyButton}>
//               <Text style={styles.currencyText}>{selectedCurrency} <Text style={{fontWeight: 'bold'}}>v</Text></Text>
//             </TouchableOpacity>

//             <View>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter Amount"
//                 placeholderTextColor={'#0000004D'}
//                 value={amount}
//                 keyboardType="numeric"
//                 onChangeText={handleAmountChange} // Format and set amount
//               />
//             </View>

//             </View>
           
//             {/* Predefined amount buttons */}
//             <View>
//               <View style={styles.amountButtonsContainer}>
//                 {[100, 200, 500, 1000].map((value) => (
//                   <TouchableOpacity
//                     key={value}
//                     onPress={() => setAmount(formatCurrency(String(value)))} // Set predefined amount
//                     style={styles.amountButton}
//                   >
//                     <Text>{value}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             {/* Continue Button */}
//             <View>
//               <TouchableOpacity
//                 style={styles.continueButton}
//                 onPress={() => navigation.navigate('PaymentMethods')}
//               >
//                 <Text style={styles.continueButtonText}>Continue</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Render Currency Modal */}
//       {renderCurrencyModal()}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     width: wp(65),
//     borderColor: 'grey',
//     fontWeight: '700',
//     padding: 12,
//     marginBottom:15
//   },
//   amountButtonsContainer: {
//     width: wp(90),
//     height: hp(7),
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginBottom:20
//   },
//   amountButton: {
//     width: wp(20),
//     borderRadius: 20,
//     height: hp(4),
//     borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'green',
//   },
//   continueButton: {
//     width: wp(88),
//     backgroundColor: '#01B763',
//     borderRadius: 10,
//   },
//   continueButtonText: {
//     padding: 12,
//     textAlign: 'center',
//     fontSize: 22,
//     fontWeight: '600',
//     color: 'white',
//   },
//   currencyButton: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: 'grey'
//   },
//   currencyText: {
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     margin: 20,
//     borderRadius: 10,
//     maxHeight: '50%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   currencyOption: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderColor: '#f0f0f0',
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ContactUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Acerca de Nosotros</Text>
      <Text style={styles.description}>
        Bienvenido a Entradas Melilla, su socio de confianza para crear eventos inolvidables y experiencias sin complicaciones.
      </Text>
      <Text style={styles.description}>
        Con una pasión por la innovación y un compromiso con la excelencia, nos especializamos en planificar y gestionar todo tipo de eventos, desde conferencias corporativas y exposiciones hasta bodas, fiestas y celebraciones especiales. Nuestro equipo de profesionales dedicados trabaja incansablemente para transformar su visión en realidad.
      </Text>
      <Text style={styles.description}>
        En Entradas Melilla, nos enorgullecemos de construir relaciones duraderas con nuestros clientes y hacer que cada ocasión sea verdaderamente inolvidable.
      </Text>
      <Text style={styles.servicesHeading}>Nuestros servicios incluyen:</Text>
      <Text style={styles.service}>• 🎓 Eventos corporativos</Text>
      <Text style={styles.service}>• 🏛️ Exposiciones y ferias comerciales</Text>
      <Text style={styles.service}>• 📋 Conferencias y seminarios</Text>
      <Text style={styles.service}>• 🚀 Lanzamientos de productos</Text>

      <Text style={styles.heading}>Contacto</Text>
      <View style={styles.contactDetails}>
        <Text style={styles.detailLabel}>📍 Dirección:</Text>
        <Text style={styles.detailValue}>Calle Falsa 123, 28001 Madrid, España</Text>

        <Text style={styles.detailLabel}>📞 Teléfono:</Text>
        <Text style={styles.detailValue}>+34 000 000 000</Text>

        <Text style={styles.detailLabel}>📧 Correo Electrónico:</Text>
        <Text style={styles.detailValue}>admin@freelancerclientsdemo.website</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2A2A35', // Same background as Pricing Page
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#FFD700', // Golden heading color
  },
  description: {
    fontSize: 16,
    color: '#E1E1E1', // Light gray for better readability
    marginBottom: 15,
    lineHeight: 22,
    textAlign: 'justify'
  },
  servicesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50', // Green for subheadings
    marginBottom: 10,
  },
  service: {
    fontSize: 16,
    color: '#E1E1E1',
    marginBottom: 5,
  },
  contactDetails: {
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for labels
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: '#E1E1E1', // Light gray for details
    marginBottom: 15,
  },
});

export default ContactUs;
