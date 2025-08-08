import mongoose from "mongoose"; 

const messageSchema = new mongoose.Schema({
  author:String,
  content: {
    type: String,
    minLength: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'message'
});

const Message = mongoose.model("Message", messageSchema);
export default Message;