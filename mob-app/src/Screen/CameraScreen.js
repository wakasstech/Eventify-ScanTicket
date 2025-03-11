import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CameraScreen({ navigation }) {
  const handleBarCodeRead = ({ data, type }) => {
    // Log and display the scanned barcode information
    // Alert.alert('Barcode Scanned', `Type: ${type}\nData: ${data}`);
    console.log('Barcode Data:', data);
    // navigation.navigate('ScanLoading', { barcode: data });
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead} // Callback for barcode scanning
        onCameraReady={() => console.log('Camera is ready')}
        onMountError={(error) => console.log('Camera mount error:', error)}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={{ color: 'white' }}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Scan Product</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.skipButton}
          >
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Scanner Frame */}
        <View style={styles.frameContainer}>
          <View style={styles.frame} />
        </View>
        

        <View >
          <Text style={styles.instructionText}>
            Align the barcode within the frame to scan it
          </Text>
        </View>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  skipButton: {
    width: wp(12),
    borderRadius: 30,
    height: hp(6),
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skip: {
    fontSize: 18,
    color: 'white',
  },
  scannerArea: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  instructionText: {
    fontSize: 16,
    color: '#fff',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    textAlign: 'center',
  },
  frameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: wp(70),
    height: wp(70),
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
});
