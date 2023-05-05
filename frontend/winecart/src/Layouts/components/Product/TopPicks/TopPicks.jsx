import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import styles from './TopPicks.module.scss';
import classNames from 'classnames/bind';

import DataTopPicks from './DataTopPick';
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

function TopPick() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>Top Pick</h4>
        </div>
        <div className={cx('grid')}>
          {DataTopPicks.map((value, index) => (
            <div className={cx('content')} key={index}>
              <div className={cx('product-img')}>
                <img src={value.image} alt="" />
              </div>
              <div className={cx('product-body')}>
                <div className={cx('top-shopping')}>
                  <img src={value.babel} alt="" />
                  <div className={cx('border')}>{value.icon}</div>
                </div>
                <h5 className={cx('product-title')}>
                  <Link>{value.link}</Link>
                </h5>
                <div className={cx('product-price')}>
                  <span>{value.price}</span>
                </div>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopPick;
