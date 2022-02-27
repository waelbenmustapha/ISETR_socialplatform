import { con } from "../config/database.js";
import { validationResult } from 'express-validator'


export const checkUserIsAMember = async (user_id, group_id) => {

    const result = await con
        .select('*')
        .from('group-user')
        .where({
            user_id,
            group_id
        })

    return !(result.length === 0);

}

export const checkGroupExist = async (group_id) => {

    const result = await con
        .select('*')
        .from('groups')
        .where({
            id: group_id
        })

    return !(result.length === 0);

}


export const checkUserExist = async (user_id) => {

    const result = await con
        .select('*')
        .from('users')
        .where({
            id: user_id

        })

    return !(result.length === 0);

}

export const checkUserIsGroupAdmin = async (user_id, group_id) => {

    const group_admin = await con
        .select('admin_id')
        .from('groups')
        .where({ id: group_id });

    return (group_admin[0].admin_id === user_id)


}

// add group
export const addGroup = async (payload) => {
    try {
        const { name, description, image, admin_id } = payload;
        const group = await con.
            insert({ name, description, image, admin_id }).
            into("groups");
        return {
            success: true,
            data: group
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };

    }

}
// get user groups

export const getUserGroups = async (user_id) => {
    try {
        const groups = await con.
            select("groups.id", "groups.name", "groups.description", "groups.image", "groups.created_at", "groups.admin_id").
            from("groups").
            innerJoin("group-user", "groups.id", "group-user.group_id").
            where("group-user.user_id", user_id);
        return {
            success: true,
            data: groups
        };


    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// search groups
export const searchGroups = async (payload) => {
    try {
        const name = payload;
        const groups = await con.
            select("groups.id", "groups.name", "groups.description", "groups.image", "groups.created_at", "groups.admin_id").
            from("groups").
            where("groups.name", "like", `%${name}%`).
            orWhere("groups.description", "like", `%${name}}%`);
        return {
            success: true,
            data: groups
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}


// get group info
export const getGroupInfo = async (group_id) => {
    try {
        const group = await con.
            select("*").
            from("groups").
            where("groups.id", group_id);
        console.log({ group })
        return {
            success: true,
            data: group[0]
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

export const updateGroupInfo = async (group_id, paylaod) => {


    try {
        const updatedGroup = await con.
            update(paylaod)
            .from('groups')
            .where('id', group_id)

        return {
            success: true,
            data: updatedGroup
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }


}

// get group members
export const getGroupMembers = async (group_id) => {
    try {
        const members = await con.
            select("users.*").
            from("users").
            innerJoin("group-user", "users.id", "group-user.user_id").
            where("group-user.group_id", group_id);
        return {
            success: true,
            data: members
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}


// get group messages
export const getGroupMessages = async (group_id) => {
    try {
        const messages = await con.
            select("messages.id", "messages.text", "messages.image", "messages.file", "messages.seen", "messages.created_at", "messages.sender_id", "messages.room_id").
            from("messages").
            where("messages.room_id", group_id);
        return {
            success: true,
            data: messages
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}


// get group files
export const getGroupFiles = async (group_id) => {
    try {
        const files = await con.
            select("files.id", "files.name", "files.path", "files.created_at", "files.sender_id", "files.room_id").
            from("files").
            where("files.room_id", group_id);
        return {
            success: true,
            data: files
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}


// get group notifications
export const getGroupNotifications = async (group_id) => {
    try {
        const notifications = await con.
            select("notifications.id", "notifications.text", "notifications.seen", "notifications.created_at", "notifications.sender_id", "notifications.room_id").
            from("notifications").
            where("notifications.room_id", group_id);
        return {
            success: true,
            data: notifications
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}


// get group events
export const getGroupEvents = async (group_id) => {
    try {
        const events = await con.
            select("events.id", "events.title", "events.description", "events.image", "events.created_at", "events.start_date", "events.end_date", "events.start_time", "events.end_time", "events.location", "events.admin_id", "events.group_id").
            from("events").
            where("events.group_id", group_id);
        return {
            success: true,
            data: events
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

// delete group
export const deleteGroup = async (group_id) => {
    try {
        const group = await con.
            from("groups").
            where("groups.id", group_id).
            delete();
        return {
            success: true,
            data: group
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

// delete all groups
export const deleteAllGroups = async () => {
    try {
        const deletedGroups = await con.
            from('groups')
            .delete();
        return {
            success: true,
            data: deletedGroups
        };

    } catch (error) {
        return {
            success: false,
            error
        }
    }
}



// add user to group
export const addUserToGroup = async (payload) => {
    try {
        const { user_id, group_id } = payload;

        // check user not already in group
        const isMember = !checkUserIsAMember(user_id, group_id)
        if (isMember) {
            return {
                success: false,
                error: 'user already a member'
            }

        }

        const user = await con.
            insert({
                user_id,
                group_id
            }).into("group-user").
            returning("*");
        return {
            success: true,
            data: user
        };

    }
    catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}


// remove user from group
export const removeUserFromGroup = async (payload) => {
    try {
        const { user_id, group_id } = payload;

        // check group exist and user is a member
        const user_exist = await checkUserExist(user_id);
        const user_is_member = await checkUserIsAMember(user_id, group_id);


        if (!user_exist) {
            return {
                success: false,
                error: 'User not exist'
            }
        }

        if (!user_is_member) {
            return {
                success: false,
                error: 'User not a member of this group'
            }
        }


        const user = await con.
            from("group-user").
            where("user_id", user_id).
            andWhere("group_id", group_id).
            delete();
        return {
            success: true,
            data: user
        };

    }
    catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

// get all goups
export const getAllGroups = async () => {
    try {
        const groups = await con.
            select('*')
            .from('groups');
        return {
            success: true,
            data: groups
        };
    }
    catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}








// APIs

export const addGroupApi = async (req, res) => {
    const { name, description, image, admin_id } = req.body;

    // error check
    const { errors } = validationResult(req);
    if (!(errors.length === 0)) {

        return res.status(400).json({
            success: false,
            errors
        })
    }

    const user_exist = await checkUserExist(admin_id);
    if (!user_exist) {
        return res.status(409).json({
            success: false,
            error: 'user doe\'s not exist'
        })
    }


    await addGroup(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}

export const getUserGroupsApi = async (req, res) => {
    const { id } = req.params;
    await getUserGroups(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));

}

export const searchGroupsApi = async (req, res) => {
    const { name } = req.query;
    await searchGroups(name)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));

}

export const getGroupApi = async (req, res) => {
    const { id } = req.params;

    const group_exist = await checkGroupExist(id);

    if (!group_exist) {
        return res.status(404).json({
            success: false,
            error: 'Group doe\'s not exist!'
        })
    }



    await getGroupInfo(id)
        .then(data => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(400).json({
                success: false,
                error: err.message
            });
        });
}

export const getGroupMembersApi = async (req, res) => {
    const { id } = req.params;

    const group_exist = await checkGroupExist(id);

    if (!group_exist) {
        return res.status(404).json({
            success: false,
            error: 'Group doe\'s not exist!'
        })
    }


    await getGroupMembers(id)
        .then(data => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(400).json({
                success: false,
                error: err.message
            });
        });
}


export const deleteGroupApi = async (req, res) => {
    const { id } = req.params;

    const group_exist = await checkGroupExist(id);

    if (!group_exist) {
        return res.status(404).json({
            success: false,
            error: 'Group doe\'s not exist!'
        })
    }


    await deleteGroup(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}

export const updateGroupApi = async (req, res) => {
    const { id, user } = req.params;

    const group_exist = await checkGroupExist(id);
    const user_is_admin = await checkUserIsGroupAdmin(parseInt(user), id);

    if (!user_is_admin) {
        return res.status(404).json({
            success: false,
            error: 'User not enable to perform this update!'
        })
    }

    if (!group_exist) {
        return res.status(404).json({
            success: false,
            error: 'Group doe\'s not exist!'
        })
    }

    await updateGroupInfo(id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}


export const deleteAllGroupsApi = async (req, res) => {

    await deleteAllGroups()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}

export const addUserToGroupApi = async (req, res) => {

    // error check
    const { errors } = validationResult(req)
    if (!(errors.length === 0)) {
        return res.status(400).json(errors)
    }

    await addUserToGroup(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}

export const removeUserFromGroupApi = async (req, res) => {

    const { user_id, group_id } = req.params;
    // error check
    // const {errors} = validationResult(req)
    // if (!(errors.length === 0)) {
    //     return res.status(400).json(errors)
    // }

    await removeUserFromGroup({ user_id, group_id })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}


export const getAllGroupsApi = async (req, res) => {
    getAllGroups()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
}










