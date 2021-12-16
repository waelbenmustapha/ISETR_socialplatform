import React from "react";
import Block_Item from "../components/Block_Item";
import Suggest_Item from "../components/Suggest_Item";

function Block() {
  return (
    <div className="p-4 w-full  overflow-y-scroll ">
      <p>
        {" "}
        Any user you block neither of you can see other profile or communicate
        with him.{" "}
      </p>
      <div className=" flex flex-wrap justify-between items-center gap-5 col-span-3 row-start-2 row-end-11 pt-7">
        {/* items */}
        <Block_Item />
        <Block_Item />
        <Block_Item />
        <Block_Item />
        <Block_Item />
        <Block_Item />
        <Block_Item />
        <Block_Item />
      </div>
    </div>
  );
}

export default Block;
