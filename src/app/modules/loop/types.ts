enum LoopTypes {
  SET_LOOP = 'SET_LOOP',
  SET_LOOP_SUCCESS = 'SET_LOOP_SUCCESS',
  SET_LOOP_FAILURE = 'SET_LOOP_FAILURE',

  GET_LOOP_OUT_TERMS = 'GET_LOOP_OUT_TERMS',
  GET_LOOP_OUT_TERMS_SUCCESS = 'GET_LOOP_OUT_TERMS_SUCCESS',
  GET_LOOP_OUT_TERMS_FAILURE = 'GET_LOOP_OUT_TERMS_FAILURE',

  GET_LOOP_OUT_QUOTE = 'GET_LOOP_OUT_QUOTE',
  GET_LOOP_OUT_QUOTE_SUCCESS = 'GET_LOOP_OUT_QUOTE_SUCCESS',
  GET_LOOP_OUT_QUOTE_FAILURE = 'GET_LOOP_OUT_QUOTE_FAILURE',

  GET_LOOP_OUT = 'GET_LOOP_OUT',
  GET_LOOP_OUT_SUCCESS = 'GET_LOOP_OUT_SUCCESS',
  GET_LOOP_OUT_FAILURE = 'GET_LOOP_OUT_FAILURE',
}

export interface LoopOutTermsPayload {
  swap_payment_dest: string;
  swap_fee_base: string;
  swap_fee_rate: string;
  prepay_amt: string;
  min_swap_amount: string;
  max_swap_amount: string;
  cltv_delta: 0;
}

export interface LoopOutQuotePayload {
  swap_fee: string;
  prepay_amt: string;
  miner_fee: string;
}

export interface LoopOutPayload {
  id: string;
  htlc_address: string;
}

export default LoopTypes;