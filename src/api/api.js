import axios from 'axios';

axios.defaults.baseURL = 'https://client.demo.crassu.la';
axios.defaults.headers.common['Authorization'] = '8122d42815d3c04b66531e59fd9ce98b';

export const sepaPayment = (fromAccount, currency, amount, recipientName, recipientIban, details, beneficiaryType, recipientSwift) => {
   return axios.post('/api/clients/074e7842-be8a-4ee3-9659-6b0122fb1382/transfer/sepa', {
    fromAccount,
    amount,
    currency,
    recipientName,
    recipientIban,
    details,
    beneficiaryType,
    recipientSwift
  }) 
}