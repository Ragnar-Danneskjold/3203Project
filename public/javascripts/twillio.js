const accountSid = AC0eb6c1bc6b7d6819ac751cd7ba49fa3e;
const authToken = f4e9df10beab95b1d212a2ecfd0ebcad;
const client = require('twilio')(accountSid, authToken);

function testsend(Number){
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19705288981',
     to: Number
   })
  .then(message => console.log(message.sid));
}