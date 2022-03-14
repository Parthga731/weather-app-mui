import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCountryWeather } from "../slices/weatherSlice";
import { TypographyName } from "./Atomic/TypographyName";
import { Typography } from "@mui/material";
import { BoxPaper } from "./Atomic/BoxPaper";

export const DisplayWeather = () => {
  const { searchText, weatherDetail, isWeatherDataShow } = useAppSelector(
    (state) => state.weather
  );
  const dispatch = useAppDispatch();
  const { name } = useParams();
  console.log(weatherDetail);

  useEffect(() => {
    dispatch(getCountryWeather(name));
  }, [dispatch, name]);

  return (
    <>
      {isWeatherDataShow && (
        <BoxPaper>
          <Typography variant="h4" component="h3">
            Weather Information {name}
          </Typography>
          <TypographyName name="Capital" value={weatherDetail.location.name} />
          <TypographyName
            name="Temperature"
            value={weatherDetail.current.temperature}
            caption="&#8451;"
          />
          <TypographyName
            name="Weather Icon"
            value={
              <img
                src={`${weatherDetail.current.weather_icons}`}
                alt="icon"
                height="20px"
              />
            }
          />
          <TypographyName
            name="Wind Speed"
            value={weatherDetail.current.wind_speed}
            caption="KMPH"
          />
          <TypographyName name="Precip" value={weatherDetail.current.precip} />
        </BoxPaper>
      )}
    </>
  );
};
