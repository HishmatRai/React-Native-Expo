import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Getstart = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<  HEADING SECTION   >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles._basic_heading}>


          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<  LETS START SECTION   >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <TouchableOpacity
            style={styles.button}
          // onPress={() => props.navigation.navigate("Select")}
          >
            <Text style={styles._button_txt}>Lets Start</Text>
          </TouchableOpacity>
        </View>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<  FINGER PRINT SECTION   >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"

  },
  _basic_heading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  _basic_heading_text: {
    fontSize: 30,
    fontWeight: "normal"
  },
  _fitness_img: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 110
  },
  button: {
    backgroundColor: "#141415",
    width: 200,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 9,
    borderColor: "#707070"

  },
  _button_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17
  },
  _fingerprint_btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    bottom: 0,
  },
  _fingerprint_img: {
    width: 50,
    height: 50,

  }
});

export default Getstart;
