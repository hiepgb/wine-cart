import classNames from 'classnames/bind';
import styles from './DetailsProduct.module.scss';
import DataDetails from './DataDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DetailsProduct() {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const onChangeInput = (e) => {
    setCount(parseInt(e.target.value !== '' ? e.target.value : '1'));
  };
  return (
    <div className={cx('section')}>
      <div className={cx('container')}>
        {DataDetails.map((data, index) => (
          <div className={cx('row')} key={index}>
            <div className={cx('details-image')}>
              <img src={data.image} alt="" />
            </div>
            <div className={cx('content-product')}>
              <div className={cx('content-top')}>
                <div className={cx('star')}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  {data.stars}
                </div>
                <div className={cx('favorite')}>
                  <FontAwesomeIcon icon={faHeart} className={cx('heart')} />
                </div>
              </div>
              <h3 className={cx('title')}>{data.title}</h3>
              <div className={cx('price')}>
                <span>{data.priceNew}</span>
                <span>{data.priceOld}</span>
              </div>
              <p className={cx('description')}>{data.description}</p>
              <div className={cx('buy-product')}>
                <Link className={cx('btn-buy')}>Buy Now</Link>
                <div className={cx('qty')}>
                  <span className={cx('subtract')} onClick={decrease}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                  <input type="text" value={count} onChange={onChangeInput} />
                  <span className={cx('add')} onClick={increase}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsProduct;
