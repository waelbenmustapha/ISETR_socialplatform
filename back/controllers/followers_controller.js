import { con, db_conn } from "../config/database.js";





export const usersYouMightKnow = async (user_id) => {

    try {


        // check if user have at least one follow
        const userFollower = await con.select("*").from("followers").where({
            user_id: user_id,
        });
        if (userFollower.length === 0) {
            // if user have no follow, return all users
            const users = await con.select("*").from("users")
                .whereNot({
                    id: user_id
                });
            return {
                success: true,
                data: users
            };

        }
        // user have followers =>  get all the users that he don't follow
        // const users = await con
        //     .select("us.*")
        //     .from("followers fl")
        //     .leftJoin("users us")
        //     .on("fl.user_id", '=', user_id)
        //     .whereNot({ "us.id": user_id })
        //     .andWhereNot("fl.follower_id", "us.id")
        //     ;

        //     const users = await db_conn.query(`
        //   ``  SELECT * from followers fl
        //     LEFT JOIN users us
        //     on ( ( fl.user_id = 1) )

        //     where us.id != 1 and  us.id != fl.follower_id  
        //     ;
        //     ``     `);

        const users = await con.raw(`
        SELECT us.* from followers fl
        LEFT JOIN users us
        on ( ( fl.user_id = ?) )
        
        where us.id != ? and  us.id != fl.follower_id  
        ;` , [user_id, user_id]);


        return {
            success: true,
            data: users[0] // users[0] is an array of objects
        };
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            error: error
        };
    }
}

export const getMyFollowers = async (user_id) => {
    try {
        const myFollowers = await con.select("follower_id").from("followers").where({
            user_id: user_id,
        });

        const followers = await con.select("*").from("users").whereIn("id", myFollowers.map(f => f.follower_id));

        return {
            success: true,
            data: followers
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error
        };
    }

}

export const getUsersIFollow = async (user_id) => {
    try {
        const myFollowers = await con.select("user_id").from("followers").where({
            follower_id: user_id,
        });

        const followers = await con.select("*").from("users").whereIn("id", myFollowers.map(f => f.user_id));

        return {
            success: true,
            data: followers
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error
        };
    }

}

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

export const getUsersYouMightKnowApi = async (req, res) => {
    const { id } = req.params;
    usersYouMightKnow(parseInt(id))
        .then((followers) => {
            console.log(followers);
            return res.status(200).json(followers);
        }
        )
        .catch((err) => {
            console.log("erro", err)
            res.status(400).json({
                message: err,
            })
        }
        );
}

export const getMyFollowersApi = async (req, res) => {
    const { id } = req.params;
    getMyFollowers(parseInt(id))
        .then((data) => {
            console.log(data);
            return res.status(200).json(data);
        })
        .catch((err) => {
            console.log("erro", err)
            res.status(400).json({
                message: err,
            })
        });
}


export const getUsersIFollowApi = async (req, res) => {
    const { id } = req.params;
    getUsersIFollow(parseInt(id))
        .then((data) => {
            console.log(data);
            return res.status(200).json(data);
        })
        .catch((err) => {
            console.log("erro", err)
            res.status(400).json({
                message: err,
            })
        });
}

