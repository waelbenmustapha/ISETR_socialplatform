
import express from "express";

import { checkGroupTable, checkGroupUserTable } from '../middlewares/tables_middleware.js'
import { addGroupApi, addUserToGroupApi, deleteAllGroups, deleteAllGroupsApi, deleteGroupApi, getAllGroupsApi, getGroupApi, getGroupInfo, getGroupMembersApi, getUserGroupsApi, removeUserFromGroupApi, searchGroupsApi, updateGroupApi, updateGroupInfo } from "../controllers/group_controller.js";
import { addGroupMemberValidation, addValidation } from "../validators/group_validtors.js";

const router = express.Router();

router.get("/", checkGroupTable, getAllGroupsApi);
router.post("/", addValidation, addGroupApi);
router.delete("/", deleteAllGroupsApi);

router.get('/search', searchGroupsApi)
router.get('/:id', getGroupApi)
router.delete('/:id', deleteGroupApi)
router.put('/update/:id/:user', updateGroupApi)

router.get('/:id/groups', checkGroupUserTable, getUserGroupsApi)
router.get('/:id/group-members', getGroupMembersApi)

router.post('/add-group-member', addGroupMemberValidation, addUserToGroupApi)
router.delete('/delete-member/:user_id/:group_id', addGroupMemberValidation, removeUserFromGroupApi)







export default router;