import styles from './FooterBottom.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('container-top')}>
          <div className={cx('logo')}>
            <img src="../../../../../images/bidouno.png" alt="" />
          </div>
          <div className={cx('get-app')}>
            <Link>
              <img src="../../../../../images/app/android.png" alt="" />
            </Link>
            <Link>
              <img src="../../../../../images/app/ios.png" alt="" />
            </Link>
          </div>
        </div>
        <div className={cx('container-middle')}>
          <div className={cx('row')}>
            <div className={cx('information')}>
              <h5>Information</h5>
              <ul>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Home Page
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Why Choose Us
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Product
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Contact Us
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Blog
                </Link>
              </ul>
            </div>
            <div className={cx('policy')}>
              <h5>Policy</h5>
              <ul>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Privacy Policy
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Refund Policy
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Cookie Policy
                </Link>
                <Link className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  Terms & Conditions
                </Link>
              </ul>
            </div>
            <div className={cx('contact-support')}>
              <h5>Contact Support</h5>
              <ul>
                <li>
                  <p>Call Buy:</p>
                  <span>1800.1060</span>
                </li>
                <li>
                  <p>Complain:</p>
                  <span>1800.1062</span>
                </li>
                <li>
                  <p>Guarantee:</p>
                  <span>1800.1064</span>
                </li>
              </ul>
            </div>
            <div className={cx('social-media')}>
              <h5>Social-Media</h5>
              <ul>
                <Link>
                  <FontAwesomeIcon icon={faSquareFacebook} beatFade className={cx('facebook')} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faSquareTwitter} beatFade className={cx('twitter')} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} beatFade className={cx('instagram')} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('copy-right')}>
          <p>
            Copyright © 2023 &nbsp;
            <Link className={cx('your-website')}>YourWebsite</Link>
            &nbsp; All Rights Reserved.
          </p>
          <Link onClick={scrollToTop} className={cx('back-to-top')}>
            Back To Top
            <FontAwesomeIcon icon={faChevronUp} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
