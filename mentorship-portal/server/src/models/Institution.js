import mongoose from 'mongoose'

const institutionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    domains: {
      type: [String],
      required: true,
    },
    established: {
      type: Number,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
)

const Institution = mongoose.model('Institution', institutionSchema)

export default Institution
