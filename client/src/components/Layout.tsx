import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Toolbar,
} from "@mui/material";
import React, { ReactNode } from "react";
import FileUpload from "./Fileupload";

interface Props {
  children: ReactNode;
}
const drawerWidth = 240;

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Container sx={{ marginTop: 2 }}>
          <FileUpload />
        </Container>
      </Drawer>
      <Box component="main" sx={{ padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
