import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Layout from './Components/Layout';

const theme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      title: {
        fontWeight: 700
      },
    },
    MuiChip: {
      root: {
        borderRadius: 3,
        height: 25,
        color: 'white',
        marginRight: 10
      }
    }
  },
});


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Layout />
        </MuiThemeProvider>
      </div>
    );
  }
}
