import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme.js'
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
