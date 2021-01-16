import mongoos from 'mongoose'

const userSchema = mongoos.Schema({
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
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User