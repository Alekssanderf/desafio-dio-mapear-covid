import './App.css';
import Main from './Main';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Main />

    </StylesProvider>
  
    
  );
}

export default App;
