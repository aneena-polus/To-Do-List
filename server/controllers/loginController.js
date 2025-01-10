import User from "../model/userSchema.js";
import Country from "../model/countrySchema.js";
import State from "../model/stateSchema.js";

export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Invalid username or password" });
        }
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ error: "Error logging in" });
    }
}

export const userSignup = async (req, res) => {
    try {
        const { username, password, firstName, lastName, phoneNumber, email, country, state } = req.body;
        const user = new User({ username, password, firstName, lastName, phoneNumber, email, country, state });
        if (await User.findOne({username})) {
            res.status(409).json({ message: "Username already exists" });
        } 
        else {
            await user.save();
            res.status(200).json(user);
        }
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ error: "Error logging in" });
    }
}

export const getCountryList = async (req, res) => {
    try {
        const country = await Country.find();
        res.json(country);
    } catch (err) {
        console.error("Error fetching countries:", err);
        res.status(500).json({ error: "Failed to fetch countries" });
    }
}

export const getStateList = async (req, res) => {
    try {
        const { countryCode } = req.params;
        const state = await State.find({ countryCode: countryCode });
        res.json(state);
    } catch (err) {
        console.error("Error fetching states:", err);
        res.status(500).json({ error: "Failed to fetch states" });
    }
}