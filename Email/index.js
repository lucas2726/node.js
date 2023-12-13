const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
        user: "lucas@meuddsite.com",
        pass: "L234587@"
    }
})

transporter.sendMail({
    from: "Lucas Bueno <lucas@meuddsite.com>",
    to: "lucasbueno722g@gmail.com",
    subject: "Oi, sou lucas",
    text: "simmmmmmmmmmm",
    html: "Ola, sou lucassssssssssssss"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})