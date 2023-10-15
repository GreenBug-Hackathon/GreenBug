import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import React, { useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";
import image from "../../network/image";

const ImageScreen = () => {
  const [openCamera, setOpenCamera] = useState<boolean>(false);
  const [type, setType] = useState(CameraType.back);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploadModalVisible, setUploadModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<string>("");

  const cameraRef = useRef<Camera | null>(null);

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
        setSelectedImage(result.assets[0].uri);
      } else {
        Alert.alert("Cancelled");
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
        setSelectedImage(uri);
        setOpenCamera(false);
      } catch (error) {
        Alert.alert("Error taking picture:");
      }
    }
  };

  const toggleUploadModal = () => {
    setUploadModalVisible(!isUploadModalVisible);
    const formData: any = new FormData();
    formData.append("file", {
      name: "file",
      type: `image/${selectedImage!.split(".").pop()}`,
      uri: selectedImage,
    });
    image.predict(formData).then((res) => {
      setLoading(false);
      setResult(res.prediction);
    });
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
          <View style={styles.takePictureButtonContainer}>
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
        <View style={{ flex: 0.8 }}>
          <Image
            key={selectedImage}
            source={{ uri: selectedImage }}
            style={styles.image}
          />
          <TouchableOpacity
            onPress={toggleUploadModal}
            style={styles.uploadButton}
          >
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isUploadModalVisible}
        onRequestClose={toggleUploadModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={toggleUploadModal}
            >
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.loadingContainer}>
              {loading ? (
                <LottieView
                  source={require("../../assets/animations/loading.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              ) : (
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {result}
                </Text>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  takePictureButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  uploadButtonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 20,
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
  uploadButton: {
    backgroundColor: "#088551",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 150,
    height: 150,
  },
  captureText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    height: "30%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#088551",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    padding: 5,
  },
  closeModalButton: {
    backgroundColor: "#088551",
    borderRadius: 8,
    width: "20%",
    height: "20%",
    justifyContent: "center",
  },
  closeModalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
});
