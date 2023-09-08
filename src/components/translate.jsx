import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslate } from '../features/translate/translateAction';
import { MenuItem, Select, TextField } from '@mui/material';

export default function Translate() {
  const translate = useSelector((state) => state.translate.translate);
  const status = useSelector((state) => state.translate.status);
  const error = useSelector((state) => state.translate.error);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [lang, setLang] = useState("tr");
  const [timeoutId, setTimeoutId] = useState(null); // Timeout referansını saklamak için bir state ekleyin

  var value = "";
  var detectedLang = "Algılanan Dil";

  const handleWordChange = (e) => {
    const newWord = e.target.value;
    setWord(newWord);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      dispatch(getTranslate({ arg: newWord, lang: lang }));
    }, 1000); 
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  if (status === "succeeded") {
    if (word === "") {
      value = "";
    } else {
      detectedLang = translate[0].detectedLanguage.language;
      value = translate[0].translations[0].text;
    }
  }
  if (status === "failed") {
    value = error;
  }

  return (
    <div>
      <div className='flex absolute w-9/12 right-0 z-10 top-px justify-center'>
        <TextField
          className='bg-white '
          id="standard-multiline-static"
          label={detectedLang}
          value={word}
          multiline
          rows={4}
          variant="standard"
          onChange={handleWordChange}
        />

        <TextField
          className='bg-white flex'
          style={{ marginLeft: "0.5px" }}
          id="outlined-disabled"
          label={lang}
          multiline
          rows={4}
          variant="standard"
          disabled
          value={value}
        />

        <Select
          className='bg-blue-500'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="language"
          onChange={(e) => setLang(e.target.value)}
        >
          <MenuItem value="tr">Türkçe</MenuItem>
          <MenuItem value="en">İngilizce</MenuItem>
          <MenuItem value="de">Almanca</MenuItem>
        </Select>
      </div>
    </div>
  );
}
