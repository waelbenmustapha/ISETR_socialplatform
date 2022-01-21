import { con } from "../config/database.js";


export const getFollowersRequestWithLimits = async (req, res) => {
    const { page } = req.query;
    const start = parseInt(page) * 5;
    console.log(start);
    await con
        .select("*")
        .from("followers")
        .where("user_id", req.params.id)
        .andWhere("status", "pending")
        .limit(7)
        .offset(start)
        .then((followers) => {
            return res.status(200).json(followers);
        })
        .catch((err) => res.status(400).json({
            error: err,
        }));
};

export const getFollowersWithLimits = async (req, res) => {
    const { page } = req.query;
    const start = parseInt(page) * 5;
    console.log(start);
    await con
        .select("*")
        .from("followers")
        .where("user_id", req.params.id)
        .andWhere("status", "following")
        .limit(7)
        .offset(start)
        .then((followers) => {
            return res.status(200).json(followers);
        })
        .catch((err) => res.status(400).json({
            error: err,
        }));
};


export const sendFollowRequest = async (req, res) => {
    const { user_id, follower_id } = req.body;
    await con
        .insert({
            user_id,
            follower_id
        })
        .into("followers")
        .then(() => {
            return res.status(200).json({
                message: "Follow request sent successfully",
            });

        })
        .catch((err) => res.status(400).json({
            error: err,
        }));
};


export const acceptFollowersRequest = async (req, res) => {
    const { id } = req.params;
    await con
        .update({
            status: "following",
        })
        .from("followers")
        .where("id", id)
        .then(() => {
            return res.status(200).json({
                message: "Followers request accepted successfully",
            });
        })
        .catch((err) =>
            res.status(400).json({
                message: err,
            })
        );
}


export const denyOrDeleteFollowersRequest = async (req, res) => {
    const { id } = req.params;
    await con
        .delete()
        .from("followers")
        .where("id", id)
        .then(() => {
            return res.status(201).json({
                message: "Followers request deleted successfully",
            });
        })
        .catch((err) =>
            res.status(400).json({
                message: err,
            })
        );
}



