// const express = require('express')
// const app = express()
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// app.post('/apis/mail', (req,res) =>{
//     const body = JSON.parse(req.body);

//     const message = `
//         Name : ${body.name}\r\n
//         Email : ${body.email}\r\n
//         Message : ${body.message}
//     `
//     const data = {
//         to: "mr.kumarvipin94@gmail.com",
//         from: 'sendGrid@gmail.com',
//         subject: 'My Portfolio contacted me through SendGrid',
//         text: message,
//         html: message.replace(/\r\n/g,'<br/>'),
//       };
      
//       sgMail.send(data);
// })

// app.listen(4000, () => {
//     console.log(`Example app listening at http://localhost:4000`)
// })
