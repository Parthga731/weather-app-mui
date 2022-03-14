import { Typography } from "@mui/material";
import React from "react";

export const TypographyName = ({ name, value, caption }: any) => {
  return (
    <Typography component="span" variant="body1">
      {name}: {value} {caption}
    </Typography>
  );
};
