
const twilio = require('twilio')
require('dotenv').config(); 

const accountSid = 'AC525a78ea005bab7908471694a8d86fbe';
// Your Account SID from www.twilio.com/console
const authToken = 'be006e8964fdaf923c2cb95b73e26c43'; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken)

async function sendSms() {
  try {
    const message = await client.messages.create({
      body: 'hello. this is just a test',
      to: '+17788720202',  // Text this number
      from: '+16042105544' // From a valid Twilio number
    })
    console.log((message)); 
    return message; 
  } catch(err) {
    console.log(err)
  }
}

const MessagingResponse = require('twilio').twiml.MessagingResponse;


const response = new MessagingResponse();
const message = response.message();
message.body('Hello World!');
response.redirect('https://demo.twilio.com/welcome/sms/');

console.log(response.toString());


sendSms()