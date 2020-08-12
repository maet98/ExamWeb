import React from 'react';
import fire from "./config/fire"
import Login from "./Layout/login"
import Home from "./Layout/Home"
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';



function App() {
    const[user,setUser] = React.useState();
    const[isLoading,setIsLoading]= React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
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
            setIsLoading(false);
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
