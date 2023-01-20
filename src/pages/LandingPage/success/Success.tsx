import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Thumbs,
} from "swiper";
import SuccessCard from "./SuccesCard";

const Success = () => {
  const successData: {
    id?: string;
    heading?: string;
    para?: string;
    image?: string;
  }[] = [
    {
      id: "0",
      image: "/images/jack.svg",
      heading: "Ralph Edwards",
      para: "Thanks finance your ia are amazing and your service is wonderful.The ia arrived in a timely manner in perfect condition. I appreciated your personal note too. I just love the ia so much - I can come to finance, get great service, great clothes, and check out feeling brilliant. Thanks ItemScribe! Would definitely recommend it.",
    },
    {
      id: "1",
      heading: "RobertH123",
      image: "/images/jack.svg",
      para: "Would definitely recommend ItemScribe and will definitely be ordering again. Thanks ItemScribe! Your product descriptions are amazing and your service is wonderful.",
    },
    {
      id: "3",
      heading: "Wade Warren",
      image: "/images/jack.svg",
      para: "Thanks so much! My ia was great and delivery was super fast too. Would definitely recommend ItemScribe and will definitely be ordering again. The ia arrived in a timely manner in perfect condition. I appreciated your personal note too. Your product descriptions are amazing.",
    },
    {
      id: "4",
      heading: "Wade Hlo",
      image: "/images/jack.svg",
      para: "Thanks so much! My ia was great and delivery was super fast too. Would definitely recommend ItemScribe and will definitely be ordering again. The ia arrived in a timely manner in perfect condition. I appreciated your personal note too. Your product descriptions are amazing.",
    },
    {
      id: "5",
      heading: "Wade Hlo",
      image: "/images/jack.svg",
      para: "Thanks so much! My ia was great and delivery was super fast too. Would definitely recommend ItemScribe and will definitely be ordering again. The ia arrived in a timely manner in perfect condition. I appreciated your personal note too. Your product descriptions are amazing.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <center>
            <Text name="Success Stories" type="heading" />
            <Text
              name="These are just some of the thousands of people who’s lives have changed. We can’t show their faces due to our active protection of user privacy, but we can share their voices."
              type="paragraph"
              customClass="md:px-[200px]"
            />
          </center>
          <div className="mt-[50px]">
            <Swiper
              navigation
              // effect={"coverflow"}
              // grabCursor={true}
              // centeredSlides={true}
              spaceBetween={120}
              slidesPerView={2.75}
              coverflowEffect={{
                scale: 0.9,
                rotate: 2,
                stretch: 100,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Navigation, Thumbs]}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}>
              <SwiperSlide>
                <SuccessCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Success;
