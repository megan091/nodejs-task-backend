const Story = require("../models/Story");

const create = async (StoryData) => {
  const { title, link } = StoryData;
  const story = await new Story({
    title,
    link,
  });
  await story.save((err, data) => {
    if (err) throw err;
    return story;
  });
};

const getMultiple = async (key) => {
  let stories = [];
  if (key) {
    stories = await Story.find({
      $or: [{ title: { $regex: ".*" + key + ".*" } }],
    });
  } else {
    stories = await Story.find().sort({ createdAt: -1 }).limit(6);
  }

  return stories;
};

module.exports = {
  create,
  getMultiple,
};
