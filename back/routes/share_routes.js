
import express from "express";

import { checkShareLikesTable, checkSharesTable } from '../middlewares/tables_middleware.js'
import { addShareApi, getAllSharesApi, likeShareApi } from "../controllers/share_controller.js";
import { addShareValidator, likeShareValidator } from "../validators/validtors.js";

const router = express.Router();

router.get("/", checkSharesTable, getAllSharesApi);
router.post("/", addShareValidator, addShareApi);
router.post("/like", likeShareValidator, checkShareLikesTable, likeShareApi);
// router.delete("/", deleteAllGroupsApi);

// router.get('/search', searchGroupsApi)
// router.get('/:id', getGroupApi)
// router.delete('/:id', deleteGroupApi)
// router.put('/update/:id/:user', updateGroupApi)

// router.get('/:id/groups', checkGroupUserTable, getUserGroupsApi)
// router.get('/:id/group-members', getGroupMembersApi)

// router.post('/add-group-member', addGroupMemberValidation, addUserToGroupApi)
// router.delete('/delete-member/:user_id/:group_id', addGroupMemberValidation, removeUserFromGroupApi)







export default router;