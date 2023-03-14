const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  createCustomer,
  loginCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
  editCustomerInfo,
  updatePassword
} = require("../controllers/customers");

// @route   POST /customers
// @desc    Register customer
// @access  Public
router.post("/", createCustomer);

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
router.post("/login", loginCustomer);

// @route   GET /
// @desc    Return current customer
// @access  Private
router.get(
  "/customer",
  passport.authenticate("jwt", { session: false }),
  getCustomer
);

// @route   GET /
// @desc    Return all customers
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getCustomers
);

// @route   DELETE /customer
// @desc    Delete specific customer
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteCustomer
);

// @route   PUT /customers
// @desc    Return current customer
// @access  Private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  editCustomerInfo
);

// @route   POST /customers/profile/update-password
// @desc    Return current customer and success or error message
// @access  Private
router.put(
  "/password",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

module.exports = router;
