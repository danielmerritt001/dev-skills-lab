import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skill: String,
  difficulty: String,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill,
}