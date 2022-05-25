const db = require("../config/database");
const StoryService = require("../services/Story.service");

const createStory = async (req, res) => {
  const story = await StoryService.create(req.body);

  return res.status(200).json(story);
};

const stories = async (req, res) => {
  const { key } = req.query;
  const stories = await StoryService.getMultiple(key);

  return res.status(200).json(stories);
};

module.exports = {
  createStory,
  stories,
};
