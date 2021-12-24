import React,{ useIsAuthenticated } from "react-auth-kit";
import { useState,useRef} from "react";
import AddPost from "../components/AddPost";
import Post from "../components/Post";

function Feed() {
  const [limit,setlimit]=useState(3);
function  handleScroll (e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {  setlimit(limit+3) }
  }
  const [Posts, setPosts] = useState([
    {
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      User: {
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {

      User: { name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },
  ]);
  const isAuthenticated = useIsAuthenticated();

  return (
    <div onScroll={(e)=>handleScroll(e)} className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }} >
        <div style={{ flex: "3" }}  >
          <AddPost />

          {Posts.slice(0,limit).map((val) => (
            <Post post={val} />
          ))}
        </div>
        <div style={{ border: "1px solid", flex: "1" }}>EVENTS</div>
      </div>
    </div>
  );
}

export default Feed;
