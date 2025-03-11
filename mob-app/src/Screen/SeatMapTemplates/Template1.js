import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "native-base";
// import { MaterialIcons } from "@expo/vector-icons"; // Icons for seats
// import { Ionicons } from "@expo/vector-icons"; // Back button icon

const Template1 = ({event
    , selectionDate}) => {
  const navigation = useNavigation();

  const comingSeats = event?.finalSeats;
  const finalSeats = comingSeats[0].split(",");
  const reservedSeats = selectionDate !== "first" ? event?.reservedSeats : event?.reservedSeatsSec;
//   const reservedSeats = event?.reservedSeats ;

  const originalVipCount = Number(event?.vipSize);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const middleSeats = finalSeats.slice(0, originalVipCount);
  const remainingSeats = finalSeats.slice(originalVipCount);
  const halfRemaining = Math.ceil(remainingSeats.length / 2);
  const leftSeats = remainingSeats.slice(0, halfRemaining);
  const rightSeats = remainingSeats.slice(halfRemaining);

  const handleSeatClick = (seat) => {
    if (reservedSeats.includes(seat)) return;
    setSelectedSeats((prev) => 
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const calculateTotalPrice = () => {
    const vipPrice = event?.vipprice;
    const economyPrice = event?.economyprice;

    return selectedSeats.reduce((total, seat) => {
      const isVip = seat.startsWith("VIP");
      return total + (isVip ? vipPrice : economyPrice);
    }, 0);
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      Alert.alert("No Seats Selected", "Please select seats before proceeding.");
      return;
    }

    const payload = {
      event_id: event?._id,
      eventName: event?.name,
      bookingDate: selectionDate !== "first" ? event?.eventDate : event?.eventDateSec,
      guestSize: selectedSeats.length,
      seatNumbers: selectedSeats,
      totalPrice: calculateTotalPrice(),
      currency: event?.currency,
    };

    console.log(payload);
    navigation.navigate("StripePayment", { payload });
  };

  const renderSeats = (seats) => (
    <View style={styles.seatContainer}>
      {seats.map((seat) => {
        const isVip = seat.startsWith("VIP");
        const isSelected = selectedSeats.includes(seat);
        const isReserved = reservedSeats.includes(seat);

        return (
          <TouchableOpacity
            key={seat}
            style={[
              styles.seatButton,
              isReserved ? styles.reservedSeat : isSelected ? styles.selectedSeat : isVip ? styles.vipSeat : styles.economySeat,
            ]}
            onPress={() => handleSeatClick(seat)}
            disabled={isReserved}
          >
            {/* <MaterialIcons name="event-seat" size={18} color="white" /> */}
            <Text style={styles.seatText}>{seat}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    // <ImageBackground
    //   source={{ uri: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg" }}
    //   style={styles.background}
    // >
        <View style={{  alignItems: "center",
            justifyContent: "center",padding: 10}}>

        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/BackIcon.png')} style={{width: 30, height: 30, tintColor: 'black'}}    onPress={() => navigation.goBack()} />
     </TouchableOpacity>
    

      <Text style={styles.title}>Seleccione sus asientos</Text>

      {/* Seat Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#ff0e0e" }]} />
          <Text style={{color: 'white', fontSize:10}}>Asiento VIP</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#3960ba" }]} />
          <Text style={{color: 'white',  fontSize:10}}>Asiento Económico</Text>
        </View>
        
      </View>
      <View style={styles.legendContainer}>
      <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "grey" }]} />
          <Text style={{color: 'white',  fontSize:10}}>Asiento Reservado</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "green" }]} />
          <Text style={{color: 'white',  fontSize:10}}>Asiento Seleccionado</Text>
        </View>
        </View>
      {/* Render Seats */}
      <ScrollView style={{ flex: 1 }}> 
  <ScrollView horizontal style={{ flex: 1 }}>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ width: 210 }}>
        {renderSeats(leftSeats)}
      </View>
      <View style={{ width: 210 }}>
        {renderSeats(middleSeats)}
      </View>
      <View style={{ width: 210 }}>
        {renderSeats(rightSeats)}
      </View>
    </View>
  </ScrollView>
</ScrollView>


      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
        <Text style={styles.buttonText}>Confirmar Reserva</Text>
      </TouchableOpacity>
      </View>
    // </ImageBackground>
  );
};

export default Template1;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "white",
    // padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom:5,
    color: "white",
  },
  legendContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginRight: 5,
  },
  seatContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  seatButton: {
    width: 30,
    height: 30,
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  vipSeat: { backgroundColor: "#ff0e0e" },
  economySeat: { backgroundColor: "#3960ba" },
  reservedSeat: { backgroundColor: "grey" },
  selectedSeat: { backgroundColor: "green" },
  seatText: { color: "white", fontSize: 10 },
  confirmButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
