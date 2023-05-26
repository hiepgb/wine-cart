import ListCategory from './ListCategory/ListCategory';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import BannerCategory from './BannerCategory/BannerCategory';
const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <ListCategory />
          <BannerCategory />
        </div>
      </div>
    </div>
  );
}

export default Category;
