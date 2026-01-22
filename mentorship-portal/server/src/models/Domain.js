import mongoose from 'mongoose'

const domainSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
)

const Domain = mongoose.model('Domain', domainSchema)

export default Domain
