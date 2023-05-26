import styles from './Information.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Information() {
  return (
    <div className={cx('container-information')}>
      <div className={cx('row')}>
        <div className={cx('col')}>
          <div className={cx('content')}>
            <h5 className={cx('title')}>Guaranteed Rose Wine</h5>
            <p className={cx('description')}>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('content')}>
            <h5 className={cx('title')}>Guaranteed Rose Wine</h5>
            <p className={cx('description')}>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('content')}>
            <h5 className={cx('title')}>Guaranteed Rose Wine</h5>
            <p className={cx('description')}>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
