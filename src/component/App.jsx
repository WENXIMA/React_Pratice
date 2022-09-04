import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2>{props.name1}</h2>
          <img src={props.img1} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.phone1}</p>
          <p>{props.email1}</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2>{props.name2}</h2>
          <img src={props.img2} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.phone2}</p>
          <p>{props.email2}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
