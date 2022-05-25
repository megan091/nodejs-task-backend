const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: String,
  link: String,
});

StorySchema.set("timestamps", true);

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
