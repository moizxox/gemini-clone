import { useContext } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { Context } from "../../context/Context";

const RecentBox = () => {
  const { history } = useContext(Context);
  return (
    <section className={`flex flex-col gap-5`}>
      <h4>Recent</h4>
      <section className="flex flex-col gap-1">
        {history.map((dataItem, index) => {
          return (
            <RecentBoxItem
              title={dataItem.title}
              data={dataItem.data}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
};
const RecentBoxItem = ({ title, data }) => {
  const { setRecentInput, setResponse, setResultScreen, setAddInRecent } =
    useContext(Context);
  const openRecentData = () => {
    setAddInRecent(false);
    setRecentInput(title);
    setResponse(data);
    setResultScreen(true);
  };
  return (
    <div
      className="flex gap-3 items-center rounded-full p-3 cursor-pointer hover:bg-[#e7ecef] dark:hover:bg-accent"
      onClick={openRecentData}
    >
      <LuMessageSquare size={18} />
      <p className="text-nowrap">{`${title.slice(0, 15)}...`}</p>
    </div>
  );
};

export default RecentBox;
