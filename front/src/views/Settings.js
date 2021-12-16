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
import Activity_log from "../widgets/Activity_log";
import Block from "../widgets/Block";
import Edit_Profile from "../widgets/Edit_Profile";
import Language from "../widgets/Language";
import Nav from "../widgets/Nav";
import Notifications_Settings from "../widgets/Notifications_Settings";
import Password_And_Security from "../widgets/Password_And_Security";
import View_And_Sharing from "../widgets/View_And_Sharing";

const tabs = [
  <Edit_Profile />,
  <Language />,
  <Block />,
  <Notifications_Settings />,
  <Password_And_Security />,
  <Activity_log />,
  <View_And_Sharing />,
];

function Settings() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex bg-white col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl">
      {/* left */}
      <div className="flex flex-col justify-start items-start w-1/4 px-3 pt-6   ">
        <Setting_Item
          leading={faUser}
          title="Edit Profile"
          more
          selected={selectedTab === 0 ? true : false}
          onClick={() => {
            setSelectedTab(0);
          }}
        />
        <Setting_Item
          leading={faGlobe}
          title="Language"
          selected={selectedTab === 1 ? true : false}
          onClick={() => {
            setSelectedTab(1);
          }}
        />
        <Setting_Item
          leading={faBan}
          title="Blocking"
          selected={selectedTab === 2 ? true : false}
          onClick={() => {
            setSelectedTab(2);
          }}
        />
        <Setting_Item
          leading={faBell}
          title="Notifications"
          selected={selectedTab === 3 ? true : false}
          onClick={() => {
            setSelectedTab(3);
          }}
        />
        <Setting_Item
          leading={faLock}
          title="Password & Security"
          selected={selectedTab === 4 ? true : false}
          onClick={() => {
            setSelectedTab(4);
          }}
        />
        <Setting_Item
          leading={faClock}
          title="Activity Log"
          selected={selectedTab === 5 ? true : false}
          onClick={() => {
            setSelectedTab(5);
          }}
        />
        <Setting_Item
          leading={faEye}
          title="Viewing & Sharing"
          selected={selectedTab === 6 ? true : false}
          onClick={() => {
            setSelectedTab(6);
          }}
        />
      </div>
      <hr className=" h-full bg-gray-900" style={{ width: "1px" }} />
      {/* Right */}

      {tabs[selectedTab]}
    </div>
  );
}

export default Settings;
