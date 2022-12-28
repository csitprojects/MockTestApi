
import jwt from "jsonwebtoken";
import User from "../../models/User";
import dotenv from "dotenv";
dotenv.config();

// @route   POST api/auth/login
// @desc    Login user and return JWT token
// @access  Public

export function Login(req, res){
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email })
    .then((user) => {
      // If the user was not found, return a 401 status code with a message
      if (!user) {
        return res.status(401).json({ message: 'Email or password is incorrect' });
      }

      // Check if the password is correct
      user.comparePassword(password, (err, isMatch) => {
        if (err) throw err;

        // If the password is incorrect, return a 401 status code with a message
        if (!isMatch) {
          return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Return the token in the response
        res.json({ token });
      });
    })
    .catch((err) => {
      // If there is an error, return a 500 status code with the error message
      res.status(500).send(err.message);
    });
};
