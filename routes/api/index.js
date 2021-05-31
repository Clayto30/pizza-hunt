const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// dd prefix of `/pizzas` to routs created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;