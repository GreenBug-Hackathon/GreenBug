import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const ImageScreen = () => {
  const [openCamera, setOpenCamera] = useState<boolean>(false);
  const [type, setType] = useState(CameraType.back);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Combined state for both images

  const cameraRef = React.useRef<Camera | null>(null);

  const handleOpenCamera = async () => {
    const status = await Camera.requestCameraPermissionsAsync();
    if (status.granted) {
      setOpenCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const handleOpenGallery = async () => {
    const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status.granted) {
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } else {
      Alert.alert("Access denied to gallery");
    }
  };

  const closeCamera = () => {
    setOpenCamera(false);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync({
          quality: 1,
        });
        setSelectedImage(uri); // Set the selected image URI
        setOpenCamera(false);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {openCamera ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={takePicture}
              style={styles.captureButton}
            >
              <Text style={styles.captureText}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOpenCamera()}
          >
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOpenGallery()}
          >
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedImage && (
        <Image
          key={selectedImage}
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#fff",
    width: "91%",
    height: "25%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#088551",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#088551",
    width: "50%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    left: 15,
    backgroundColor: "#088551",
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    backgroundColor: "#088551",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 150,
    width: "40%",
    alignSelf: "center",
  },
  captureText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
  },
});
