import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const EventCard = ({ event }) => {
 const navigation = useNavigation();
  const truncateText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}..` : text;
  };
  return (
    <View
      style={{
        padding: 8,
        marginRight: 14,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
       borderWidth: 1,
       borderColor:'#dcdcdc'
      }}
    >
      {/* Event Image */}
      <Image
        source={{ uri: event.photo }}
        style={{
          width: '100%',
          resizeMode: 'contain',
          height: 100,
          width:190,
          borderRadius: 8,
          marginBottom: 3,
        }}
      />
      
      {/* Event Info */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 1, color: '#3795D6' }}>
         {truncateText(event.name, 25 )}
      </Text>
      <View
        style={{
          alignSelf: 'flex-start',
          backgroundColor: '#474747',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4,
          marginBottom: 3,
        }}
      >
        <Text style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>{event.category}</Text>
      </View>
      <Text style={{ fontSize: 14, color: '#555', marginBottom: 1 }}>
      📍{truncateText(event.venue, 24)}
      </Text>
      <Text style={{ fontSize: 14, color: '#777', marginBottom: 2 }}>
       {truncateText(event.address, 26)}

      </Text>

      {/* Category */}
      

      {/* Prices */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          // alignItems: 'center',
          marginBottom: 6,
        }}
      >
        {/* <Text style={{ fontSize: 14, fontWeight: '800', color: '#444' }}>
        🏷️ VIP: {event?.currency}{event.vipprice}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '800', color: '#444' }}>
          Economy: {event?.currency}{event.economyprice}
        </Text> */}
         <Text style={{ fontSize: 14, fontWeight: '800', color: '#444' }}>
         🏷️ {event.ticket}
            </Text>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#D6375D',
          paddingVertical: 6,
          borderRadius: 6,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ProductDetailScreen', {eventInfo: event})}
      >
        <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>
        Ver detalle

        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;