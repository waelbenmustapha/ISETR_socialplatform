import { validationResult } from "express-validator";
import { con } from "../config/database.js";
import { checkUserExist } from "./group_controller.js";
import { checkPostExist } from "./post_controller.js";


export const checkShareExist = async (share_id) => {

    const share = con
        .select('*')
        .from('shares')
        .where('id', share_id);

    return !(share.length === 0)



}

export const checkShareAlreadyLiked = async (share_id, user_id) => {

    const likeShare = await con
        .select('*')
        .from('share-likes')
        .where({
            share_id,
            user_id
        })

    return !(likeShare.length === 0)


}

export const createNotif = async (user_id, actioner_id, post_id, type, text) => {
if(user_id==null){ return {
    success: false,
    error: "error"
}}
    try {
        console.log("inserting")
        await con.insert({
            user_id,
            actioner_id,
            post_id,
            type,
            text
        }).into('notifications');
        return {
            success: true,
            message: "Notification created"
        }
    } catch (error) {
        return {
            success: false,
            error: error
        }
    }
}


export const deleteNotif = async (notif_id) => {
    try {

        await con.delete().from('notifications').where('id', notif_id);
        return {
            success: true,
            message: "Notification deleted"
        }


    } catch (error) {
        return {
            success: false,
            error: error
        }
    }

}


export const markSeenUnseen = async (notif_id, seen) => {
    try {
        await con.update({
            seen
        }).into('notifications').where('id', notif_id);
        return {
            success: true,
            message: "Notification updated"
        }
    } catch (error) {
        return {
            success: false,
            error: error
        }
    }
}

export const getMyNotifs = async (user_id) => {
    try {
        const notifs = await con
            .raw(`
            select no.id, no.seen, no.type, no.date,
            po.id as post_id,
             us.id as user_id,
             us.name,
             us.avatar
              from notifications no 
           left join posts po 
           on po.id = no.post_id
           LEFT JOIN users us
           on no.actioner_id = us.id
           where po.user_id != us.id 
           and  po.user_id = ? and no.user_id IS NOT null order by no.date desc
`, [user_id])




        return {
            success: true,
            data: notifs[0]
        }

    } catch (error) {
        return {
            success: false,
            error: error
        }
    }
}





export const getAllNotifsApi = async (req, res) => {
    try {

        const notifs = await con
            .select("*")
            .from("notifications");

        return res.status(200).json({
            success: true,
            data: notifs
        });


    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            error
        });

    }
}



export const createNotifApi = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                error: errors.array()
            });
        }

        const { user_id, actioner_id, post_id, type, text } = req.body;

        // const userExist = await checkUserExist(user_id);
        const newNotif = await createNotif(user_id, actioner_id, post_id, type, text);
        return res.status(200).json(newNotif);
    }
    catch (error) {

        return res.status(404).json({
            success: false,
            error
        })
    }
}


export const deleteNotifApi = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                error: errors.array()
            });
        }

        const { id } = req.params;

        const deletedNotif = await deleteNotif(id);
        return res.status(200).json(deletedNotif);
    }
    catch (error) {

        return res.status(404).json({
            success: false,
            error
        })
    }
}


export const markSeenUnseenApi = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                error: errors.array()
            });
        }

        const { id, seen } = req.body;

        const updatedNotif = await markSeenUnseen(id, seen);
        return res.status(200).json(updatedNotif);
    }
    catch (error) {

        return res.status(404).json({
            success: false,
            error
        })
    }
}


export const getMyNotifsApi = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                error: errors.array()
            });
        }

        const { user_id } = req.params;

        const notifs = await getMyNotifs(user_id);
        return res.status(200).json(notifs);
    }
    catch (error) {

        return res.status(404).json({
            success: false,
            error
        })
    }
}