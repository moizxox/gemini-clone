import { FaRegCompass } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
const promptData = [
  {
    prompt:
      "Suggest me the name of places which are more beautiful in the world",
    icon: <FaRegCompass size={22} />,
  },
  {
    prompt: "Tell me some creative topics on which I can write a book for me",
    icon: <FaRegLightbulb size={22} />,
  },
  {
    prompt: "Give me some advice on how to improve my coding skills",
    icon: <FaCode size={22} />,
  },
  {
    prompt: "Start a conversation with me",
    icon: <FiMessageSquare size={22} />,
  },
];

export default promptData;
