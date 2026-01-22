import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    domainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Domain',
      required: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
