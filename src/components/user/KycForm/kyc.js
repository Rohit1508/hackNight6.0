import React, {useState} from 'react'
import './index.css'
import Button from '@material-ui/core/Button';
import ApiService from '../../../services/ApiService';



const KycForm = () => {
  const handleSubmit =() => {
    ApiService.sendKycRequest({
      pan,
      panName,
      dob,
      addressProof,
      proofId
    });
  }

  const handleChange =(field) => {
    debugger
    switch (field.name) {
      case 'pan' :
      setPan(field.value)
      break;
      case 'panName':
      setPanName(field.value);
      break;
      case 'dob':
      setDob(field.value)
      break;
      case 'address':
      setAddressProof(field.value)
      break;
      case 'proofId' :
      setProofId(field.value);
      break;
      default:

    }
  }
  const [pan, setPan] = useState('');
  const [panName, setPanName] = useState('');
  const [dob, setDob] = useState('');
  const [addressProof, setAddressProof] = useState('Aadhaar');
  const [proofId, setProofId] = useState('');

  return (
    <div>
       <form onSubmit={() => handleSubmit()} className="kycContainer">
        <label>
          <div>PAN NUMBER:</div>
          <input type="text" value={pan} name='pan' onChange={(e) => handleChange(e.target)} />
        </label>
        <label>
         <div> Name on PAN:</div>
          <input type="text" value={panName} name='panName' onChange={(e) => handleChange(e.target)} />
        </label>
        <label>
         <div> DOB:</div>
          <input type="date" value={dob} name='dob' onChange={(e) => handleChange(e.target)} />
        </label>
        <label>
          <div>Address Proof:</div>
          <select name='address' onChange={(e) => handleChange(e.target)} defaultValue={addressProof}>
            <option value="Aadhaar">Aadhar Card</option>
            <option value="Driving">Driving</option>
            <option value="passport">passport</option>
            <option value="voter id">voter id</option>
          </select>
        </label>
        <label>
         <div> Proof id:</div>
          <input type="text" value={proofId} name='proofId' onChange={(e) => handleChange(e.target)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default KycForm;