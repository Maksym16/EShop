import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    reqired: true, 
  },
  email: {
    type: String,
    reqired: true, 
    unique: true,
  },
  password: {
    type: String,
    reqired: true, 
  },
  isAdmin: {
    type: Boolean,
    reqired: true, 
    default: false,
  }
}, {
  timestamps: {
    type: Date
  }
})

userSchema.methods.matchPassword = async function(pass) {
  return await bcrypt.compare(pass, this.password);
}


const User = mongoose.model('User', userSchema)

export default User