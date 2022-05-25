var express = require("express");
var router = express.Router();
const StoryController = require("../controllers/StoryController");

router.post("/createTimeStories", StoryController.createStory);
router.get("/getTimeStories", StoryController.stories);

module.exports = router;
