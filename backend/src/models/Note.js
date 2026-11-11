import mongoose from "mongoose";

//1 create schema
//2 create model based off schema

const noteschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },

}, {timestamps: true})

export const Note = mongoose.model( "Note", noteschema)