import { Link } from 'react-router-dom';

import Slider from 'react-slick';

import styles from './DailyDeals.module.scss';
import classNames from 'classnames/bind';
import DataDaily from './DataDaily';

const cx = classNames.bind(styles);

function DailyDeals() {
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <div className={cx('col-daily')}>
      <div className={cx('title-daily')}>
        <h4>Daily Deals</h4>
      </div>
      <Slider {...settings} className={cx('slick-slider')}>
        {DataDaily.map((value, index) => (
          <div className={cx('product-daily')} key={index}>
            <div className={cx('daily-top')}>
              <div className={cx('daily-babel')}>
                <span>{value.babel} OFF</span>
              </div>
              <div className={cx('daily-img')}>
                <Link>
                  <img src={value.image} alt="" />
                </Link>
                <div className={cx('daily-countdown')}>{value.countdown}</div>
              </div>
            </div>
            <div className={cx('daily-body')}>
              <h5>{value.title}</h5>
              <p>{value.description}</p>
            </div>
            <div className={cx('daily-footer')}>
              <div className={cx('daily-price')}>
                <span>{value.priceNew}</span>
                <span>{value.priceOld}</span>
              </div>
              <Link>Buy Now</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DailyDeals;
