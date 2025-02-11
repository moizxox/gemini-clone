import { createContext, useEffect, useState } from "react";
import makeRequest from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [recentInput, setRecentInput] = useState("");
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultScreen, setResultScreen] = useState(false);
  const [addInRecent, setAddInRecent] = useState(true);

  const sendRequest = async (prompt) => {
    setResultScreen(true);
    setLoading(true);
    const aiResponse = await makeRequest(prompt);
    setResponse(aiResponse);
    setLoading(false);
    console.log(aiResponse);
  };

  const makeNewChat = () => {
    setAddInRecent(true);
    setRecentInput("");
    setResponse("");
    setResultScreen(false);
  };

  useEffect(() => {
    if (recentInput && response && addInRecent) {
      setHistory((prevHistory) => [
        ...prevHistory,
        { title: recentInput, data: response },
      ]);
    }
  }, [response]);

  const contextValue = {
    recentInput,
    setRecentInput,
    history,
    setHistory,
    response,
    setResponse,
    loading,
    resultScreen,
    setResultScreen,
    sendRequest,
    makeNewChat,
    setAddInRecent,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
