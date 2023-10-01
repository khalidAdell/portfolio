import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimoial.css";

const Testimoial = () => {
  return (
    <section className="section testimoial" id="testimoial">
      <div className="--text-center">
        <h1 className="section-title">Testimoial</h1>
        <p className="section-subtitle">My technical level</p>
      </div>
      <div className="testimonial-container container">
        <Swiper
          className="testimonial-swipper"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial-card">
              <img src="./images/myphoto.jpeg" alt="" />
              <h3 className="testimonial-card-name">Adel Sobhy</h3>
              <p>
                A realy good job, all aspect of the project followed step by
                step and with a good and great result
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src="./images/myphoto.jpeg" alt="" />
              <h3 className="testimonial-card-name">Salem Taha</h3>
              <p>
                A realy good job, all aspect of the project followed step by
                step and with a good and great result
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src="./images/myphoto.jpeg" alt="" />
              <h3 className="testimonial-card-name">3laa Omran</h3>
              <p>
                A realy good job, all aspect of the project followed step by
                step and with a good and great result
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimoial;
