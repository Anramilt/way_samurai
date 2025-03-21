import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router"
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path="/profile" element={ <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            /> } />
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
