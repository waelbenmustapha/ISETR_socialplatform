import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import Suggest_Item from "../Suggest_Item";

const apiUrls = [
    'http://localhost:5500/api/follow/get-users-i-follow/',
    'http://localhost:5500/api/follow/getmyfollowers/',
    'http://localhost:5500/api/follow/you-might-know/',
]

const FollowersGrid = ({ props }) => {

    const tabIndex = props;

    const auth = useAuthUser();
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);



    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true);
            await axios.get(`${apiUrls[tabIndex]}${auth().id}`)
                .then(res => {
                    console.log(res.data);
                    setUsers(res.data.data)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setIsLoading(false);
                });

        }

        getUsers();
    }, [tabIndex])

    if (isLoading) {
        return <div>Loading...</div>

    }


    return (
        <div className=" flex flex-wrap justify-between items-start  gap-5 overflow-y-scroll col-span-3 row-start-2 row-end-11">
            {/* items */}

            {
                users.length < 1 ?
                    <div>No users found</div>
                    :

                    users.map((user, index) => {


                        return <Suggest_Item key={index} user={user} tabIndex={tabIndex} />

                    })}

        </div>

    )
}

export default FollowersGrid;