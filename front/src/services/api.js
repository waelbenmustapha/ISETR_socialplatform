


export const getReceiverRoomId = async (receiver_id) => {
    await axios.get(`http://localhost:5500/api/room/get-receiver-room-id/${receiver_id}`)
        .then(res => {
            return res.data;
        }
        ).catch(err => {
            return err;
        }
        );
}

