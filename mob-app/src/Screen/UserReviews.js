import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import img1 from '../assets/event/test1.jpg';
import img2 from '../assets/event/test2.jpg';
import img3 from '../assets/event/test3.jpg';
import img4 from '../assets/event/test4.jpg';
import img5 from '../assets/event/test5.jpg';
import img6 from '../assets/event/test6.jpg';
import { FlatList, Image } from 'native-base';
const mockReviews = [
    {
        review: "Felicidades a esta empresa por hacer que nuestro retiro corporativo sea memorable. Su creatividad y atención al detalle añadieron un toque único a cada aspecto del evento.",
        imgSrc: img1,
        name: "Sabina González",
        title: "CEO, TechCorp"
    },
    {
        review: "Me sorprendieron las excepcionales habilidades de gestión de eventos del equipo. Convirtieron la fiesta de cumpleaños de mi hija en una experiencia mágica que nuestra familia atesorará para siempre.",
        imgSrc: img2,
        name: "Fernando Martínez",
        title: "Padre Feliz"
    },
    {
        review: "Tuve el placer de asistir a una boda organizada por el equipo de gestión de eventos, y debo decir que cada detalle fue meticulosamente planificado. La decoración, la música y el ambiente fueron impecables.",
        imgSrc: img3,
        name: "Sara López",
        title: "Invitada de Boda"
    },
    {
        review: "La empresa de gestión de eventos superó todas las expectativas con la organización de nuestra recaudación de fondos benéfica. Su dedicación y profesionalismo hicieron que el evento fuera un gran éxito.",
        imgSrc: img4,
        name: "Santiago Fernández",
        title: "Fundador, Fundación HH"
    },
    {
        review: "No podría haber pedido un mejor equipo para manejar el lanzamiento de mi producto. Hicieron realidad mi visión y se aseguraron de que cada invitado quedara impresionado por el evento.",
        imgSrc: img5,
        name: "Ana Martínez",
        title: "Emprendedora, SGlamours"
    },
    {
        review: "Asistir a la conferencia organizada por este equipo fue un placer. Su coordinación y ejecución impecable hicieron que fuera una experiencia valiosa para todos los asistentes.",
        imgSrc: img6,
        name: "Zulema García",
        title: "Entusiasta de la Tecnología"
    },
  ];
const UserReviews = () => {

    const renderReviewCard = ({ item }) => (
        <View
          style={{
            // width: 250,
            marginBottom:5,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 15,
            marginHorizontal: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
            elevation: 3,
          }}
        >
          <Image
            source={item.imgSrc }
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignSelf: 'center',
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              color: '#555',
              textAlign: 'center',
              marginBottom: 10,
            }}
          >
            {item.review}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333',
              marginBottom: 5,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#777',
              textAlign: 'center',
            }}
          >
            {item.title}
          </Text>
        </View>
      );
  return (
    <View>
        <Text style={{textAlign :'center', fontSize: 18, fontWeight: 'bold', marginTop:6}}>
        Reseñas
        </Text>
        <FlatList
      data={mockReviews}
      
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderReviewCard}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}
    />
    </View>
  )
}

export default UserReviews
