import React from 'react';
import fire from "./config/fire"
import Login from "./Layout/login"
import Home from "./Layout/Home"
import './App.css';



function App() {
    const[user,setUser] = React.useState();

    React.useEffect(() => {
        authListener();
    },[]);

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user)
            if(user) {
                setUser(user);
                localStorage.setItem('user', user.uid);
            } else {
                setUser(null);
            }
        })
    }
    
    return (
        <div className="App">
        {
            user? <Home/>: <Login/>
        }
        </div>
    );
}

export default App;
