import { useState } from "react";

function App() {
  
  const [listing, setListing] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phoneType: '',
    staff: '',
    bio: '',
    signup: false
  })
  
  const handlechange = key => e => {

      setListing(old => ({...old, [key]: e.target.value}));
      
  }

  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const errors = [];

    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      setListing({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        signup: false
      });
      console.log(listing);
    }

  }

  return (
    <div>
      <h1> Hello from App </h1>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
            <input placeholder="Name" value={listing.name} onChange={handlechange('name')} />
        </label>

        <br></br>
        <label>Email:
            <input placeholder="Email" value={listing.email} onChange={handlechange('email')}/>
        </label>
        
        <br></br>
        <label>Phone number:
            <input placeholder="Phone number" value={listing.phoneNumber} onChange={handlechange('phoneNumber')}/>
        </label>
        
        <br></br>
        <label>Phone type:
            <select>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Mobile">Mobile</option>
            </select>
        </label>
        
        <br></br>
        <label name="staff">Staff:
            <input name="staff" type="radio"/><label>Instructor</label>
            <input name="staff" type="radio"/><label>Student</label>
        </label>
        
        <br></br>
        <label>Bio
          <textarea value={listing.bio} onChange={handlechange('bio')}></textarea>
        </label>
        
        <br></br>
        <label>Sign up for email notifications
          <input type="checkbox" />
        </label>
        
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
