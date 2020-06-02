import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  { _id: false }
);

const DevSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    github_username: {
      type: String,
      required: true,
    },
    techs: {
      type: [String],
      required: true,
    },
    location: {
      type: PointSchema,
      index: '2dsphere',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Dev', DevSchema);
