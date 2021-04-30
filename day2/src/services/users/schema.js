import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	age: Number,
	professions: [String],
});

export default model('User', userSchema);
