import React,{useState} from "react";
import classes from "./Home.module.css";
import ContactForm from "../Components/contactForm";
import ContactTable from "../Components/contactTable";
import fire from "../config/fire";
import Contact from "../schema/Contact";

const ini: Contact[] = new Array();
const db = fire.database();
const ini2: Contact = {first_name:"", last_name:"",email:"",mobile:""}; 


const Home = () => {
    const [list,setList] = useState(ini);
    const [selected,setSelected] = useState(ini2);

    React.useEffect(()=>{
        refresh();
    },[])

    const refresh = () => {
        var List: Contact[] = new Array();
        db.ref('contacts/').on("value", (snap) => {
            snap.forEach( data=> {
                if(data){
                    const val: Contact = data.val().value;
                    val.id = data.key;
                    List.push(val);
                }
            });
            setList(List);
        })
    }

    const reset = (event: any) => {
        event.preventDefault();
        setSelected(ini2);
    }

    const deleteMe = (id: string,index:number) => {
        let contactRef = db.ref('contacts/'+id);
        contactRef.remove().then((_) => {
            list.splice(index,1);
            setList([...list]);
        });
    }

    const selectOne = (index:number) => {
        setSelected({...list[index]});
    }

    return ( 
        <div className={classes.main}>
            <ContactForm refresh={refresh} contact={selected}/>
            <ContactTable List={list} deleteMe={deleteMe} select={selectOne}/>
        </div>
   );
} 

export default Home;
