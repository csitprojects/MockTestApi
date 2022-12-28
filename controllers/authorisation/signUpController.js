const passport = require('passport');
const User = require('../../models/User');


 export function SignUp(req, res){
  // Create a new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  // Save the user to the database
  newUser.save()
    .then((user) => {
      // Log the user in and return a JWT token
      passport.authenticate('local', (err, user, info) => {
        if (err) { return res.status(500).send(err.message); }
        if (!user) { return res.status(401).send(info.message); }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
      })(req, res);
    })
    .catch((err) => {
      // If there is an error, return a 500 status code with the error message
      res.status(500).send(err.message);
    });
};

