

exports.Logout = (req, res) => {
  // Clear the user from the session
  req.logout();

  // Redirect to the login page
  res.redirect('/login');
};

module.exports = router;