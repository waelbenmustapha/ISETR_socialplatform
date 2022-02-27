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





export const getAllSharesApi = async (req, res) => {
    try {

        const shares = await con
            .select("*")
            .from("shares");
        console.log(shares);

        return res.status(200).json({
            success: true,
            data: shares
        });


    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            error
        });

    }
}

export const addShareApi = async (req, res) => {

    try {

        const { errors } = validationResult(req)

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: errors
            })
        }

        const { user_id, post_id, text } = req.body;

        const user_exist = await checkUserExist(user_id);
        if (!user_exist) {
            return res.status(409).json({
                success: false,
                error: 'user doe\'s not exist'
            })
        }

        const post_exist = await checkPostExist(post_id);
        if (!post_exist) {
            return res.status(409).json({
                success: false,
                error: 'user doe\'s not exist'
            })
        }

        // no errors

        const share = await con
            .insert({
                user_id,
                post_id,
                text
            })
            .into('shares')

        return res.status(201).json({
            success: true,
            message: 'share added successfully'
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            error
        })
    }

}


export const likeShareApi = async (req, res) => {

    // check body errors

    const { errors } = validationResult(req);
    if (!(errors.length === 0)) {

        return res.status(400).json({
            success: false,
            errors
        })
    }

    const { share_id, user_id } = req.body;

    const user_exist = await checkUserExist(user_id);
    if (!user_exist) {
        return res.status(404).json({
            success: false,
            error: 'User does\'nt exist!'
        })

    }


    const share_exist = await checkShareExist(share_id);
    if (!share_exist) {
        return res.status(404).json({
            success: false,
            error: 'Post does\'nt exist!'
        })

    }

    const alreadyLiked = await checkShareAlreadyLiked(share_id, user_id);
    if (alreadyLiked) {
        //  dislike == remove
        try {
            await con
                .delete()
                .from('share-likes')
                .where({
                    user_id,
                    share_id
                })

            return res.status(200).json({
                success: true,
                message: 'Share disliked successfully!'
            })

        } catch (error) {
            return res.status(400).json({
                success: false,
                error
            })
        }
    }

    // like == insert
    await con
        .insert({
            user_id,
            share_id
        })
        .into("share-likes")
        .then((share) => {
            return res.status(201).json({
                success: true,
                message: "Share liked successfully",
            })

        })
        .catch((err) => res.status(400).json({
            success: false,
            error: err
        }));
};
