let app = require("../src/app")
let supertest = require("supertest")
let request = supertest(app)

describe("Teste da porta", () => {
    test("A aplicação deve responder na porta 31311", () => {
        return request.get("/").then(res => expect(res.statusCode).toEqual(200))
        //Nesse caso sempre deve ter um return em uma promise se não, não dá certo
    })
})

describe("Teste das cores", () => {
    test("Deve retornar vermelho como a cor favorita de lucas", () => {
        return request.get("/cor/lucas").then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.cor).toEqual("vermelha")
            expect(res.body.color).toEqual("red")
        })
    })
})
