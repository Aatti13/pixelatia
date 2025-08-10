import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  username: {
    type: String,
    required: true,
    minLength: 3
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  bio: {
    type: String,
    maxLength: 255,
    default: "Average Pixelatia Enjoyer"
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'mind your business']
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel'
  },
  followedChannels: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel'
    }]
  }
}, {
  timestamps: true,
  collection: 'user'
});

const User = mongoose.model("User", userSchema);
export default User;