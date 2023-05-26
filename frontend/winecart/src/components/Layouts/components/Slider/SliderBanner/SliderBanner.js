import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DataSlider from './DataSlide';

const cx = classNames.bind(styles);
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('next')}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('prev')}>
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SliderBanner() {
  return (
    <div className={cx('home-slide')}>
      <div className={cx('container')}>
        <Slider {...settings} className={cx('slick-slider')}>
          {DataSlider.map((value, index) => {
            return (
              <div className={cx('box-slider')} key={index}>
                <img src={value.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBanner;
