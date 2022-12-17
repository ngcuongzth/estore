import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styled from "styled-components/macro";
import { bRadius, colors, themes } from "../styled/variables";
import CardItem from "./CardItem";
import Title from "./Title";

const SlideProduct = ({ data, title }) => {
  return (
    <Slider>
      <Container className="container">
        <Title text={title} />
        <Swiper
          className="my-swiper"
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={24}
          navigation={true}
          loop
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          speed={400}
          slidesPerGroupAuto={true}
          modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
        >
          {data !== undefined &&
            data.map((item) => {
              const { id } = item;
              return (
                <SwiperSlide key={id}>
                  <CardItem data={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </Slider>
  );
};

const Slider = styled.section`
  background-image: ${themes.section};
  .swiper{
    border-radius: ${bRadius.b_radius_10};
  }
  .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 1.5rem;
    padding: 10px;
    border-radius: ${bRadius.b_radius_20};
    background-color: ${colors.bg};
    color: ${colors.secondary};
  }
`;
const Container = styled.div`
  padding: 0 2rem;
  padding-bottom: 3.5rem;
`;

export default SlideProduct;
