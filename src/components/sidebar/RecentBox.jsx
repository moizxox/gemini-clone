import React from "react";
import { LuMessageSquare } from "react-icons/lu";

const RecentBox = () => {
  return (
    <section className={`flex flex-col gap-5`}>
      <h4>Recent</h4>
      <section className="flex flex-col gap-1">
        <RecentBoxItem />
        <RecentBoxItem />
        <RecentBoxItem />
      </section>
    </section>
  );
};
const RecentBoxItem = () => {
  return (
    <div className="flex gap-3 items-center rounded-full p-3 cursor-pointer hover:bg-[#e7ecef] dark:hover:bg-accent">
      <LuMessageSquare size={18} />
      <p className="text-nowrap">Here is my Response...</p>
    </div>
  );
};

export default RecentBox;
