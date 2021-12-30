const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//Register
router.post('/register', async (req, res) => {
    try {
        if (req.body.email) {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.Password_Secret).toString(),

            });
            try {
                const saveUser = await newUser.save();
                console.log(saveUser);
                res.status(201).json(saveUser)
            } catch (error) {
                res.status(500).json(error)
            }
        }

    } catch (error) {
        console.log(error);
    }
});

//Login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json('Wrong credentials')

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.Password_Secret);
        const dbPassword = hashPassword.toString(CryptoJS.enc.Utf8);

        dbPassword !== req.body.password && res.status(401).json('Wrong credentials');

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_Key,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;