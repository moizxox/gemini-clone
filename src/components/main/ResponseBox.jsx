import { useContext } from "react";
import UserIcon from "../../assets/images/user.png";
import AiIcon from "../../assets/svgs/icon.svg";
import { Context } from "../../context/Context";

const ResponseBox = () => {
  const { recentInput, response, loading } = useContext(Context);
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-start gap-5 bg-light-secondary dark:bg-dark-secondary p-3 rounded-[16px]">
        <img src={UserIcon} alt="User" className="w-[36px] rounded-full" />
        <h4>{recentInput}</h4>
      </div>
      <div className="flex items-center gap-5 bg-light-secondary dark:bg-dark-secondary p-3 rounded-[16px]">
        <img
          src={AiIcon}
          alt="User"
          className="w-[36px] p-1 bg-white rounded-full"
        />
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 rounded-full bg-dark-primary dark:bg-light-primary animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-dark-primary dark:bg-light-primary animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 rounded-full bg-dark-primary dark:bg-light-primary animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        ) : (
          <p>{response}</p>
        )}
      </div>
    </section>
  );
};

export default ResponseBox;
