
const nodemailer = require('nodemailer');

const html = `
    <h1>Hello There</h1>
    <a href="http://google.com" target="_blank>click here</a>`

async function main() {

    const transporter = nodemailer.createTransport({
        host: 'danielphelipe12@hotmail.com',
        port: 465,
        secure: true,
        auth: {
            user:   'danielphelipe12@hotmail.com',
            pass: 't9m5q4t9'
        }
    })
    const info = await transporter.sendMail({
        from: 'Teste_de_envio <danielphelipe12@hotmail.com>',
        to: 'danielphzero@gmail.com',
        subject: 'Teste teste e mais testes',
        html: html,
    })

    console.log(`message sent: ${info.messageId}`);

}

main()
.catch(e => console.log(e));