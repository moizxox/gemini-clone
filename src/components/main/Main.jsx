import InputSection from "./InputSection";
import StartedScreen from "./StartedScreen";
import ResponseBox from "./ResponseBox";

const Main = () => {
  return (
    <main className="w-full px-5 relative h-screen flex flex-col">
      <section className="p-3">
        <h1 className="text-3xl text-accent font-medium">Gemini</h1>
      </section>
      <section className="max-w-[800px] w-full h-full mx-auto overflow-y-auto p-4 custom-scroll">
        {/* <ResponseBox /> */}
        <StartedScreen />
      </section>
      <div className="sticky bottom-0 bg-light-primary dark:bg-dark-primary w-full py-4">
        <div className="max-w-[800px] mx-auto">
          <InputSection />
        </div>
      </div>
    </main>
  );
};

export default Main;
