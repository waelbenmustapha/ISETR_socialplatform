import React from "react";
import Notification_Item from "../components/Notification_Item";
import "../App.css"
function Notifications() {

  
  return (
    <div className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
    <div className="hover" style={{backgroundColor:'white',width:'600px',margin:'0 auto',borderRadius:'15px',padding:'10px'}} >
    <p style={{fontSize:'17px',fontWeight:'500'}}>Notifications</p>
    <Notification_Item user={{name:"aziz sliti",img:"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16"}} timeago={4} subject={"like"} seen={false}/>
    <Notification_Item user={{name:"nader guesmi",img:"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38"}} timeago={74} subject={"comment"} seen={true}/>
    <Notification_Item user={{name:"med charabi",img:"https://avatars.githubusercontent.com/u/41237052?v=4"}} timeago={154} subject={"friend"} seen={true}/>
    <Notification_Item user={{name:"Mohamed Wael Ben Mustapha",img:"https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645056000&v=beta&t=Q4xOadsFrWvMvtF4TxfNBqkBz0k1UPGeJk94kE4k-Qw"}} timeago={204} subject={"like"} seen={true}/>
    <Notification_Item user={{name:"med charabi",img:"https://avatars.githubusercontent.com/u/41237052?v=4"}} timeago={225} subject={"comment"} seen={false}/>
    <Notification_Item user={{name:"Mohamed Wael Ben Mustapha",img:"https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645056000&v=beta&t=Q4xOadsFrWvMvtF4TxfNBqkBz0k1UPGeJk94kE4k-Qw"}} timeago={301} subject={"friend"} seen={true}/>
    </div>



    </div>
  );
}

export default Notifications;
