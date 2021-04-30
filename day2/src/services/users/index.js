import express from 'express';

const router = express.Router();
import UserModal from './schema.js';

router.get('/', async (req, res, next) => {
	try {
		const users = await UserModal.find();
		res.send(users);
	} catch (error) {
		next(error);
	}
});
router.get('/:id', async (req, res, next) => {
	try {
		const user = await UserModal.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send('user not found');
		}
	} catch (error) {
		next(error);
	}
});
router.put('/:id', async (req, res, next) => {
	try {
		const modifiedUsers = await UserModal.findByIdAndUpdate(req.params.id, req.body, {
			runValidators: true,
			new: true,
		});
		res.send(modifiedUsers);
	} catch (error) {
		next(error);
	}
});
router.post('/', async (req, res, next) => {
	try {
		const newUser = new UserModal(req.body);
		const { _id } = await newUser.save();
		res.status(201).send(_id);
	} catch (error) {
		next(error);
		console.log(error);
	}
});
router.delete('/:id', async (req, res) => {
	try {
	} catch (error) {
		next(error);
	}
});

export default router;
