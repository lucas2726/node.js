const database = require("./database")

/* INSERT
let dados = [
    {
        nome: "Call of duty",
        preco: 24
    },
    {
        nome: "GTA",
        preco: 55
    },
    {
        nome: "Wow",
        preco: 123
    }
]

database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* SELECT
database.select(["id", "preco"]).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* nested
database.insert({nome: "Mists of noyah", preco: 25}).into("games").then(data => {
    database.select(["id", "preco"]).table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    }).catch(err => {
        console.log(err)
    })
})
*/

/*
database.select(["id", "preco"])
    .whereRaw("nome = 'GTA' OR preco > 50")
    .table("games").then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        }).catch(err => {
            console.log(err)
        })
        */

/* Raw
database.raw("SELECt * FROM games").table("games").then(data => {
console.log(data)
}).catch(err => {
console.log(err)
}).catch(err => {
console.log(err)
})
*/

/* DELETE
database.where({id: 3}).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*UPDATE
database.where({id: 2}).update({preco: 135}).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

//1 p 1
//1 p m
//m p m

//Join

/*orderBy
database.select().table("games").orderBy("preco", "asc").then(data => { //asc, desc
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* Associated inserts
database.insert({nome: "Activision", game_id: 1}).table("estudios").then(data => { 
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/


/* innerjoin 1 p 1 
database.select(["games.*", "estudios.nome as estudios"]).table("games").innerJoin("estudios","estudios.game_id", "games.id").then(data => { 
    console.log(data)
}).catch(err => {
    console.log(err)
})
//as serve para mudar o nome da tabela
// o * serve para adicionar todos os campos
*/

/* innerjoin 1 p 1 com where
database.select(["games.*", "estudios.nome as estudio_nomde"]).table("games").innerJoin("estudios","estudios.game_id", "games.id").where("games.id",2).then(data => { 
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* 1 p m
database.select([
    "estudios.nome as estudio_nome",
    "games.nome as game_nome",
    "games.preco"
]).table("games_estudios")
    .innerJoin("games", "games.id", "games_estudios.game_id")
    .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
    .where("games.id", 5).then(data => {
        let game = {
            id: 5,
            nome: data[0].game_nome,
            preco: data[0].preco,
            estudios: []
        }

        data.forEach(estudio => {
            game.estudios.push({nome: estudio.estudio_nome })
        })
        console.log(game)
    }).catch(err => {
        console.log(err)
    })
    */

/*1 p m com foreach
database.select([
    "estudios.nome as estudio_nome",
    "games.nome as game_nome",
    "games.preco"
]).table("games_estudios")
    .innerJoin("games", "games.id", "games_estudios.game_id")
    .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
    .where("games.id", 5).then(data => {
        let game = {
            id: 5,
            nome: data[0].game_nome,
            preco: data[0].preco,
            estudios: []
        }

        data.forEach(estudio => {
            game.estudios.push({nome: estudio.estudio_nome })
        })
        console.log(game)
    }).catch(err => {
        console.log(err)
    })
*/

async function testeTransacao() {
    try {
        await database.transaction(async trans => {
            await database.insert({ nome: "Qualquer nome" }).table("estudios")
            await database.insert({ nome: "Pyxerelia" }).table("estudios")
            await database.insert({ nome: "Mojang" }).table("estudios")
            await database.insert({ nome: "Gearbox" }).table("estudios")
        })
    } catch (err) {
        console.log(err)
    }
}

testeTransacao()



