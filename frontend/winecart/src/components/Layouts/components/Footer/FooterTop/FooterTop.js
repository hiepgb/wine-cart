import { Link } from 'react-router-dom';

import styles from './FooterTop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterTop() {
  return (
    <div className={cx('top-display')}>
      <div className={cx('followed-left')}>
        <div className={cx('social')}>
          <h3 className={cx('text-white')}>Follow Us On Instagram</h3>
          <Link className={cx('btn-follow')}>Follow</Link>
        </div>
      </div>
      <div className={cx('right')}>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
        <div className={cx('item-img')}>
          <img src="../../../../../images/footer/footer2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
