
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Modal, FlatList, Image, ActivityIndicator, StyleSheet, ScrollView, TextInput } from 'react-native';

// const continents = ['Asia', 'Europe', 'Africa', 'Americas', 'Antarctic', 'Oceania'];

// const CountryDropdown = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState('Pakistan');
//   const [selectedFlag, setSelectedFlag] = useState('https://flagcdn.com/w320/pk.png');
//   const [expandedContinents, setExpandedContinents] = useState(
//     continents.reduce((acc, continent) => ({ ...acc, [continent]: true }), {})
//   );
//   const [countriesData, setCountriesData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCountries, setFilteredCountries] = useState({});

//   const toggleContinent = (continent) => {
//     setExpandedContinents((prevState) => ({
//       ...prevState,
//       [continent]: !prevState[continent],
//     }));
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country.country_name);
//     setSelectedFlag(country.country_flag);
//     setModalVisible(false);
//   };

//   const fetchCountriesData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(' https://boy.ranaafaqali.com/api /area/getAll-country');
//       const data = await response.json();
//       setCountriesData(data);
//       setFilteredCountries(data);
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (modalVisible) {
//       fetchCountriesData();
//     }
//   }, [modalVisible]);

//   useEffect(() => {
//     if (searchQuery) {
//       const filtered = {};
//       Object.keys(countriesData).forEach(continent => {
//         filtered[continent] = countriesData[continent].filter(country =>
//           country.country_name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       });
//       setFilteredCountries(filtered);
//     } else {
//       setFilteredCountries(countriesData);
//     }
//   }, [searchQuery, countriesData]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
//         <Image source={{ uri: selectedFlag }} style={styles.flagIcon} />
//         <Text style={styles.buttonText}>{selectedCountry}</Text>
//       </TouchableOpacity>

//       <Modal visible={modalVisible} transparent={true} animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
            
//             <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButtonText}>✖</Text>
//             </TouchableOpacity>
//             <TextInput
//                   style={styles.searchInput}
                
//                   placeholder="Search country here"
//           placeholderTextColor="#999" 
//                   value={searchQuery}
//                   onChangeText={text => setSearchQuery(text)}
//                 />
//             {loading ? (
//               <ActivityIndicator size="large" color="#006400" />
//             ) : (
//               <ScrollView style={{ maxHeight: 500,  }}>
               
//                 {continents.map((continent) => (
//                   <View key={continent} style={styles.mainBoxContinent}>
//                     <TouchableOpacity
//                       style={styles.continentHeaderContainer}
//                       onPress={() => toggleContinent(continent)}>
//                       <Text style={styles.continentHeader}>{continent}</Text>
//                       <Text style={styles.arrowIcon}>
//                         {expandedContinents[continent] ? '▼' : '◀'}
//                       </Text>
//                     </TouchableOpacity>
//                     {expandedContinents[continent] && filteredCountries[continent] && (
//                       <ScrollView style={styles.countriesList} nestedScrollEnabled={true}>
//                         {filteredCountries[continent].map((country) => (
//                           <TouchableOpacity
//                             key={country.id}
//                             onPress={() => handleCountrySelect(country)}
//                             style={styles.countryRow}>
//                             <Image source={{ uri: country.country_flag }} style={styles.flag} />
//                             <Text style={styles.countryName}>{country.country_name}</Text>
//                           </TouchableOpacity>
//                         ))}
//                       </ScrollView>
//                     )}
//                   </View>
//                 ))}
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#006400',
//     paddingHorizontal: 8,
//     paddingVertical:5,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#fff'
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 13,
//     marginLeft: 10,
//   },
//   flagIcon: {
//     width: 18,
//     height: 18,
//     resizeMode: 'contain'
    
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     margin: 20,
//     padding: 20,
//     borderRadius: 10,
//     height: 500,
//     position: 'relative',
//   },
//   searchInput: {
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     marginTop: 25,
//     color: 'black'
    
//   },
//   mainBoxContinent: {
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor:'#D9D9D9',
//   },
//   continentHeaderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     paddingHorizontal: 4
//   },
//   continentHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   arrowIcon: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   countriesList: {
//     maxHeight: 150,
//   },
//   countryRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingLeft: 20,
//   },
//   flag: {
//     width: 30,
//     height: 20,
//     marginRight: 10,
//   },
//   countryName: {
//     fontSize: 16,
//     color: '#000000',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 20,
   
//     zIndex: 1,
//   },
//   closeButtonText: {
//     color: 'black',
//     fontSize: 20,
//   },
// });

// export default CountryDropdown;

// CountryDropdown.js redux



import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'native-base'; // Import Modal from NativeBase

import { selectCountry } from '../globalStore/slices/countrySlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CountryDropdown = ({ countriesData }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [isLoading, setIsLoading] = useState(false); // Loading state

 
  const selectedCountry = useSelector((state) => state.country.selectedCountry);
  const selectedBgColor = useSelector((state) => state.country.bgColor);
  const selectedCountryFlag = useSelector((state) => state.country.selectedCountryFlag);

  const continents = ['Asia', 'Europe', 'Africa', 'Americas', 'Antarctic', 'Oceania'];
  const [expandedContinents, setExpandedContinents] = useState({
    Asia: true,
    Europe: false,
    Africa: false,
    Americas: false,
    Antarctic: false,
    Oceania: false,
  });

  const toggleContinent = (continent) => {
    setExpandedContinents((prevState) => ({
      ...prevState,
      [continent]: !prevState[continent],
    }));
  };

  const handleCountrySelect = async (country) => {
    const { country_name, country_flag, bgColor } = country;
    dispatch(selectCountry({ country: country_name, selectedCountryFlag: country_flag, bgColor }));

    // Store in AsyncStorage
    await AsyncStorage.setItem('selectedCountry', JSON.stringify(country_name));
    await AsyncStorage.setItem('selectedCountryFlag', country_flag);
    await AsyncStorage.setItem('bgColor', bgColor);

    setModalVisible(false);
  };

  useEffect(() => {
    if (searchQuery) {
     // Expand all continents when search query is not empty
      setExpandedContinents({
        Asia: true,
        Europe: true,
        Africa: true,
        Americas: true,
        Antarctic: true,
        Oceania: true,
      });
      const filtered = {};
      Object.keys(countriesData).forEach(continent => {
        filtered[continent] = countriesData[continent].filter(country =>
          country.country_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countriesData);
    }
  }, [searchQuery, countriesData]);
  const handleOpenModal = () => {
    setIsLoading(true); // Show loading screen
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setModalVisible(true); // Show modal after loading
    }, 500); // Simulate a small delay (e.g., 1 second)
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
     
      {isLoading ? (
       
          <TouchableOpacity
      style={[styles.button, { backgroundColor: selectedBgColor || '#3C3B6E' }]}
     
    >
      <Image
        source={require('../assets/globeIcon.png')}
        style={styles.globeIcon}
      />
      <View style={styles.separator} />
      <Text style={styles.buttonText}>
      {/* <ActivityIndicator size="small" color="#fff" /> */}
        Fetching....
      </Text>
     
    </TouchableOpacity>
      
      ) : 
      <TouchableOpacity
      onPress={handleOpenModal} 
    >
      <View
      style={[styles.button, { backgroundColor: selectedBgColor || '#3C3B6E' }]}
      // Open modal without refetching
    >
      
      <Image   
        source={require('../assets/globeIcon.png')}
        style={styles.globeIcon}
      />
   
      
      <View style={styles.separator} />
      <Text style={styles.buttonText}>{selectedCountry || 'United States'}</Text>
      <Image
        source={{ uri: selectedCountryFlag || 'https://flagcdn.com/w320/us.png' }}
        style={styles.flagIcon}
      />
    </View>
    </TouchableOpacity>
      }

      {/* <Modal visible={modalVisible} transparent={true} animationType="slide"> */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <Modal.Content width="90%"  maxWidth="500px" borderRadius={15}>
      <Modal.CloseButton />
      <Modal.Header >Select a Country</Modal.Header>
      <Modal.Body style={{ paddingTop: 0 }}>
      <TextInput
              style={styles.searchInput}
              placeholder="Search country here"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
            <ScrollView >
              {continents.map((continent) => (
                <View key={continent} style={styles.mainBoxContinent}>
                  <TouchableOpacity
                    style={styles.continentHeaderContainer}
                    onPress={() => toggleContinent(continent)}
                  >
                    <Text style={styles.continentHeader}>{continent}</Text>
                    <View style={styles.arrowIcon}>
                      {expandedContinents[continent] ? 
                      <Image source={require('../assets/dropMenuOpen.png')} style={{width: 20, height: 20, resizeMode: 'contain'}} />
                       : <Image source={require('../assets/dropMenuClose.png')} style={{width: 20, height: 20, resizeMode: 'contain'}} />}
                    </View>
                  </TouchableOpacity>
                  {expandedContinents[continent] && filteredCountries[continent] && (
            <ScrollView style={{ }}>
                      {filteredCountries[continent].map((country) => (
                        <TouchableOpacity
                          key={country.id}
                          onPress={() => handleCountrySelect(country)}
                          style={styles.countryRow}>
                          <Image source={{ uri: country.country_flag }} style={styles.flag} />
                          <Text style={styles.countryName}>{country.country_name}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}
                </View>
              ))}
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
 //   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
button: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#006400',
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fff',
},
globeIcon: {
  width: 15,
  height: 15,
  resizeMode: 'contain',
},
separator: {
  width: 1,
  height: '60%',
  backgroundColor: '#fff',
  marginHorizontal: 7,
},
buttonText: {
  color: '#fff',
  fontSize: 13,
  marginRight: 6,
},
loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
flagIcon: {
  width: 16,
  height: 16,
  resizeMode: 'contain',
},
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  backgroundColor: '#fff',
  margin: 20,
  padding: 20,
  borderRadius: 10,
  height: 500,
  position: 'relative',
},
searchInput: {
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 20,
  marginBottom: 15,
  marginTop: 25,
  color: 'black',
  backgroundColor: '#dcdcdc'
  
},
mainBoxContinent: {
  marginBottom: 10,
  backgroundColor: '#fff',
  borderRadius: 5,
  borderWidth: 1,
  borderColor:'#D9D9D9',
  elevation: 1
},
continentHeaderContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 10,
  backgroundColor: '#fff',
  borderRadius: 5,
  paddingHorizontal: 4
},
continentHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#000000',
  marginLeft:3
},
arrowIcon: {
  // fontSize: 18,
  // fontWeight: 'bold',
  // color: 'black',
  backgroundColor: '#D9D9D9',
  padding: 3,
  borderRadius: 30
},
countriesList: {
  maxHeight: 200,
},
countryRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  paddingLeft: 20,
},
flag: {
  width: 30,
  height: 20,
  marginRight: 10,
},
countryName: {
  fontSize: 16,
  color: '#000000',
},
closeButton: {
  position: 'absolute',
  top: 10,
  right: 20,
 
  zIndex: 1,
},
closeButtonText: {
  color: 'black',
  fontSize: 20,
},
  // Other styles...
});

export default CountryDropdown;
