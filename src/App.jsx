import { useState } from 'react';
import './App.css';
import Counter from './assets/components/Counter';

 
function App() {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = event => {
    setTheme(event.target.value); // CORRECT!
  };



  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>

      <Counter theme={theme} />

      <select onChange={ toggleTheme }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}
export default App;



// To maintain the selected theme even after a page refresh, 
// you can utilize browser storage such as localStorage or sessionStorage to store the selected theme value. 


// function App() {
//   const [theme, setTheme] = useState(() => {
//     // Check if the theme is saved in localStorage
//     const savedTheme = localStorage.getItem('theme');
//     // Return the saved theme if it exists, otherwise default to 'light'
//     return savedTheme || 'light';
//   });

//   // Update the theme in localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
//       <select onChange={event => setTheme(event.target.value)} value={theme}>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//       </select>
//       {/* Other content */}
//     </div>
//   );
// }

// export default App;