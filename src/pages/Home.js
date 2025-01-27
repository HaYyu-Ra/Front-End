import Card from "../components/Card";

const Home = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to the Front-End Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="About Us" description="Learn more about what we do." />
        <Card title="Our Mission" description="Our goal is to empower developers." />
      </div>
    </div>
  );
};

export default Home;
