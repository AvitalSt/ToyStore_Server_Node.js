const userModel= require("../Models/userModel")

async function login(req, res) {
    const { name, password } = req.body;

    try {
        let user = await userModel.findOne({ name: name, password: password });

        if (user) {
            const token = jwt.sign({ userId: user._id, password: user.password }, secret, {
                expiresIn: '1h'
            });
            res.status(200).json({ message: "Login successful", token: token, user: user });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}


async function createUser(req, res) {
    try {
        let newUser = req.body;
        let user = await userModel.create(newUser);
        res.json(user).status(200)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

module.exports = {login,createUser}
