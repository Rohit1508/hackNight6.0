import React, {useState} from 'react'
import './index.css'
import Button from '@material-ui/core/Button';



const handleChange =(field) => {
  switch (field.name) {
    case 'name' :
    setForm({...form, name:field.value})
  }
}


const handleSubmit =() => {

}

const KycForm = () => {
  const [form, setForm] = useState({name: '', pan: '', dob: '' , addressProof: '', proofId: ''});
  return (
    <div>
       <form onSubmit={handleSubmit} className="kycContainer">
        <label>
          <div>PAN NUMBER:</div>
          <input type="text" value={''} onChange={(e) => handleChange(e.target)} />
        </label>
        <label>
         <div> Name on PAN:</div>
          <input type="text" value={''} onChange={handleChange} />
        </label>
        <label>
         <div> DOB:</div>
          <input type="text" value={''} onChange={handleChange} />
        </label>
        <label>
          <div>Address Proof:</div>
          <select>
            <option value="volvo">Aadhar Card</option>
            <option value="saab">Driving</option>
            <option value="mercedes">passport</option>
            <option value="audi">voter id</option>
          </select>
        </label>
        <label>
         <div> Proof id:</div>
          <input type="text" value={''} onChange={handleChange} />
        </label>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default KycForm;