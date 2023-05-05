import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import styles from './BannerCategory.module.scss';
import classNames from 'classnames/bind';

import databanner from './DataBannerCategory';

const cx = classNames.bind(styles);

function BannerCategory() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => {
      return <ul>{dots}</ul>;
    },
  };
  return (
    <div className={cx('banner')}>
      <div className={cx('menu-banner')}>
        <ul>
          <li>
            <Link>Daily Deals</Link>
          </li>
          <li>
            <Link>Top Seller</Link>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <Link>New Arrivals</Link>
          </li>
          <li>
            <Link>WishList</Link>
          </li>
        </ul>
      </div>
      <div className={cx('slider-banner')}>
        <Slider {...settings} className={cx('slick-slider')}>
          {databanner.map((value, index) => {
            return (
              <div className={cx('container')} key={index}>
                <div className={cx('content')}>
                  <h1>{value.title}</h1>
                  <span>up to {value.discount}</span>
                  <p>{value.description}</p>
                  <Link className={cx('custom-btn')}>
                    Shop now
                  </Link>
                </div>
                <div className={cx('img-banner')}>
                  <img src={value.image} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default BannerCategory;
