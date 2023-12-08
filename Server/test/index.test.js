const { before } = require('node:test');
const app = require('../src/app');
const session = require('supertest');
const agent = session(app);



describe('Test de RUTAS', ()=>{



describe('GET /rickandmorty/character/:id', ()=> {
    it('Responde con status:200', async ()=>{
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
        const response = await agent.get('/rickandmorty/character/1')
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('species')
        expect(response.body).toHaveProperty('gender')
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('origin')
        expect(response.body).toHaveProperty('image')
    })
    it('Si hay un error responde con status:500', async()=>{
        const response = await agent.get('/rickandmorty/character/idFalso').expect(500)
    })
})

describe("GET /rickandmorty/login", ()=>{
    it('Retorna objeto {access: true} con credenciales correctas', async()=>{
        const response = await agent.get('/rickandmorty/login?email=bito.bc@gmail.com&password=bito22');
        expect(response.body).toEqual({access: true})
    })
    it('Retorna objeto {access: false} con credenciales incorrectas', async()=>{
        const response = await agent.get('/rickandmorty/login?email=bito.bc@gmail.com&password=bito22');
        expect(response.body).toEqual({access: false})
    })
})

describe("POST /rickandmorty/fav", () => {
    //* { 1 } => [ { 1 } ]
    //* { 2 } => [ { 1 }, { 2 } ]
    it("Devuelve array con personaje enviado por body", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(character1);
      expect(response.body).toEqual([character1]);
    });
    it("Devuelve array con personaje enviado por body", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(character2);
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Devuelve array con personajes si no elimina ningún personaje", async() => {
      const response = await agent.delete("/rickandmorty/fav/15");
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
    it("Devuelve array sin el personaje del id enviado", async() => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).not.toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });

  })


})