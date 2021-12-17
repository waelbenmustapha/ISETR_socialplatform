import React from "react";
import avatar from "../images/avatar.jpg";
import Search from "../images/search.svg";
import More from "../images/more_vert.svg"
function Messages() {
  return (
//good
    <div>
      <div className="flex">
        <div className="flex-grow h-screen bg-gray-300 border b-2 border-gray-500">
          <div className="text-xl p-3 ">Messages</div>
          <div className="p-3 flex">
            {/* search*/}
            <input
              className="p-2 w-10/12 bg-gray-200 text-xs focus:outline-none rounded-tr-md rounded-br-md"
              type="text"
              placeholder="Search for messages or users ...." />
            <div className="w-2/12 flex justify-center items-center">
              <button className="w-4" class="flex items-center justify-center bg-white px-4 border-r"><svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg></button>
            </div>
          </div>
          {/* Bulls active status*/}
          <div className="flex m-3">
            <div className="p-2 flex justify-center items-center flex-col">
              <img className="w-8 h-8 rounded-full" src={avatar} />
              <div className="w-3 h-3 relative left-3 bottom-3 bg-white rounded-full">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div className="text-gray-500 text-xs pt-3  text-center ">
                Charrabi
              </div>
            </div>
            <div className="p-2 flex justify-center items-center flex-col">
              <img className="w-8 h-8 rounded-full" src={avatar} />
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <div className="text-gray-500 text-xs pt-3 text-center">
                Wael
              </div>
            </div>
            <div className="p-2 flex justify-center items-center flex-col">
              <img className="w-8 h-8 rounded-full" src={avatar} />
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>

              <div className="text-gray-500 text-xs pt-3 text-center ">
                Siliti
              </div>
            </div>
            <div className="p-2 flex justify-center items-center flex-col">
              <img className="w-8 h-8 rounded-full" src={avatar} />
              <div className="text-gray-500 text-xs pt-3 text-center ">
                Guesmi
              </div>
            </div>
          </div>
          {/* Bulls active status*/}
          {/* messages*/}
          <div className="flex m-3 bg-white rounded-lg p-2 ">
            <img className="w-14 h-14 rounded-full" src={avatar} alt="" />
            <div className="flex-grow p-3">
              <div className="flex text-xs justify-between">
                <div>
                  Charaabi
                </div>
                <div>
                  12:00AM
                </div>
              </div>
              <div className="text-xs text-gray-500">
                this is really dope and i am ....
              </div>
            </div>
          </div>
          <div className="flex m-3 bg-white rounded-lg p-2 ">
            <img className="w-14 h-14 rounded-full" src={avatar} alt="" />
            <div className="flex-grow p-3">
              <div className="flex text-xs justify-between">
                <div>
                  wael
                </div>
                <div>
                  12:00AM
                </div>
              </div>
              <div className="text-xs text-gray-500">
                this is really dope and i am ....
              </div>
            </div>
          </div>
          <div className="flex m-3 bg-white rounded-lg p-2 ">
            <img className="w-14 h-14 rounded-full" src={avatar} alt="" />
            <div className="flex-grow p-3">
              <div className="flex text-xs justify-between">
                <div>
                  Siliti
                </div>
                <div>
                  12:00AM
                </div>
              </div>
              <div className="text-xs text-gray-500">
                this is really dope and i am ....
              </div>
            </div>
          </div>
          <div className="flex m-3 bg-white rounded-lg p-2 ">
            <img className="w-14 h-14 rounded-full" src={avatar} alt="" />
            <div className="flex-grow p-3">
              <div className="flex text-xs justify-between">
                <div>
                  Guesmi
                </div>
                <div>
                  12:00AM
                </div>
              </div>
              <div className="text-xs text-gray-500">
                this is really dope and i am ....
              </div>
            </div>
          </div>
        </div>
        {/* messages*/}

        <div className="flex-grow h-screen flex-col">
          <div className="w-screen h-14 justify-between">
            <div className="flex items-center">
              <div className="p-3">
                <img className="w-8 h-8 rounded-full" src={avatar} />
                <div className="flex justify-center w-3 h-3 relative left-6 bottom-3 bg-white rounded-full">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              </div>
              <div >
                <div className="text-sm">
                  Charrabi
                </div>
                <div className="text-xs" >
                  Online
                </div>
              </div>
              <div className="flex items-center p-3 " >

                <img src={Search} className="w-96 h-5" />
                <img src={More} className="w-5 h-5" />

              </div>
            </div>
          </div>
          <div className="w-full flex-grow">
            <div className="flex items-end w-3/6 bg-gray-300 m-8 rounded-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg">
              <img src={avatar} className="w-8 h-8 rounded-full m-3" />
              <div className="p-3">
                <div className="text-sm">
                  Charrabi Mohamed
                </div>

                <div className="text-xs text-gray-500">
                  Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
                </div>
                <div className="text-xs text-gray-400">8 minutes ago</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-end w-3/6 bg-blue-600 m-8 rounded-lg rounded-tl-lg rounded-tr-lg rounded-br-lg">

                <div className="p-3">
                  <div className="text-sm text-white">
                    Nader Guesmi
                  </div>

                  <div className="text-xs text-white">
                    Hunky Dory is the fourth studio album by English musician David Bowie, released on 17 December 1971 by RCA Records. It was co-produced by Bowie and Ken ...
                  </div>
                  <div className="text-xs text-white-400">7 minutes ago</div>
                </div>
                <img src={avatar} className="w-8 h-8 rounded-full m-3" />
              </div>
            </div>
            <div className="flex items-end w-3/6 bg-gray-300 m-8 rounded-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg">
              <img src={avatar} className="w-8 h-8 rounded-full m-3" />
              <div className="p-3">
                <div className="text-sm">
                  Charrabi Mohamed
                </div>

                <div className="text-xs text-gray-500">
                  Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
                </div>
                <div className="text-xs text-gray-400">8 minutes ago</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-end w-3/6 bg-blue-600 m-8 rounded-lg rounded-tl-lg rounded-tr-lg rounded-br-lg">

                <div className="p-3">
                  <div className="text-sm text-white">
                    Nader Guesmi
                  </div>

                  <div className="text-xs text-white">
                    Hunky Dory is the fourth studio album by English musician David Bowie, released on 17 December 1971 by RCA Records. It was co-produced by Bowie and Ken ...
                  </div>
                  <div className="text-xs text-white-400">7 minutes ago</div>
                </div>
                <img src={avatar} className="w-8 h-8 rounded-full m-3" />
              </div>
            </div>
          </div>
          
          <div className="w-full h-14  flex px-3">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please type your message...."/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Messages;
