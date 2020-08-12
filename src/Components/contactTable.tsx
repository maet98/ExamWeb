import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classes from "./contactTable.module.css";
import Contact from '../schema/Contact';
import firebase from "../config/fire";
import {Button} from '@material-ui/core';


const ini: Contact[] = new Array();
const db = firebase.database();
interface props{
    List:Contact[];
    deleteMe:Function;
    select:Function;
}


const ContactTable = (props:props) => {

  return (
      <div className={classes.main}>
        <button className={classes.Add}>Add New Record </button>
        <h1>My Contacts</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right"><strong>No.</strong></TableCell>
                <TableCell align="right">First name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email Address</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                props.List.map((value:Contact,index:number) => {
                    return( 
                      <TableRow>
                        <TableCell align="right">{index+1}</TableCell>
                        <TableCell align="right">{value.first_name}</TableCell>
                        <TableCell align="right">{value.last_name}</TableCell>
                        <TableCell align="right">{value.email}</TableCell>
                        <TableCell align="right"><Button color="primary" onClick={()=> props.select(index)}>Update</Button></TableCell>
                        <TableCell align="right"><Button color="secondary" onClick={() => props.deleteMe(value.id,index)}>Delete</Button></TableCell>
                      </TableRow>
                      );
                })
            }
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}

export default ContactTable;
