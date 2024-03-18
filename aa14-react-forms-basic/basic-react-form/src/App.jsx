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
      console.log(e.target.value)
      if(key === 'signup'){
        setListing(old =>({...old, [key]: !old.signup}))
      }else{
        setListing(old => ({...old, [key]: e.target.value}));
      }

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
            <select onChange={handlechange('phoneType')}>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Mobile">Mobile</option>
            </select>
        </label>

        <br></br>
        <label name="staff">Staff:
        <div onChange = {handlechange('staff')}>
            <input name="staff" value= "instructor" type="radio"/><label>Instructor</label>
            <input name="staff" value="student" type="radio"/><label>Student</label>
        </div>
        </label>

        <br></br>
        <label>Bio
          <textarea value={listing.bio} onChange={handlechange('bio')}></textarea>
        </label>

        <br></br>
        <label>Sign up for email notifications
          <input type="checkbox" checked={listing.signup} onChange={handlechange('signup')}/>
        </label>

        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
