import { useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
// import HomeView from './components/HomeView';
// import UsersView from './components/UsersView';
// import ProfileView from './components/ProfileView';

function App() {

  useEffect(() => {
    getFoodEmis();
  }, []);

  //GET all foodItems
  async function getFoodEmis() {
      try {
          let response = await fetch('/'); //which path do I put here?
          if (response.ok) {
            response.json();
          } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
          }
      } catch (err) {
        console.log(`Server error: ${err.message}`);
      }
  }







  return (
    <div className="App">
      Welcome to FoodPrint
      {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/user">Users</Link>

      </nav>

        <Routes>
            <Route path="/" element={<HomeView /> } />
            <Route path="/users" element={<UsersView /> }/>
            <Route path="users/:id" element={ProfileView} />


        </Routes> */}


    </div>
  );
}

export default App;
