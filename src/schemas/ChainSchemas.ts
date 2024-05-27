// Read
// ----- GET NFT -----
export interface IGetSmartContractRequestBody {
  // wallet_address: string;
}

// ----- GET USER TOKENS -----
export interface ITokensRequestParams {
  wallet_address: string;
}

// ----- GET TOKENS LIST -----
export interface ITokenListRequestParams {
  // 
}

// ----- TRANSFER TOKEN -----
export interface ITransferTokenRequestBody {
  to: string,
  value: string
}

// ----- SUBMIT EXTRINSIC -----
export interface ISubmitExtrinsicRequestBody {
  extrinsic: string;
}

// ----- AIRDROP XON -----
export interface IAirdropNativeRequestBody {
  account: string[];
}

// ----- SUCCESS & ERROR RESPONSE -----
export interface IResponseSuccessful {
  status: number;
  message: string;
}
export interface IResponseError {
  status: number;
  message: string;
}
