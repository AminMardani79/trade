import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
interface Props {
  handelDrawerToggle: () => void;
}
export const AppBarComponent: React.FC<Props> = ({
  handelDrawerToggle,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handelDrawerToggle}
          ></IconButton>
          <Typography component="div" variant="subtitle1">
            Trading App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
