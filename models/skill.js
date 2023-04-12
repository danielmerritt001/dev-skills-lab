import mongoose from 'mongoose'

const Schema = mongoose.Schema

	
const todoSchema = new Schema({
  skill: String,
  difficulty: String,
})