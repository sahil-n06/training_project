import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import SignOut from './Components/signOut/signout';
import Navigaton from './Components/Navigation/Navigation';
import profile from './assests/draw.jpg';
function App() {
  useMsalAuthentication( InteractionType.Redirect);
  
  
      useMsalAuthentication(InteractionType.Redirect);
      const [user, setUser] = useState<string | undefined>("");

     function RenderUserName(){
      const {accounts} = useMsal();
      try{
        const userName = accounts[0].name;
        setUser(userName);
      }catch (e) {}
     }

     if(user != "")
     
      return (
        <div className='App'>
          {/* <div className='photo'><img src={profile} /></div> */}
        <div>Welocome: {user}</div>
        <div>
          <SignOut></SignOut>
        </div>
        <div className = "nav-wrapper">
         <Navigaton></Navigaton>
        </div>
    </div>
  );
  else
  return (
      <>
      {RenderUserName()}
      <div>Please Wait....</div>
      </>
  );
}

export default App;