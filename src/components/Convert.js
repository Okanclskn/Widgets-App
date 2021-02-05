import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const TranslateRequest = async () => {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: debouncedText,
          target: language ? language.value : "",
          key: API_KEY,
        },
      }
    );
    setTranslatedText(data.data.translations[0].translatedText);
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    TranslateRequest();
  }, [debouncedText, language]);

  return (
    <div>
      <h2>{translatedText}</h2>
    </div>
  );
};
export default Convert;
