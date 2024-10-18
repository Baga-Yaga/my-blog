// // src/App.js
// import React from 'react';
// import LandingPage from './LandingPage';

// const App = () => {
//     return (
//         <div>
//             <LandingPage />
//         </div>
//     );
// };

// export default App;

// src/App.js
import React from 'react';
import './App.css'; // Existing styles
import './LandingPage.css'; // Import your LandingPage styles
import LandingPage from './LandingPage'; // Import the LandingPage component

const App = () => {
    return (
        <div className="App">
            <LandingPage />
        </div>
    );
};

export default App;
