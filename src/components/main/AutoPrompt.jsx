import { useContext } from "react";
import { Context } from "../../context/Context";

const AutoPrompt = ({ prompt, icon }) => {
  const { setRecentInput, sendRequest, setAddInRecent } = useContext(Context);
  const handleAutoPrompt = () => {
    setAddInRecent(true);
    setRecentInput(prompt);
    sendRequest(prompt);
  };
  return (
    <div
      className="p-6 flex flex-col gap-3 items-start cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-2xl hover:bg-light-accent dark:hover:bg-accent transition-all duration-300"
      onClick={handleAutoPrompt}
    >
      <div className="bg-white p-2 rounded-full dark:text-accent">{icon}</div>
      <p>{prompt}</p>
    </div>
  );
};

export default AutoPrompt;
