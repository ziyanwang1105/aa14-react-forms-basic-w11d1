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

  const validate = () => {
    const errors = [];
    if (listing.name.length === 0) errors.push("Name can't be empty");
    if (listing.email.length === 0) errors.push("Email can't be empty");
    if (listing.email && listing.email 
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null ) errors.push("Email isn't properly formatted");
    if (listing.phoneNumber && listing.phoneNumber.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    ) === null) errors.push("Phone number isn't properly formatted");
    if (listing.phoneNumber && !listing.phoneType) errors.push("Need to select phone type");
    if (listing.bio && listing.bio.length > 280) errors.push("Bio is too long; max 280 characters");
    return errors;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();

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
      {errors.length > 0 && (
                errors.map((err, idx) => <p key={idx}>{err}</p>)
            )}
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
              <option value="">Select type</option>
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
