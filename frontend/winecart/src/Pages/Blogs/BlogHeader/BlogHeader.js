import classNames from 'classnames/bind';
import styles from './BlogHeader.module.scss';
const cx = classNames.bind(styles);

function BlogHeader() {
  return (
    <div className={cx('blog-wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sub-header')}>
          <h1>Blog</h1>
          <div className={cx('breadcrumb')}>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
