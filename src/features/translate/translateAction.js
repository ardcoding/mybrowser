import { createAsyncThunk } from '@reduxjs/toolkit';
import { translateFailed, translateSuccess } from './translateSlice';
import axios from 'axios';

export const getTranslate = createAsyncThunk(
    "getTranslate",
    async({arg, lang}, thunkAPI) => {
        try{
            
            if(!arg) return;
            const word = arg;
            const options = {
                method: 'POST',
                url: "https://microsoft-translator-text.p.rapidapi.com/translate",
                params: {
                    'to[0]': lang,
                    'api-version': '3.0',
                    profanityAction: 'NoAction',
                    textType: 'plain'
                  },
                  headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.REACT_APP_TRANSLATE_API_KEY,
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                  },
                data: [{Text: word}]
            };
            const response = await axios.request(options);
            var data = response.data
            thunkAPI.dispatch(translateSuccess({data, lang}))
        }catch(error){
            thunkAPI.dispatch(translateFailed(error))
        }
    }
)