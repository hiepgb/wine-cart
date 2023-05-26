import { Link } from 'react-router-dom';

import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const cx = classNames.bind(styles);

function HeaderTop() {
  return (
    <div className={cx('header-top')}>
      <div className={cx('container')}>
        <div className={cx('inner')}>
          <ul className={cx('social')}>
            <li>
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link>
                <FaYoutube />
              </Link>
            </li>
          </ul>
          <ul className={cx('link')}>
            <li>
              <Link className={cx('sign-in')}>Đăng Nhập</Link>
            </li>
            <li>
              <Link className={cx('sign-up')}>Đăng Ký</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
