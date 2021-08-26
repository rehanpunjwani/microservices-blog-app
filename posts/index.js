import Express from "express";
import { randomBytes } from "crypto";
import bodyParser from 'body-parser';
import cors from "cors";
import axios from 'axios';

const app = Express();
const port = 4000;
const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    await axios.post('http://event-bus-srv:4005/events',{
        type:'PostCreated',
        data: { id, title }
    });
    res.status(201).send(posts[id]);

});
app.post('/events', (req,res)=>{
    console.log("Recieved Events: ", req.body.type);

    res.send({});
})
app.listen(port, () => {
    console.log('V1000')
    console.log("Listening at port " + port)

});