import Ajv from 'ajv'
import yup from 'yup'
import { check } from 'express-validator'


export const loginValidation = [
    check('email', 'Email id is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password required').not().isEmpty(),

]


export const addGroupValidation = [
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


export const likePostValidator = [
    check('user_id', 'User id is required').not().isEmpty(),
    check('user_id', 'User id must be of type integer').isInt(),
    check('post_id', 'Post id is required').not().isEmpty(),
    check('post_id', 'Post id must be of type integer').isInt(),
]


export const commentPostValidator = [
    check('user_id', 'User id is required').not().isEmpty(),
    check('user_id', 'User id must be of type integer').isInt(),
    check('post_id', 'Post id is required').isInt(),
    check('post_id', 'Post id must be of type integer').isInt(),
    check('comment', 'Comment is required').not().isEmpty(),

]

export const likeCommentValidator = [
    check('user_id', 'User id is required').not().isEmpty(),
    check('user_id', 'User id must be of type integer').isInt(),
    check('comment_id', 'Comment id is required').not().isEmpty(),
    check('comment_id', 'Comment id must be of type integer').isInt(),
]


export const addShareValidator = [
    check('user_id', 'User id is required').not().isEmpty(),
    check('user_id', 'User id must be of type integer').isInt(),
    check('post_id', 'Post id is required').not().isEmpty(),
    check('post_id', 'Post id must be of type integer').isInt(),
]


export const likeShareValidator = [
    check('user_id', 'User id is required').not().isEmpty(),
    check('user_id', 'User id must be of type integer').isInt(),
    check('share_id', 'Share id is required').not().isEmpty(),
    check('share_id', 'Share id must be of type integer').isInt(),
]




