import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (value) => {
        return validator.isLength(value, { min: 2, max: 100 });
      },
      message: 'Name must be between 2 and 100 characters.',
    },
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: 'Invalid email address.',
    },
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (value) => {
        return validator.isMobilePhone(value, 'en-US');
      },
      message: 'Invalid phone number.',
    },
  },
  message: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        return validator.isLength(value, { min: 10, max: 1000 });
      },
      message: 'Message must be between 10 and 1000 characters.',
    },
    set: (value) => {
      return sanitizeHtml(value); // Sanitize HTML tags from the message field
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Message = models.Message || model('Message', messageSchema);

export default Message;
