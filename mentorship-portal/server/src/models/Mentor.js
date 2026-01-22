import mongoose from 'mongoose'

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    bio: String,
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
)

const Mentor = mongoose.model('Mentor', mentorSchema)

export default Mentor
