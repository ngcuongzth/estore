import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import styled from "styled-components/macro";
import CardSlideItem from "../CardSlideItem";
import { breakpoints, colors } from "../../styled/variables";


const SlideProduct = ({ products, title }) => {
  return (
    <Slider className="container">
      <Swiper
        className="my-swiper"
        grabCursor={true}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1200: {
            width: 1200,
            slidesPerView: 2,
          },
        }}
        spaceBetween={15}
        navigation={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        speed={1500}
        slidesPerGroupAuto={true}
        modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
      >
        {products !== undefined &&
          products.map((item) => {
            const { id } = item;
            return <SwiperSlide key={id}>
              <CardSlideItem data={item} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </Slider>
  )
}

const Slider = styled.section`

`

const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.title};
  @media screen and (max-width: ${breakpoints.large}){
    font-size: 2.2rem;
  }
`

export default SlideProduct