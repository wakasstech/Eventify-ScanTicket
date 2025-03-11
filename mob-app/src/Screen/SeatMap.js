import {
  View,
  ImageBackground,
  StyleSheet,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Template1 from "./SeatMapTemplates/Template1";
import Template2 from "./SeatMapTemplates/Template2";
import Template3 from "./SeatMapTemplates/Template3";

const FinalSeatMapWithDynamicSections = ({ route }) => {
  const navigation = useNavigation();
  const { event , selectionDate } = route.params;
  console.log(event?.template, 'in seat map page')

 
  return (

  




    <ImageBackground
    source={{ uri: event?.template === 'template1' ?  "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg" : event?.template === 'template2' ?  "https://www.cct.org.uk/images/news/2024/top-7---social-sharing.jpg": "https://images.pexels.com/photos/22737901/pexels-photo-22737901/free-photo-of-birds-eye-view-on-a-city-of-manchester-stadium.jpeg?auto=compress&cs=tinysrgb&w=600" }}
  // source={{ uri: "https://images.pexels.com/photos/22737901/pexels-photo-22737901/free-photo-of-birds-eye-view-on-a-city-of-manchester-stadium.jpeg?auto=compress&cs=tinysrgb&w=600" }}
   style={styles.background}
 >
{event?.template === 'template1' ? (
      <Template1 event={event} selectionDate={selectionDate}/>
    ) : event?.template === 'template2' ? (
      <Template2  event={event} selectionDate={selectionDate}/>
    ) : event?.template === 'template3' ? (
      <Template3 event={event} selectionDate={selectionDate}/>
    ) : (
      <Template1 event={event} selectionDate={selectionDate}/> // Optional: Handle unexpected cases
    )}
     {/* <Template1 event={event} selectionDate={selectionDate}/> */}
       </ImageBackground>
  );
};

export default FinalSeatMapWithDynamicSections;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
});
