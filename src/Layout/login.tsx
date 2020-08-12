import React from 'react';
import fire from '../config/fire';
import classes from "./login.module.css";
import {TextField, Checkbox, Button} from '@material-ui/core';

interface state{
    email: string;
    password:string;
}

const ini: state = {email: "", password: ""}

const Login = () => {
    const[state,setState] = React.useState(ini);
    const[checked,setChecked] = React.useState(false);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setState({...state,
                  [e.currentTarget.name]: e.currentTarget.value
          } as { [K in keyof state]: state[K]});
      }

    const login = (e:any) => {
        console.log(state);
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(state.email, state.password).then((_)=>{
        }).catch((error) => {
            console.log(error);
      });
   }

    /*const signup = (e:any) =>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(state.email, state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
    }
    */

    return (
        <div className={classes.container}>
            <h1 > Sign In</h1>
            <div className={classes.form}>
                <p><strong>Email:</strong></p>
                <input type="email" name="email" value={state.email} onChange={handleChange}  placeholder="Enter email"/>
                <p><strong>Password:</strong></p>
                <TextField type="password" name="password" value={state.password} onChange={handleChange} id="outline-basic" label="password" variant="outlined" />
                <div className={classes.item}>
                    <Checkbox checked={checked} onChange={() => setChecked(!checked)} color="primary"/>
                    <p><strong>Remember Me</strong></p>
                </div>
                <Button color="primary" variant="contained" onClick={login}>Submit</Button>
                <p>Forgot password?</p>
            </div>
        </div>
    );
}
export default Login;

