import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import KycForm from "../KycForm";
import ApiService from "../../../services/ApiService";
import loanType from "./utils";
import "./index.css";

const generateLoanTemplate = () => {
  return loanType.map(loan => {
    return (
      <div className="card">
        <img src={loan.img} alt="car" height="150" width="200" />
        <div>{loan.label}</div>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </div>
    );
  });
};

const makeKycTemplate = status => {
  if (status) {
    return (
      <div className="kycStatus">
        <div>KYC Verified</div>
        <InsertEmoticonIcon />
        <div className="cardContainer">{generateLoanTemplate()}</div>
      </div>
    );
  }

  return (
    <div className="kycStatus">
      <div>KYC Pending</div>
      <SentimentVeryDissatisfiedIcon />
      <div>
        <KycForm />
      </div>
    </div>
  );
};

const kycStatus = setKycStatus => {
  ApiService.kycStatus(123)
    .then(res => {
      return setKycStatus(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const Landing = () => {
  const [kycState, setKycState] = useState(null);
  return (
    <div>
      {kycStatus(setKycState)}
      {makeKycTemplate(kycState)}
      <div>
        <Button variant="contained" color="primary">
          Know Your Credit Score
        </Button>
      </div>
    </div>
  );
};

export default Landing;
