import About from "../components/About/About";
import FeedBackForm from "../components/FeedBackForm/FeedBackForm";
import ShopPromo from "../components/ShopPromo/ShopPromo";
import Slider from "../components/Slider/Slider";

function Home(props) {
  const { data } = props;
  return (
    <div>
      <Slider />
      <About />
      <ShopPromo data={data} />
      <FeedBackForm />
    </div>
  );
}

export default Home;
