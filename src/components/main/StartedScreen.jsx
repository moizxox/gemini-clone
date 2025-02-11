import promptData from "./promptData";
const StartedScreen = () => {
  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-col gap-2 md:gap-5 items-start pl-10">
        <span className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#4b9cff] to-[#ff5546] bg-clip-text text-transparent">
          Hello, Dev.
        </span>
        <span className="text-3xl md:text-5xl font-medium text-accent">
          How Can I Help You Today?
        </span>
      </section>
      <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
        {promptData.map((itemData, index) => {
          return (
            <PromptBox
              prompt={itemData.prompt}
              icon={itemData.icon}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
};
const PromptBox = ({ prompt, icon }) => {
  return (
    <div className="p-6 flex flex-col gap-3 items-start cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-2xl hover:bg-light-accent dark:hover:bg-accent transition-all duration-300">
      <div className="bg-white p-2 rounded-full dark:text-accent">{icon}</div>
      <p>{prompt}</p>
    </div>
  );
};
export default StartedScreen;
