import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchCountryAction } from "../slices/weatherSlice";
import { useNavigate } from "react-router-dom";

export const SearchCountry = () => {
  const { searchText } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`./${searchText}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ width: "100%", height: "600px" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Typography variant="h4" component="h3" sx={{ m: 2 }}>
            Weather App
          </Typography>
          <TextField
            size="small"
            id="standard-basic"
            value={searchText}
            onChange={(e) => dispatch(searchCountryAction(e.target.value))}
            placeholder="Enter Country"
            aria-label="cost-input"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!searchText}
            sx={{ m: 2 }}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};
