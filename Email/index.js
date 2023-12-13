const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "lucasbueno722g@gmail.com",
        pass: "lb1008@#"
    }
})

transporter.sendMail({
    from: "Lucas Bueno <lucasbueno722g@gmail.com>",
    to: "buenolucas314@gmail.com",
    subject: "Oi, sou lucas",
    text: "simmmmmmmmmmm",
    html: "Ola, sou lucassssssssssssss"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})