import Loader from "@components/Loader";
import Hero from "@components/hero/Hero";
import Navbar from "@components/navbar/Navbar";

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
