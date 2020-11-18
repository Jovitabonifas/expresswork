const express = require ("express");
const users = require ("./users")
const movie = require ("./movie")

   
const app = express();

app.use(express.json()) //for req.body for postman


app.get("/", function(req,res){
    res.send("Welcome:)")
})

app.get("/users", function(req,res){
    
    res.send(users)
})

app.get("/movies", function(req,res){
    
    
    res.send(movie)
})

app.post("/movies", function(req,res){

    if(!req.body.moviename)
    {
        res.status(400)
       return res.send("error : movie name is req")
    }

   const name = {
       id : movie.length+1,
       moviename : req.body.moviename
   }

   movie.push(name)
    res.send(name)
})


app.put("/movies/:id", function(req,res){

    let id= req.params.id
    let moviename =req.body.moviename
    
   let index= movie.findIndex((movie)=>{

        return(movie.id== Number.parseInt(id))
    } )

    console.log(id,req.body,index)
    if(index>=0){
        let mov =movie[index]
     mov.moviename= moviename
     res.send(mov)

    }else {
        res.status(404)
        res.end()
        
    }
    
 
})


app.delete("/movies/:id", function(req,res){

let id=req.params.id
let index= movie.findIndex((movie)=>{

    return(movie.id== Number.parseInt(id))
} )

if(index>=0){
    let mov=movie[index]
    movie.splice(index,1)
    res.send(mov)

}else {
    res.status(404)
    res.end()
    
}

})





