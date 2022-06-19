import React, { useContext } from 'react';
import { ThemeContext , themes } from './Themes';
import Card from './Card';

function App() {
  const theme = useContext(ThemeContext);
  console.log("theme.values ", theme);
  return(
    <ThemeContext.Provider value={themes.primary}>
      <Card />
    </ThemeContext.Provider>
  )

}

export default App;
