import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Conversor from './paginas/Conversor';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#00ffff'
    },
    background: {
      default: "lightblue"
    }
  }
})


function App() {
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Switch>
          <Route exact path='/'>
            <Conversor />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
