import TittleH1 from "../components/home/TittleH1.JSX";
import Text from "../components/home/Text";
import Carousel from "../components/home/carousel";
import ButtonViewMore from "../components/home/ButtonViewMore";

export default function ContentHome() {
  return (
    <div className="contentHome">
      <div className="textAndButtonHome">
        <TittleH1 />
        <Text />
        <ButtonViewMore />
      </div>
      <Carousel />
    </div>
  );
}
