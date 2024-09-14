import React, { useState, useEffect } from "react";
import { API_URL } from "@env";

import HomeCapybaraScreen from "./HomeCapybaraScreen";
import WinnerScreen from "./WinnerScreen";
import LoserScreen from "./LoserScreen";

const capybaraImage = require("../assets/images/capybara01.webp");
const capybaraCelebrating = require("../assets/images/capybara-celebrating.webp");
const capybaraLoser = require("../assets/images/loser-capybara.webp");

const HomeScreen = ({ navigation, route }) => {
  const { styles, userNumber } = route.params;
  const [correctNumber, setCorrectNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCorrectNumber = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setCorrectNumber(data.luckNumber);
      } catch (error) {
        console.error("Error fetching correct number:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCorrectNumber();
  }, []);

  if (loading) {
    return (
      <HomeCapybaraScreen
        navigation={navigation}
        styles={styles}
        imgPath={capybaraImage}
      />
    );
  }

  if (userNumber?.length > 0) {
    if (userNumber === correctNumber)
      return (
        <WinnerScreen
          navigation={navigation}
          styles={styles}
          imgPath={capybaraCelebrating}
        />
      );

    return (
      <LoserScreen
        navigation={navigation}
        styles={styles}
        imgPath={capybaraLoser}
      />
    );
  }

  return (
    <HomeCapybaraScreen
      navigation={navigation}
      styles={styles}
      imgPath={capybaraImage}
    />
  );
};

export default HomeScreen;
