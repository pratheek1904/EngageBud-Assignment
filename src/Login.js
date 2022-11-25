import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const[details,setdetails]=useState("")
  function emailValidation(str) { 
    let lenghtOfString = str.length;
    if ((lenghtOfString > 3) && (lenghtOfString < 26) && (/^([A-Za-z])/.test(str)) && (/[^_$]/.test(str.slice(-1))) && (/([A-Za-z_])/.test(str))){
      for (let i = 0; i < str.length; i++) {
    }
      return true;
    } else {
      return false;
    }
      
  }
   const submitHandler=(e)=>{
    e.preventDefault();
    var str=document.getElementById("myemail").value;
    let validemailid=emailValidation(str)
    if(validemailid){
      setdetails("Logged In Succesfully")
      setTimeout(()=>{
        navigate('/Wheel')
    },2000)
    }
    else{
      alert("Enter the Correct Input")
    }
  };
  return (
    <Wrapper className="section">
    <h1>Welcome to Engagebud</h1>
    <div className="login">
      {/* <label>Enter Email:</label> */}
      <input  id="myemail"className="emlpas" type="email" placeholder="Enter Email" />
      <br></br><br/>
      {/* <label>Enter Password:</label> */}
      <input className="emlpas" id="mypasswd" type="password" placeholder="Enter password" />
      <br/><br/>
      <button onClick={submitHandler}>Login</button>
      <h4>{details}</h4>
    </div>
    </Wrapper>
  );
};
const Wrapper=styled.section`

margin: 40px;
padding: 10px;
bottom: 10px;
text-align: center;
align-items: center;
height: 10;
width: 100%;
justify-content: space-around;
background-color: lightgrey;
position: absolute;
top:20px;
left:35%;
width:400px;
padding:40px;
box-sizing: border-box;
box-shadow: 0 15px 25px rgba(17, 1, 1, 0.6);
border-radius: 10px;
button{
    background-color:lightskyblue ;
    padding:5px;
    border-radius: 10px;
}
button:hover{
    background-color: lightgoldenrodyellow;
}
.topic{
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
}
.emlpas{
    background-color: lightcyan
}
`;
export default Login;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useHistory } from "react-router-dom";

// const Login = () => {
//   const [myvalue, setmyvalue] = useState("Login");
//   const [users, setUsers] = useState("false");
//   const [myemail, setmyemail] = useState("");
//   const [mypassword, setmypassword] = useState("");
//   const navigate = useNavigate();
//   function emailValidation(email) {
//     const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g;
//     return email.length >= 4 && email.length <= 25 && regex.test(email);
//   }
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const email = myemail;
//     let validEmail = emailValidation(email);
//     if (validEmail) {
//       setmyvalue("Proceeding");
//       setTimeout(() => {
//         navigate("/Wheel");
//       }, 2000);
//     } else {
//       alert("Enter the correct input");
//     }
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const response = await fetch(
//         "https://api.npoint.io/f89acb9ee900ca95b8dc"
//       );
//       setUsers(await response.json(myemail));
//     };
//     getUsers();
//   }, []);
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="email"
//           value={myemail}
//           onChange={(e) => setmyemail(e.target.value)}
//           placeholder="Enter Email"
//         />
//         <br />
//         <input
//           type="password"
//         value={mypassword}
//           onChange={(e) => setmypassword(e.target.value)}
//           placeholder="Enter Password"
//         />
//         <br />
//         <input type="submit" value={myvalue} />
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   var email;
//   const [content, setContent] = useState("Test Your Luck Now");
//   const navigate = useNavigate();
//   function validateEmail(email) {
//     const pattern =
//       /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
//     const result = pattern.test(email);
//     return result;
//   }
//   function clickHandler(e) {
//     e.preventDefault();
//     email = document.getElementById("email").value;
//     let emailValid = validateEmail(email);
//     if (emailValid === false) {
//       alert("Wrong Email");
//       navigate("/");
//     } else {
//       setContent("Loading...");
//       setTimeout(() => {
//         navigate("/Wheel");
//       }, 2000);
//     }
//   }
//   useEffect(() => {
//     fetch(
//       "https://restlessmonks.notion.site/Assignment-Frontend-Engineer-Engagebud-197d617a5f3c49aaaa4f11054b8dace3",
//       {
//         // Sending data to dummy API
//         method: "POST",
//         mode: "cors",
//         body: JSON.stringify(email), // body data type must match "Content-Type" header
//       }
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div className="d-flex m-2 p-2 flex-column" style={{ maxWidth: "300px" }}>
//       <div className="row flex-sm-column">
//         <form>
//           <div className="mb-3">
//             <label className="from-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="user@mail.com"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="from-label">Phone Number</label>
//             <input
//               type="phone number"
//               placeholder="+91-"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input type="checkbox" className="form-check-input m-1" required />
//             <label className="from-label">
//               I agree to the terms and conditions
//             </label>
//           </div>
//           <button
//             onClick={clickHandler}
//             type="submit"
//             className="btn btn-success"
//           >
//             {content}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
