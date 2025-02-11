import { createContext, useEffect, useState } from "react";
import makeRequest from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  // const [input, setInput] = useState("");
  const [recentInput, setRecentInput] = useState("");
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultScreen, setResultScreen] = useState(false);

  const sendRequest = async (prompt) => {
    setResultScreen(true);
    setLoading(true);
    console.log("first");
    const aiResponse = await makeRequest(prompt);
    setResponse(aiResponse);
    setLoading(false);
    console.log("second");
    console.log(aiResponse);
  };

  const contextValue = {
    recentInput,
    setRecentInput,
    history,
    setHistory,
    response,
    setResponse,
    loading,
    resultScreen,
    sendRequest,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
