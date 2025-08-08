import mongoose from "mongoose";
import { v4 as uuid } from 'uuid';

const defaultChannelName = process.env.CHANNEL_NAME;
const defaultChannelDescription = process.env.CHANNEL_DESC;

const channelSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: defaultChannelName
  },
  description: {
    type: String,
    default: defaultChannelDescription,
    maxLength: 255
  },
  avatarURL: {
    type: String,
    default: 'null'
  },
  streamKey: {
    type: String,
    default: () => uuid()
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    default: []
  }]
}, {
  timestamps: true,
  collection: 'channel'
});

const Channel = mongoose.model("Channel", channelSchema);
export default Channel;