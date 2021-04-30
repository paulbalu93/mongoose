import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	age: { type: Number, required: true, min: 70, max: 70, default: 18 },
	professions: [String],
});

export default model('User', userSchema);
