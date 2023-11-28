import mongoose, { Schema, model, models, Document } from 'mongoose';

const {ObjectId} = mongoose.Schema;

const clientSchema = new Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: true
        },
        last_name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        }, 
        notes: {
            type: String,
            trim: true,
        }
    },
    { timestamps: true }
);

const Client = models.Client || model('Client', clientSchema);

export default Client;