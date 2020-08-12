import firebase from "../config/fire";
import Contact from "../schema/Contact";

const db = firebase.database();

export const postContact = async (contact:Contact)=> {
    return db.ref('contacts/').push({value:contact})
}

export const getAll = async () => {
    var List: Contact[];
    db.ref('contact/').on("value", (snap) => {
        snap.forEach( data=> {
            if(data){
                List.push(data.val());
            }
        });
        return List;
    })
}

export const updateContact = async(contact:Contact) => {
    const id = contact.id;
    contact.id = null;
    db.ref('contacts/'+id).set({value:{...contact}});
}
