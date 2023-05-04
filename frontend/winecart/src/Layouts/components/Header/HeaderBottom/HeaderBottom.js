import { Link } from 'react-router-dom';

import styles from './HeaderBottom.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderBottom() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <ul className={cx('navbar-nav')}>
          <li>
            <Link>Home Page</Link>
          </li>
          <li>
            <Link>Why Choose Us</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
        <div className={cx('menu')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
