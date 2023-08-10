
import TittleH1 from "../components/home/TittleH1.JSX";
import Image from "../components/home/Image";
import Text from "../components/home/Text";
import Carousel from "../components/carousel/Carousel";
import ButtonViewMore from "../components/home/ButtonViewMore";

export default function Home() {
  


  return (
    <div className="contentHome">
      <div className="textAndButtonHome">
        <TittleH1 />
        <Text />
        <Image />
        <ButtonViewMore />
      </div>
      <Carousel />
    </div>
  );
}
