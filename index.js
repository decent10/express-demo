
const express = require('express');
const   bodyParser = require('body-parser');
const app = express();

const users = [
    {id:1, name: 'jhone', age: 33},
{
    id: 2,
    name: 'doe',
    age: 22
},
{
    id: 3,
    name: 'Rashid',
    age: 33
},
{
    id: 4,
    name: 'Ahmad',
    age: 33
}]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/',(req, res)=>{

    res.send('<h1>Hello first express app</h1>')
})

app.get('/about', (req, res) => {

    res.send('<h1>about page</h1>');
})

app.get('/contact', (req, res) => {

    res.send('<h1>contact us</h1>')
})
app.get('/api/users',(req,res)=>{
    console.log(req.query);
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find(user=>{
       return user.id == req.params.id
    });
    if (!user) res.status(404).send(`user not found with the provied id ${req.params.id}`)
    res.json(user);
    
})
app.post('/api/users',(req,res)=>{
 const {name, age} = req.body;
const user = {
    name:name,
    age:parseInt(age),
    id:users.length + 1
}
users.push(user);
 res.send(user);
})
app.listen(8000, ()=>{
    console.log('server is listing on port 8000');
})