const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSubscriber,
  sendLetter,
  deleteSubscriber,
  updateSubscriberById,
  updateSubscriberByEmail,
  getSubscribers,
  getSubscriber
} = require("../controllers/subscribers");

// @route   POST /subscribers
// @desc    Create new subscriber
// @access  Private
router.post("/", addSubscriber);

// @route   POST /subscribers/send
// @desc    Send letters to all subscribers
// @access  Private
router.post(
  "/send",
  passport.authenticate("jwt", { session: false }),
  sendLetter
);

// @route   DELETE /subscribers/:id
// @desc    Delete subscriber
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteSubscriber
);

// @route   PUT /subscribers/:id
// @desc    Update existing subscriber by object id
// @access  Private
router.put("/:id", updateSubscriberById);

// @route   PUT /subscribers/:email
// @desc    Update existing subscriber by email
// @access  Private
router.put("/email/:email", updateSubscriberByEmail);

// @route   GET /subscribers
// @desc    GET existing subscribers
// @access  Public
router.get("/", getSubscribers);

// @route   GET /subscribers/:id
// @desc    GET existing subscribers
// @access  Public
router.get("/:email", getSubscriber);

module.exports = router;
