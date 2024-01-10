

// Import the Header component with a capitalized name
import Header from './Components/Header/header';
import Home from './Components/home/Home';


import {Box} from '@mui/material';

function App() {
  return (
    <div>
      Hello
      <Header />
      <Box style = {{marginTop : 54}}>
          <Home />
      </Box>
    </div>
  );
}

export default App;
