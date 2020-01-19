const scripMasterQuery = {
  postKycRequest: ({
    userId,
    PAN_number,
    Name_On_PAN,
    DOB,
    Add_Proof,
    ProofId,
    Add_Front,
    Add_Back,
    PAN_Image,
    Status
  }) => {
    return `insert into [dbo].[KYCDetail](userId,
      PAN_number,
      Name_On_PAN,
      DOB,
      Add_Proof,
      ProofId,
      Status,
      Add_Front,
      Add_Back,
      PAN_Image
      ) values("${userId}", ${PAN_number}, "${Name_On_PAN}", convert(date,"${DOB}"),
      ${Add_Proof}, ${ProofId}, ${Status}, ${Add_Front}, ${Add_Back}, ${PAN_Image})`;
  }
};

module.exports = scripMasterQuery;
