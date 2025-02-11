import promptData from "./promptData";
import AutoPrompt from "./AutoPrompt";
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
            <AutoPrompt
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

export default StartedScreen;
