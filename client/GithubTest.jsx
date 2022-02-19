import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function App() {

  const handleClick = () => {
    const CLIENT_ID = '27337f49cf34f7d2d21b';
    const url = 'https://github.com/login/oauth/authorize?' 
    + 'scope=user,repo&'
    + 'redirect_uri=http://localhost:3000/github/callback&'
    + 'client_id=' + CLIENT_ID;
    window.location.href = url;
  };
  return (
    <>
      <CssBaseline />
      <button onClick={handleClick}>github</button>
    </>
  );
}