// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import HomePage from './pages/HomePage'
import TopicsPage from './pages/TopicsPage'


import TravelLog from './pages/TravelLog';

// If your schema requires SHORT data input, then use the TABLE design.
import EditTravelPageTable from './pages/EditTravelPageTable';
import AddTravelPageTable from './pages/AddTravelPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [travel, setTravelToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Norma Lopez<img src="android-chrome-192x192.png" alt="logo" /></h1>
            <p>Web Dev Full Stack Portfolio.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/travels" element={<TravelLog setTravel={setTravelToEdit}/>} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddTravelPageTable />} /> 
                    <Route path="/update" element={<EditTravelPageTable travelToEdit={travel} />} />

                </Routes>
              </section>
          </main>

          <footer>
          <p>&copy; 2023 Norma Lopez</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;