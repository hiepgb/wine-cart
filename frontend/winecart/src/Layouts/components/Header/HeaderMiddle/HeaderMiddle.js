import { Link } from 'react-router-dom';

import styles from './HeaderMiddle.module.scss';
import classNames from 'classnames/bind';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const cx = classNames.bind(styles);

function HeaderMiddle() {
  return (
    <div className={cx('header-middle')}>
      <div className={cx('container')}>
        <nav className={cx('navbar')}>
          <Link>
            <img src="../../../../images/bidouno.png" alt="" />
          </Link>
          <div className={cx('input-search')}>
            <div className={cx('cates')}>
              <span>All Categories</span>
              <div className={cx('submenu')}>
                <div className={cx('drop-scroll')}>
                  <label>Bottles</label>
                  <label>Engine Service</label>
                  <label>Lights</label>
                  <label>Vintage</label>
                  <label>Red Wine</label>
                  <label>Auto Bike Service</label>
                  <label>Electrical Works</label>
                </div>
              </div>
            </div>
            <div className={cx('input')}>
              <input className={cx('form-input')} type="text" placeholder="Look for Crafted Wine, Auto Bottles" />
              <button className={cx('search')} type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className={cx('controls')}>
            <Link className={cx('your-cart')}>
              <FaShoppingCart />
              <div className={cx('content-cart')}>
                <span>9 items</span>
                <span>200.99$</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderMiddle;
