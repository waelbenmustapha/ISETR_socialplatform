import {
  faBan,
  faBell,
  faClock,
  faEye,
  faGlobe,
  faLanguage,
  faLock,
  faShare,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Setting_Item from "../components/Setting_Item";
import Edit_Profile from "../widgets/Edit_Profile";
import Nav from "../widgets/Nav";

const tabs = [<Edit_Profile />, <div>H1ddf</div>];

function Settings() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="flex bg-white col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl">
      {/* left */}
      <div className="flex flex-col justify-start items-start w-1/4 px-3 pt-6   ">
        <Setting_Item
          leading={faUser}
          title="Edit Profile"
          more
          selected
          onClick={() => {
            setSelectedTab(0);
          }}
        />
        <Setting_Item
          leading={faGlobe}
          title="Language"
          onClick={() => {
            setSelectedTab(1);
          }}
        />
        <Setting_Item leading={faBan} title="Blocking" />
        <Setting_Item leading={faBell} title="Notifications" />
        <Setting_Item leading={faLock} title="Password & Security" />
        <Setting_Item leading={faClock} title="Activity Log" />
        <Setting_Item leading={faEye} title="Viewing & Sharing" />
      </div>
      <hr className=" h-full bg-gray-900" style={{ width: "1px" }} />
      {/* Right */}

      {tabs[selectedTab]}
    </div>
  );
}

export default Settings;
