import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './SliderFlash.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DataFlash from './DataFlash';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SliderFlash() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    appendDots: (dots) => {
      return <ul>{dots}</ul>;
    },
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('row-width')}>
            <div className={cx('flash-sale-top')}>
              <div className={cx('row')}>
                <div className={cx('content')}>
                  <h3>Flash Sale</h3>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum quam sed sit amet dui.</p>
                  <ul className={cx('timer')}>
                    <li>00</li>
                    <li>00</li>
                    <li>00</li>
                    <li>00</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={cx('flash-sale-bottom')}>
              <div className={cx('row')}>
                <div className={cx('left')}>
                  <div className={cx('content-left')}>
                    <img src="../../../../../images/bottleWines/wine-bottle.png" alt="" />
                    <h5>Guaranteed Rose Wine</h5>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Lorem ipsum dolor sit amet adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={cx('right')}>
                  <div className={cx('home-slide')}>
                    <div className={cx('container')}>
                      <Slider {...settings} className={cx('slick-slider')}>
                        {DataFlash.map((value, index) => {
                          return (
                            <div className={cx('box-slider')} key={index}>
                              <div className={cx('product')}>
                                <div className={cx('product-discount')}>
                                  <span>{value.discount}</span>
                                </div>
                                <div className={cx('product-image')}>
                                  <Link>
                                    <img src={value.image} alt="" />
                                  </Link>
                                </div>
                                <div className={cx('product-content')}>
                                  <h5 className={cx('title')}>{value.title}</h5>
                                  <p>{value.description}</p>
                                </div>
                                <div className={cx('product-footer')}>
                                  <div className={cx('product-price')}>
                                    <span>{value.priceNew}</span>
                                    <span>{value.priceOld}</span>
                                  </div>
                                  <Link className={cx('btn')}>Buy Now</Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderFlash;
