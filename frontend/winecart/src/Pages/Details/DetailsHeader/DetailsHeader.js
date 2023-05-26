import classNames from 'classnames/bind';
import styles from './DetailsHeader.module.scss';
const cx = classNames.bind(styles);

function DetailsHeader() {
  return (
    <div className={cx('details-wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sub-header')}>
          <h1>Product Details</h1>
          <div className={cx('breadcrumb')}>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;
