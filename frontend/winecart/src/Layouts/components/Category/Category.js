import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import { BiCategory } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('category')}>
            <div className={cx('main')}>
              <div className={cx('header')}>
                <h6>
                  <BiCategory />
                  Categories
                </h6>
              </div>
              <div className={cx('body')}>
                <ul>
                  <li className={cx('category-bottles')}>
                    <Link className={cx('hover-name')}>
                      Bottles
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <ul className={cx('child-bottle')}>
                      <li className={cx('child')}>
                        <div className={cx('banner')}>
                          <img src="../../../../images/glass/glass1.png" alt="" />
                          <div className={cx('description')}>
                            <h6>Bottles</h6>
                            <p>Experience automobile service like never before</p>
                          </div>
                        </div>
                        <ul className={cx('name-content')}>
                          <li>
                            <Link>Auto Bottles & Crafted Wine</Link>
                          </li>
                          <li>
                            <Link>Wine Service</Link>
                          </li>
                          <li>
                            <Link>Bike Service</Link>
                          </li>
                          <li>
                            <Link>Engine Service</Link>
                          </li>
                          <li>
                            <Link>Led Lights</Link>
                          </li>
                          <li>
                            <Link>Battery</Link>
                          </li>
                          <li>
                            <Link>Alloy Red Wine</Link>
                          </li>
                          <li>
                            <Link>Smart Lock</Link>
                          </li>
                          <li>
                            <Link>Vintage</Link>
                          </li>
                        </ul>
                        <ul className={cx('name-content')}>
                          <li>
                            <Link>Horns</Link>
                          </li>
                          <li>
                            <Link>IndicatorsParts</Link>
                          </li>
                          <li>
                            <Link>Break Shoe</Link>
                          </li>
                          <li>
                            <Link>Clutch</Link>
                          </li>
                          <li>
                            <Link>Tubes</Link>
                          </li>
                          <li>
                            <Link>Gear Box</Link>
                          </li>
                          <li>
                            <Link>Led Lamps</Link>
                          </li>
                          <li>
                            <Link>Petrol Pipes</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link>Lights</Link>
                  </li>
                  <li className={cx('category-mixed')}>
                    <Link className={cx('hover-name')}>
                      Mixed Wine
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <ul className={cx('child-mixed')}>
                      <li className={cx('child')}>
                        <div className={cx('banner')}>
                          <img src="../../../../images/glass/glass1.png" alt="" />
                          <div className={cx('description')}>
                            <h6>Bottles</h6>
                            <p>Experience automobile service like never before</p>
                          </div>
                        </div>
                        <ul className={cx('name-content')}>
                          <li>
                            <Link>Auto Bottles & Crafted Wine</Link>
                          </li>
                          <li>
                            <Link>Wine Service</Link>
                          </li>
                          <li>
                            <Link>Bike Service</Link>
                          </li>
                          <li>
                            <Link>Engine Service</Link>
                          </li>
                          <li>
                            <Link>Led Lights</Link>
                          </li>
                        </ul>
                        <ul className={cx('name-content')}>
                          <li>
                            <Link>Battery</Link>
                          </li>
                          <li>
                            <Link>Alloy Red Wine</Link>
                          </li>
                          <li>
                            <Link>Smart Lock</Link>
                          </li>
                          <li>
                            <Link>Vintage</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link>Wine Service</Link>
                  </li>
                  <li>
                    <Link>Engine Service</Link>
                  </li>
                  <li>
                    <Link>Red Wine</Link>
                  </li>
                  <li>
                    <Link>Modern Bike Service</Link>
                  </li>
                  <li>
                    <Link>More Categories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
