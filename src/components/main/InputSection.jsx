import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { Context } from "../../context/Context";

const InputSection = () => {
  const { setRecentInput, sendRequest } = useContext(Context);
  const [input, setInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRecentInput(input);
    sendRequest(input);
    setInput("");
  };

  return (
    <form
      className="w-full max-w-[800px] mx-auto flex border border-accent rounded-full p-3"
      onSubmit={handleFormSubmit}
    >
      <input
        value={input}
        type="text"
        className="flex-grow outline-none"
        placeholder="What you wanna search..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit" className="cursor-pointer">
        <IoMdSend size={24} />
      </button>
    </form>
  );
};

export default InputSection;
