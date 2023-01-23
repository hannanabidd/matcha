import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination, EffectCoverflow, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import SuccessCard from "./SuccesCard";

const Success = () => {
  const successData: {
    id?: string;
    heading?: string;
    para?: string;
    image?: string;
    country?: string;
  }[] = [
    {
      id: "0",
      image: "/images/jack.svg",
      heading: "Jack K.",
      country: "Brooklyn, NY",
      para: "I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. ",
    },
    {
      id: "1",
      heading: "Lily M",
      image: "/images/lily.svg",
      country: "Miami, FL",
      para: "I couldn’t find doctors that felt like the understood me until I found Matcha. Now I follow several doctors a day and I feel like my life is back on track.",
    },
    {
      id: "3",
      heading: "Colin K",
      image: "/images/colin.svg",
      country: "Dallas, TX",
      para: "There are few apps out there that are truly democratizing healthcare. This is one of the few. ",
    },
    {
      id: "4",
      heading: "Collin K",
      image: "/images/collin.svg",
      country: "Chicago, IL",
      para: "If Matcha would have existed in my 20s, I would be so ahead. I’m still glad I found it. It’s changed my family’s life. ",
    },
    {
      id: "5",
      heading: "Emilia K",
      image: "/images/emilia.svg",
      country: "Los Angeles, CA",
      para: "I absolutely love that I can ditch all the social media that was causing me so much anxiety and learn a few minutes a day on Matcha. Game changer.",
    },
    // {
    //   id: "6",
    //   heading: "Wade Warren",
    //   image: "/images/jack.svg",
    //   country: "Chicago, IL",
    //   para: "Thanks so much! My ia was great and delivery was super fast too. Would definitely recommend ItemScribe and will definitely be ordering again. The ia arrived in a timely manner in perfect condition.",
    // },
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
              loop
              effect={"coverflow"}
              grabCursor={true}
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
                500: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2.2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2.8,
                },
              }}>
              {successData.map((item, val) => (
                <SwiperSlide key={val}>
                  <SuccessCard key={item.id} item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Success;
