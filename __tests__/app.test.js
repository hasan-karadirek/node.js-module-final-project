const app=require("../app.js")
const supertest=require("supertest")



describe("Simple Movie API tests of all routes",()=>{
    it("GET '/' route, getAllMovies ",async()=>{
        await supertest(app).get("/")
        .expect(200)
        .then((res)=>{
            expect(res.body.success).toBe(true)
            expect(res.body.movies.length).toBe(2)
            
        })
    })
    it("POST '/movie' route, addMovie success",async()=>{
        const data={title:"film1",director:"film1 director",realese_date:"2023-01-01"}
        await supertest(app).post("/movie")
        .send(data)
        .expect(200)
        .then((res)=>{
            expect(res.body.success).toBe(true)
            expect(res.body.movie.title).toBe(data.title)
            expect(res.body.movie.director).toBe(data.director)
            expect(res.body.movie.realese_date).toBe(data.realese_date)
            expect(!res.body.movie.id).toBe(false)
        })

    })
    it("POST '/movie' route,addMovie fail",async()=>{
        const data={id:25,title:"film1",director:"film1 director",realese_date:"2023-01-01"}
        await supertest(app).post("/movie")
        .send(data)
        .expect(400)
    })
    it("GET '/movie/:id route, get single movie by id success",async()=>{
        const data={
            id:"1",
            title:"Inception",
            director:"Christopher Nolan",
            realese_date:"2010-07-16"
        }
        await supertest(app).get("/movie/1")
        .expect(200)
        .then((res)=>{
            expect(res.body.success).toBe(true)
            expect(res.body.movie).toStrictEqual(data)
            expect(res.body.movie.id).toEqual("1")
        })

    })
    it("GET '/movie/:id route, get single movie by id fail",async()=>{
        await supertest(app).get("/movie/12020202")
        .expect(400)
        

    })
    it("DELETE '/movie/:id' route, delete single movie success",async()=>{
        const data={
            id:"1",
            title:"Inception",
            director:"Christopher Nolan",
            realese_date:"2010-07-16"
        }
        await supertest(app).delete("/movie/1")
        .expect(200)
        .then((res)=>{
            expect(res.body.success).toBe(true)
            expect(res.body.movie).toStrictEqual(data)
            expect(res.body.movie.id).toEqual("1")
        })
    })
    it("DELETE '/movie/:id' route, delete single movie fail",async()=>{
        await supertest(app).delete("/movie/12312")
        .expect(400)
        
    })

})