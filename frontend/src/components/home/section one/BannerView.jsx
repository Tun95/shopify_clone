import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BannerView() {
  // SwiperCore.use([EffectCoverflow, Pagination]);
  // const data = [
  //   {
  //     avatar:
  //       "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/hero4-tiny-small-62178f274627ec1997cd3bc3662ac7956a7804b92666ae2b917ba4445d0acc4b.webp",
  //     name: "Olatunji Akande",
  //     review:
  //       " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
  //   },
  //   {
  //     avatar:
  //       "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/hero4-tiny-small-62178f274627ec1997cd3bc3662ac7956a7804b92666ae2b917ba4445d0acc4b.webp",
  //     name: "Olatunji Akande",
  //     review:
  //       " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
  //   },
  //   {
  //     avatar:
  //       "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/hero4-tiny-small-62178f274627ec1997cd3bc3662ac7956a7804b92666ae2b917ba4445d0acc4b.webp",
  //     name: "Olatunji Akande",
  //     review:
  //       " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
  //   },
  //   {
  //     avatar:
  //       "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/hero4-tiny-small-62178f274627ec1997cd3bc3662ac7956a7804b92666ae2b917ba4445d0acc4b.webp",
  //     name: "Olatunji Akande",
  //     review:
  //       " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam possimus inventore tenetur praesentium. Sint nemo asperiores abreprehenderit neque!",
  //   },
  // ];
  return (
    <section className="banner_view">
      <div className="container">
        <div className="content f_flex">
          <div className="box">
            <div className="watch_btn mt">
              <Link to="" className="l_flex">
                <PlayArrowIcon className="mui_icon" />
                <span>Watch the Shopify story</span>
              </Link>
            </div>
            <div className="header mt">
              <h1>The global commerce platform</h1>
              <h4>
                Build your business with Shopify to sell online, offline, and
                everywhere in between.
              </h4>
            </div>
            <div className="form">
              <form action="" className="form_group c_flex">
                <input
                  type="email"
                  className="input_box"
                  placeholder="Enter your email address"
                />
                <Link className="btn_primary">Start free trial</Link>
              </form>
            </div>
            <div className="small">
              <small>
                Try Shopify free for 3 days, no credit card required. By
                entering your email, you agree to receive marketing emails from
                Shopify.
              </small>
            </div>
          </div>
          <div className="box box_slider">
            <Swiper
              direction="vertical"
              loop
              autoplay={{ delay: 1 }} // Set a very small delay for continuous scrolling
              speed={10000} // Adjust the speed to control the scrolling rate
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerView;
