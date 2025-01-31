import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: {type: String, required: true},
  creator: {
    type: Schema.Types.ObjectId, ref: "Profile"
    },
}, {
  timestamps: true
})


const mealSchema = new Schema({
  name: {type: String, required: true},
  picture: {type: String},
  ingredients: {type: String, required: true},
  instructions: {type: String, required: true},
  prepTime: {type: String},
  creator: {
    type: Schema.Types.ObjectId, ref: "Profile"
    },
  calories: {type: Number, default: 0},
  reviews: [reviewSchema],
  restaurants: [{
    type: Schema.Types.ObjectId, ref: "Restaurant"
  }]
}, {
  timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)


export {
  Meal
}