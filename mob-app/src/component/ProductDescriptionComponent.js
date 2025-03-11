import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const languageOptions = {
  en: 'English',
  ur: 'Urdu',
  fr: 'Français',
  de: 'Deutsch',
  sv: 'Svenska',
  tr: 'Türkçe',
};

const ProductDescriptionComponent = () => {
    const {t} = useTranslation();
  const currentLanguage = useSelector((state) => state.language); // Global language from Redux
  const [descriptionLanguage, setDescriptionLanguage] = useState(currentLanguage); // Local state for description language
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  const translations = {
    en: {
      descriptionContent:
        "In an increasingly interconnected world, where every purchase can have a ripple effect on society, the environment, and global politics, it's more important than ever to be mindful of the products we buy. This product is currently under boycott due to concerns raised by consumers, activists, or organizations about its ethical, social, or environmental impact.",
    },
    ur: {
      descriptionContent:
        "ایک زیادہ سے زیادہ باہم جڑے ہوئے دنیا میں، جہاں ہر خریداری کا معاشرے، ماحول اور عالمی سیاست پر اثر پڑ سکتا ہے، یہ جانچنا زیادہ ضروری ہے کہ ہم جو مصنوعات خریدتے ہیں وہ کس قسم کے اثرات ڈالتی ہیں۔ یہ مصنوعات صارفین، کارکنان یا تنظیموں کی طرف سے اس کی اخلاقیات، سماجی یا ماحولیاتی اثرات کے بارے میں خدشات کے باعث بائیکاٹ میں ہیں۔",
    },
    fr: {
      descriptionContent:
        "Dans un monde de plus en plus interconnecté, où chaque achat peut avoir un effet d'entraînement sur la société, l'environnement et la politique mondiale, il est plus important que jamais de faire attention aux produits que nous achetons. Ce produit est actuellement boycotté en raison de préoccupations soulevées par les consommateurs, les militants ou les organisations concernant son impact éthique, social ou environnemental.",
    },
    de: {
      descriptionContent:
        "In einer zunehmend vernetzten Welt, in der jeder Kauf Auswirkungen auf die Gesellschaft, die Umwelt und die globale Politik haben kann, ist es wichtiger denn je, auf die Produkte zu achten, die wir kaufen. Dieses Produkt wird derzeit boykottiert, da Bedenken hinsichtlich seiner ethischen, sozialen oder ökologischen Auswirkungen geäußert wurden.",
    },
    sv: {
      descriptionContent:
        "I en alltmer sammanlänkad värld, där varje köp kan ha en kedjereaktion på samhället, miljön och global politik, är det viktigare än någonsin att vara medveten om de produkter vi köper. Denna produkt är för närvarande under bojkott på grund av oro från konsumenter, aktivister eller organisationer om dess etiska, sociala eller miljömässiga påverkan.",
    },
    tr: {
      descriptionContent:
        "Daha da birbirine bağlı bir dünyada, her satın almanın toplum, çevre ve küresel siyaset üzerinde dalgalanma etkisi yaratabileceği bir dünyada, satın aldığımız ürünlere daha fazla dikkat etmek her zamankinden daha önemlidir. Bu ürün, tüketiciler, aktivistler veya kuruluşlar tarafından dile getirilen etik, sosyal veya çevresel etkileriyle ilgili endişeler nedeniyle şu anda boykottadır.",
    },
  };

  // Function to handle language change for description
  const handleDescriptionLanguageChange = (language) => {
    setDescriptionLanguage(language);
    setIsModalVisible(false); // Close modal after selecting a language
  };

  return (
    <View style={styles.container}>
      {/* Button to show modal */}
     

      <View style={styles.containerDescription}>
      <View style={styles.headerDescription}>
        <Text style={styles.titleDescription}>{t('description')}</Text>
        <TouchableOpacity
        style={styles.languageButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.languageText}>
        <Image
          source={require('../assets/language-but.webp')} // Ensure this path is correct
          style={{ width: 15, height: 15, tintColor: 'white' }} // Updated the size
        /> {languageOptions[descriptionLanguage]} ▼
        </Text>
      </TouchableOpacity>
      </View>
      </View>

      {/* Modal for selecting language */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
           
          <View style={styles.modalContent}>
          <Text style={{color: 'black', fontWeight: '800', fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>
            Select Language
                </Text>
            {Object.keys(languageOptions).map((languageCode) => (
              <TouchableOpacity
                key={languageCode}
                style={styles.modalButton}
                onPress={() => handleDescriptionLanguageChange(languageCode)}
              >
                <Text style={styles.modalButtonText}>
                  {languageOptions[languageCode]}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Displaying the description based on selected language */}
      <Text style={styles.description}>
        {translations[descriptionLanguage].descriptionContent}
      </Text>
    </View>
  );
};

export default ProductDescriptionComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop:30,
    borderRadius: 10,
    
    backgroundColor: '#fff'
  },
  containerDescription: {
    // borderWidth: 1,
    // borderColor: '#007bff',
    // borderRadius: 8,
    // paddingHorizontal: 15,
    // marginHorizontal: 10,
    // paddingTop: 10,
    // marginTop: 20,
    backgroundColor: '#fff',
  },
  headerDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  languageButton: {
    padding: 5,
    backgroundColor: '#999999',
    borderRadius: 5,
    marginBottom: 10,
  },
  languageText: {
    fontSize: 13,
    color: '#fff'
  },
  description: {
    marginTop: 3,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 25,
    color: '#474444'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#474444'
  },
  modalCloseButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  modalCloseText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red'
  },
});
