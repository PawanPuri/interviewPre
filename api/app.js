import express from 'express';
import cors from 'cors';
import mongoose from './db.js';  // Importing mongoose, which was exported from db.js

const app = express();
const port = process.env.PORT || 8800;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

// Importing routes
import postRoute from './routes/postRoute.js';
import commentRoute from './routes/commentRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import userRoute from './routes/userRoute.js';

app.use('/post', postRoute);
app.use('/comment', commentRoute);
app.use('/category', categoryRoute);
app.use('/user', userRoute);

// const __dirname = path.resolve();
// app.use('/', express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
// });

app.listen(port, () => 
    console.log(`Node.js server started at http://localhost:${port}`)
);
