import Express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = Express();
const port = 4003;
app.use(bodyParser.json());

app.post('/events',async (req,res)=>{
    const {type,data} =req.body;

    if(type === 'CommentCreated'){
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        data.status = status;
        await axios.post('http://event-bus-srv:4005/events',{
            type:'CommentModerated',
            data
        });
    }
    res.send({});
})
app.listen(port, ()=> console.log('Listening to port '+port));

