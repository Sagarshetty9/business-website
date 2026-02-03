import dotenv from 'dotenv'; 
import express from 'express';
import router from './router/contactRouter.js';
import connectDb from './config/db.js';
import Cors from 'cors';

dotenv.config();
await connectDb();


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(Cors({ origin: 'https://business-website-frontend-green.vercel.app/' }));

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/contact-us', router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;

