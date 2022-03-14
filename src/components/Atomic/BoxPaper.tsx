import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BoxPaper = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 3,
      }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "500px",
        }}
        elevation={5}>
        {children}
      </Paper>
    </Box>
  );
};
