import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import sliderimg_1 from "../images/slider/sliderImg_1.jpg"
import sliderimg_2 from "../images/slider/sliderImg_2.jpg"
import sliderimg_3 from "../images/slider/sliderImg_3.jpg"
import sliderimg_4 from "../images/slider/sliderImg_4.jpg"
const Banner = () => {
  return (
    <div className="relative">
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
        <div>
          <Image src={sliderimg_1} alt="" />
        </div>
        <div>
          <Image src={sliderimg_2} alt="" />
        </div>
        <div>
          <Image src={sliderimg_3} alt="" />
        </div>
        <div>
          <Image src={sliderimg_4} alt="" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0-z ">

      </div>
    </div>
  );
};

export default Banner;
