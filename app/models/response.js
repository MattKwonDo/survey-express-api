'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false
  },
  boolean: {
    type: Boolean,
    required: false
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: '',
    required: false
  },
  survey_id: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
    // ,
    // transform: function (doc, ret, options) {
    //   const userId = (options.user && options.user._id) || false
    //   ret.editable = userId && userId.equals(doc._owner)
    //   return ret
    // }
  }
})

responseSchema.virtual('length').get(function length () {
  return this.text.length
})

const Response = mongoose.model('Response', responseSchema)

module.exports = Response
