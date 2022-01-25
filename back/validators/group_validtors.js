import Ajv from 'ajv'
import yup from 'yup'
import { check } from 'express-validator'




export const addValidation = [
    // check(['name', 'description', 'image', 'admin_id'], 'required')
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('image', 'image is required').not().isEmpty(),
    check('admin_id', 'admin user id is required').not().isEmpty(),
    check('admin_id', ' admin id must be of type integer').isInt(),
]


export const addGroupMemberValidation = [

    check('user_id', 'User id is required').not().isEmpty(),
    check('group_id', 'group id is required').not().isEmpty(),
    check('user_id', ' user id must be of type integer').isInt(),
    check('group_id', ' group id must be of type integer').isInt(),

]








