import React, { useState, useEffect } from 'react';
// import Contacts from './component/Contact.js';
import './App.css';

function App() {
  
  
  let [getData, setData] = useState([]);
  
  //Used for this Api for geting data
  // http://jsonplaceholder.typicode.com/users


  useEffect(() => {
    async function getGlobalData() {
      // setDataLoading(true)
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      console.log(response);
      const data = await response.json();
      console.log(data);
      setData(data);
      // setDataLoading(false)
    }
    getGlobalData();
  }, [])



  return (
    <div className="App">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Steve Jobs</h5>
          <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
          <p class="card-text">Stay Hungry, Stay Foolish</p>

        </div>
        <div>

          <h1>Contact List</h1>
          {getData ? getData.map((myData, index) => {
            return (
              <div class="card" key={index}>
                <div class="card-body">
                  <h5 class="card-title">{myData.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{myData.email}</h6>
                  <p class="card-text">{myData.company.catchPhrase}</p>
                </div>
              </div>
            )
          }) : null
          }
          {/* {getData ? getData.map((myData, index) => (
        <div class="card" key={index}>
          <div class="card-body">
            <h5 class="card-title">{myData.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{myData.email}</h6>
            <p class="card-text">{myData.company.catchPhrase}</p>
          </div>
        </div>
        
      ))} */}
        </div>

      </div>

    </div>
  );
}

export default App;
