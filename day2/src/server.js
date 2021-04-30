import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './services/users/index.js';
import listEndPoints from 'express-list-endpoints';
const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
	server.listen(port, () => {
		console.log('sever is running on port', port);
	})
);
console.log(listEndPoints);
