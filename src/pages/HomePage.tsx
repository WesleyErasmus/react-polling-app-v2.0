import Poll from "../components/Poll";

const HomePage = () => {
  return (
    // App Home Page
    <div>
      {/* Poll component */}
      <Poll
        heading="What programming languages do you use during interviews?"
        option1={"JavaScript"}
        option2={"Python"}
        option3={"Go"}
      />
    </div>
  );
};

export default HomePage;
