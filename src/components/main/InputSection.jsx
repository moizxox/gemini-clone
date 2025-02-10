import React from "react";
import { IoMdSend } from "react-icons/io";

const InputSection = () => {
  return (
    <section className="p-6 absolute w-full bottom-0 left-0 bg-light-primary dark:bg-dark-primary">
      <form className="w-full max-w-[800px] mx-auto flex border border-accent rounded-full p-3">
        <input
          type="text"
          className="flex-grow outline-none"
          placeholder="What you wanna search..."
        />
        <button type="submit">
          <IoMdSend size={24} />
        </button>
      </form>
    </section>
  );
};

export default InputSection;
