import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../components/App/App';

const app = express();
app.use(express.json());
const PORT = 5000;
app.get('/',(req,res,next) => {
    res.status(200).json({
        'message': 'Running Node with Express and Typescript'
    });
});

app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}.`
    )
});