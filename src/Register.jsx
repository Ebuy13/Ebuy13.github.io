import React,{useState} from "react";
export const Register = (props) => {
    const [Name , setName] =useState('');
    
    const [email , setEmail] =useState('');
    const [password , setPassword] =useState('');
    const [Cpassword , setCPassword] =useState('');
    const [Phone, setPhone]=useState('');
    const [Address, setAddress]=useState('');
   
    

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className  = "auth-form-container">
             <label1 for="Ebuy">Ebuy🛍️🛒</label1>
        <form className="register-form"onSubmit={handleSubmit}>
        <label htmlfor="Name">Name</label>
          <input value={Name}onChange={(e) => setName(e.target.value)} type ="Name" placeholder="Your Name" id="Name" name="Name"  />
          <label htmlfor="Phone">Phone</label>
          <input value={Phone}onChange={(e) => setPhone(e.target.value)} type ="number" placeholder="Your Contact number" id="Phone" name="Phone"  />
          <label htmlfor="Address">Address</label>
          <input value={Address}onChange={(e) => setAddress(e.target.value)} type ="String" placeholder="Your Residential Adress" id="Address" name="Address"  />
         
          <label htmlfor="email">Email</label>
          <input value={email}onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="your emailid" id="email" name="email"  />
          <label htmlfor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type ="password" placeholder="*********" id="password" name="password"  />
          <label htmlfor="Cpassword">Confirm Password</label>
          <input value={Cpassword} onChange={(e) => setCPassword(e.target.value)} type ="password" placeholder="*********" id="password" name="password"  />
          
          <button type = "submit">Sign Up</button>
          </form> 
          <button className ="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account sign in</button>
         
          
      </div>
    )
}