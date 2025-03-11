import React, { useState } from "react";
import { View, ActivityIndicator, Button, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";


const StripePayment = ({ route, navigation }) => {
  const { payload } = route.params;
  const [stripeUrl, setStripeUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConfirmBooking = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://demoticket.inasnapmarketing.ai/api/v1/booking/stripe/mob",
        payload
      );

      if (response.data && response.data.stripeUrl) {
        setStripeUrl(response.data.stripeUrl);
      } else {
        console.error("Stripe URL not found in response");
      }
    } catch (err) {
      console.error("Error during booking:", err);
    } finally {
      setLoading(false);
    }
  };
  const handlePaymentSuccess = () => {
    setTimeout(() => {
      navigation.replace("Splash"); // Delay before navigation
    }, 10000); // 3-second delay
  };
  const handlePaymentCancel = () => {
    console.log("Payment was cancelled or user navigated back");
    navigation.goBack(); // ⬅️ Takes the user back to the previous screen
  };
  

  // Show loading indicator while fetching Stripe URL
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {stripeUrl ? (
        // <WebView 
        //   source={{ uri: stripeUrl }} 
        //   onNavigationStateChange={(event) => {
        //     if (event.url.includes("demoticket")) {
        //       // navigation.replace("Splash"); // Redirect user after payment success
        //       handlePaymentSuccess();
        //     }
        //   }}
        // />

        <WebView 
  source={{ uri: stripeUrl }} 
  onNavigationStateChange={(event) => {
    const { url } = event;

    if (url.includes("congrtspaymentsuccess")) {
      handlePaymentSuccess(); // ✅ Redirect after success
    } else if (url.includes("events")) { 
      handlePaymentCancel(); // ✅ Handle cancellation & back navigation
    }
  }}
  onError={() => handlePaymentCancel()} // ✅ Handle webview errors
  onHttpError={() => handlePaymentCancel()} // ✅ Handle HTTP errors
/>

      ) : (
        <View style={{ marginBottom: 20 , padding:35}}>
          {/* Terms & Policies */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Términos y Políticas:</Text>
            <Text mb={3}>• Los reembolsos están sujetos a las políticas del organizador del evento.</Text>
            <Text mb={3}>• Asegúrese de que los detalles de pago sean correctos antes de continuar.</Text>
            <Text>• Los boletos no son transferibles una vez reservados.</Text>
          </View>

{/* 🚨 Mensaje importante sobre el pago */}
<View style={{ backgroundColor: "#FFF3CD", padding: 15, borderRadius: 8, marginBottom: 20 }}>
            <Text style={{ color: "#856404", fontWeight: "bold", fontSize: 14 }}>
              ⚠️ Importante:
            </Text>
            <Text style={{ color: "#856404", fontSize: 14 }}>
              Antes de proceder con el pago, asegúrese de que todos los datos sean correctos. 
              📶 Mantenga una conexión a Internet estable y no toque la pantalla hasta que 
              reciba la confirmación del pago.
            </Text>
          </View>
          {/* Stripe-Themed Button */}
          <TouchableOpacity 
            onPress={handleConfirmBooking} 
            style={{
              backgroundColor: "#635BFF",
              padding: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default StripePayment;
