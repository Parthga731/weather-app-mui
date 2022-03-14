import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weather_api } from "../utils/api_key";
import axios from "axios";

export const getCountryName = createAsyncThunk(
  "countryapi/api",
  async (countryName: any) => {
    try {
      console.log(countryName);
      const response = await axios.get(
        `https://restcountries.com/v2/name/${countryName}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCountryWeather = createAsyncThunk(
  "weatherapi/api",
  async (countryName: any) => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${weather_api}&query=${countryName}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: any = {
  searchText: "",
  weatherDetail: {},
  countryInfo: [],
  isCountryDataShow: false,
  isWeatherDataShow: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    searchCountryAction: (state, action) => {
      state.searchText = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    //   country Info
    builder.addCase(getCountryName.fulfilled, (state, action: any) => {
      console.log("countryNameList => ", action.payload);
      state.countryInfo = action.payload;
      state.isCountryDataShow = true;
      state.isWeatherDataShow = false;
    });
    //   weather
    builder.addCase(getCountryWeather.fulfilled, (state, action) => {
      console.log("getCountryWeather => ", action.payload);
      state.weatherDetail = action.payload;
      state.isCountryDataShow = false;
      state.isWeatherDataShow = true;
    });
  },
});

export const { searchCountryAction } = weatherSlice.actions;
export default weatherSlice.reducer;
