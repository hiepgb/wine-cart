import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './RelatedProduct.module.scss';
import classNames from 'classnames/bind';
import DataNew from './../NewArrivals/DataNew';
const cx = classNames.bind(styles);

const SampleNextArrow = (props) => {
  const { onClick } = props;
  if (props.currentSlide === props.slideCount - 3) {
    return (
      <div className={cx('control-btn-hidden')} onClick={onClick}>
        <button className={cx('next-hidden')}>
          <FontAwesomeIcon icon={faArrowRight} className={cx('hidden-next')} />
        </button>
      </div>
    );
  }
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('next')}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  if (props.currentSlide === 0) {
    return (
      <div className={cx('control-btn-hidden')} onClick={onClick}>
        <button className={cx('prev-hidden')}>
          <FontAwesomeIcon icon={faArrowLeft} className={cx('hidden-prev')} />
        </button>
      </div>
    );
  }
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('prev')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

const settings = {
  infinite: false,
  autoplay: false,
  adaptiveHeight: 200,
  slidesToShow: 3,
  rows: 1,
  slidesPerRow: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function RelatedProducts() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>Related Products</h4>
        </div>
        <Slider className={cx('slick-slider')} {...settings}>
          {DataNew.map((value, index) => {
            if (value.babel) {
              return (
                <div className={cx('related')} key={index}>
                  <div className={cx('related-babel')}>
                    <FontAwesomeIcon icon={faStar} className={cx('star')} />
                    <span>{value.babel}</span>
                  </div>
                  <div className={cx('related-top')}>
                    <Link to="/details">
                      <img src={value.image} alt="" />
                    </Link>
                  </div>
                  <div className={cx('related-body')}>
                    <h5 className={cx('related-title')}>{value.title}</h5>
                    <div className={cx('price')}>
                      <span>{value.price}</span>
                    </div>
                    <p>{value.description}</p>
                  </div>
                  <div className={cx('related-footer')}>
                    <div className={cx('btn')}>
                      <Link className={cx('add-btn')}>Add To Cart</Link>
                      <Link className={cx('view-btn')}>Quick View</Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className={cx('related')} key={index}>
                  <div className={cx('related-discount')}>
                    <span>{value.babelSale}</span>
                  </div>
                  <div className={cx('related-top')}>
                    <Link className={cx('img-related')}>
                      <img src={value.image} alt="" />
                    </Link>
                  </div>
                  <div className={cx('related-body')}>
                    <h5 className={cx('related-title')}>{value.title}</h5>
                    <div className={cx('price')}>
                      <span>{value.priceNew}</span>
                      <span>{value.priceOld}</span>
                    </div>
                    <p>{value.description}</p>
                  </div>
                  <div className={cx('related-footer')}>
                    <div className={cx('btn')}>
                      <Link className={cx('add-btn')}>Add To Cart</Link>
                      <Link className={cx('view-btn')}>Quick View</Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
}

export default RelatedProducts;
