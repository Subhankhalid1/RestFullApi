import React, { useState, useEffect } from 'react';
import Contact from './component/Contact.js';
import Carousels from './component/Carousal';

import './App.css';

function App() {
  
  let [day, setDay]=useState(true);
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
      
{/* <button onClick={()=>{setDay(!day)}}>Dark-Mode</button> */}
      
      <div className="card">
      <div className={`App ${day? 'App':'darkNight'}`}>
      <button style={{margin:"1%",marginLeft:"85%", marginRight:"0%", color:"darkBlue", backgroundColor:"whitesmoke", borderRadius:"25%", height:"40px"}} onClick={()=>{setDay(!day)}}>Dark-Mode</button>
        <div className="card-body">
        <Carousels/>
        <br/>
        <h6 style={{margin:"0%", marginLeft:"6%"}}>Cofounder of Startups</h6>
        <div style={{margin:"1%", marginLeft:"15%"}}>
      
          <h5 className="card-title">SUBHAN KHALID</h5>
          <h6 className="card-subtitle mb-2 text-muted">rsubhankhalid@gmail.com</h6>
          <p className="card-text">Stay Hungry, Stay Foolish</p>
          {/* <h1>Startup Employees Detail</h1> */}
          
          
</div>

        </div>
      
       
        <div>
          {/* <h1>List is Here</h1> */}
        <Contact contacts={getData} />
       
          {/* <h1>Contact List</h1>
          {getData ? getData.map((myData, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{myData.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{myData.email}</h6>
                  <p className="card-text">{myData.company.catchPhrase}</p>
                
                </div>
              </div>
            )
          }) : null
          } */}
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
    </div>
  );
}

export default App;
