const exp = require('express')
const  app = exp(); 
// i  n   t   e        r   nn  al   l y (    e  st   a b l i s h e s ) th  e  hb d  a st  p se  rv er.. ...... ....as k k n  d   as n dk n... .
//  s     c    c    n  a  a  s   d  a f a  a   a a    
  
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
