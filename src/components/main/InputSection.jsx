import React from "react";
import { IoMdSend } from "react-icons/io";

const InputSection = () => {
  return (
    <form className="w-full max-w-[800px] mx-auto flex border border-accent rounded-full p-3">
      <input
        type="text"
        className="flex-grow outline-none"
        placeholder="What you wanna search..."
      />
      <button type="submit" className="cursor-pointer">
        <IoMdSend size={24} />
      </button>
    </form>
  );
};

export default InputSection;
