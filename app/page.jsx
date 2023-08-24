import Loader from "@components/Loader";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Loader />
    </div>
  );
};

export default Home;
