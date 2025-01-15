import User from "../model/userSchema.js";

export const authenticate = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    user ? next() : res.status(404).send('Incorrect username or password!');
};