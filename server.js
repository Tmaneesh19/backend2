const exp = require('express')
const  app = exp(); 
//   int er  nn al ly ( es tab li she s ) the hdasttp server............as kkndk asndkn... .
//s   ccs d  jn aa a sd af aaa a a a 
  
app.use(exp.json()); 
  //  
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

app.post('/new-user',(req,res)=>{
    let newUser = req.body;
    usersList.push(newUser);
    res.send({message:"new user created"});

})

app.get('/users',(req,res)=>{
    // let id = Number(req.params.id);
    // let a = usersList.find((c)=>c.id===id);
    res.send({payload:usersList});
});
// attach port number.
app.listen(4000,()=>console.log('server started at 4000 port number'))
