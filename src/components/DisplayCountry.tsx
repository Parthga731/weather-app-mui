import { Box, Button, Typography } from "@mui/material";
import { AnyMap } from "immer/dist/internal";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCountryName } from "../slices/weatherSlice";
import { BoxPaper } from "./Atomic/BoxPaper";
import { TypographyName } from "./Atomic/TypographyName";

export const DisplayCountry = () => {
  const { countryInfo, isCountryDataShow } = useAppSelector(
    (state) => state.weather
  );

  const dispatch = useAppDispatch();
  const { name } = useParams();
  const naviagte = useNavigate();
  console.log(countryInfo);

  useEffect(() => {
    dispatch(getCountryName(name));
  }, [dispatch, name]);

  return (
    <>
      {isCountryDataShow &&
        countryInfo.map((country: any, id: any) => {
          return (
            <Box key={id} data-testid={`countrylist-${id}`}>
              <BoxPaper>
                <Typography variant="h4" component="h3">
                  Country Information
                </Typography>
                <TypographyName name="Country" value={country.name} />
                <TypographyName name="Capital" value={country.capital} />
                <TypographyName name="Population" value={country.population} />
                <TypographyName name="Latlng" value={String(country.latlng)} />

                <img src={`${country.flags.png}`} alt="country photos" />
                <Button
                  variant="contained"
                  onClick={() => naviagte(`/${country.name}/weather`)}
                  sx={{ m: 3 }}>
                  Check Weather
                </Button>
              </BoxPaper>
            </Box>
          );
        })}
    </>
  );
};
