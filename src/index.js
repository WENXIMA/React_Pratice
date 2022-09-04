import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts.js";

ReactDOM.render(
  <App
    name={contacts[0].name}
    img={contacts[0].imgURL}
    phone={contacts[0].phone}
    email={contacts[0].email}
    name1={contacts[1].name}
    img1={contacts[1].imgURL}
    phone1={contacts[1].phone}
    email1={contacts[1].email}
    name2={contacts[2].name}
    img2={contacts[2].imgURL}
    phone2={contacts[2].phone}
    email2={contacts[2].email}
  />,
  document.getElementById("root"),
  document.getElementById("root2"),
  document.getElementById("root2")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
