const exp = require('express')
const app = exp();
// this internally creates http server

let usersList = [
    {
    id:1,
    name:'maneesh'
    },
    {
    id:2,
    name:'kumar'
    }
]



app.get('/users/:id',(req,res)=>{
    let id = Number(req.params.id);
    let a = usersList.find((c)=>c.id===id);
    res.send({payload:a});
});
// attach port number.
app.listen(4000,()=>console.log('server started at 4000 port number'))
