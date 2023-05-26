import styles from './Combine.module.scss';
import classNames from 'classnames/bind';
import Blog from '../Product/Blog/Blog';
import DailyDeals from '../Product/DailyDeals/DailyDeals';
const cx = classNames.bind(styles);

function Combine() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <Blog />
          <DailyDeals />
        </div>
      </div>
    </div>
  );
}

export default Combine;
