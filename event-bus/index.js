import Express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';

const app  = Express();
const port = 4005;

const events = [];

app.use(bodyParser.json());
app.post('/events', (req,res)=>{
    const event = req.body;
    events.push(event);
    axios.post('http://posts-clusterip-srv:4000/events', event);
    axios.post('http://comments-srv:4001/events', event);
    axios.post('http://query-srv:4002/events', event);
    axios.post('http://moderation-srv:4003/events', event);

    res.send({ status:'OK'});

});
app.get('/events',(req,res)=>{
    res.send(events);
});


app.listen(port, ()=> console.log('Listening to port '+port));