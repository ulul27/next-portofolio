import axios from 'axios'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPwmFeU3wQPD0WD79IMCF0tVM6CfaFJJ81ksKK-IoABSXP_rUczSgaMmHLrCAAI84r/exec'

export const googleSheets = async () => {
  try {
   if(!SCRIPT_URL) {
    throw new Error('SCRIPT_URL is not set');
   }

  //  
  const response = await axios.get(SCRIPT_URL);
  console.log(response);
  return response.data;
  } catch (error) {
    console.error(error);
  }
};