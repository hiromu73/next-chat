
import { AppBar, Box,  Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'calc(100% - 2rem)', // Containerのpadding(p: 1)を考慮
        margin: '0 auto',
      }}
    >
      <AppBar
      position="fixed"
        // color="inherit"
        // enableColorOnDark

      sx={{
        width: '100%',
        maxWidth: 'calc(100% - 2rem)', // Containerのpadding(p: 1)を考慮
        margin: '0 auto',
        background: (theme) => theme.palette.background.paper

      }}
    >
        <Toolbar disableGutters sx={{
            display: 'flex',
            justifyContent: 'center', // 中央寄せ
          }}
        >
          <Typography variant="h6" component="div"
            noWrap
          >
            <Link href="/" underline="none" color="inherit" >
              debeateApp
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

  );
};

export default NavigationBar;
