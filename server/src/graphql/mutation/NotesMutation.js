/* eslint-disable no-unused-vars */
const { noteType } = require('../noteTypes')
const {
  GraphQLString,
  GraphQLID
} = require('graphql')
const NoteService = require('../../services/NoteService')

const CreateNoteMutation = {
  type: noteType,
  args: {
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { title, content }) => {
    const noteService = new NoteService()
    const dateCreated = Date.now()
    const newNote = await noteService.createNote({ title, content, dateCreated })

    return newNote
  }
}

const DeleteNoteMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const noteService = new NoteService()
    const res = await noteService.deleteNote(_id)

    if (res.ok) {
      return _id
    }
  }
}

const UpdateNoteMutation = {
  type: noteType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, title, content }) => {
    const noteService = new NoteService()
    const dateModified = Date.now()
    const updatedNote = await noteService.updateNote(_id, { title, content, dateModified })

    return updatedNote
  }
}

module.exports = { CreateNoteMutation, UpdateNoteMutation, DeleteNoteMutation }
