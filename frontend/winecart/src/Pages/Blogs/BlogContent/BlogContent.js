import { Link } from 'react-router-dom';
import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import DataBlog from '~/components/Layouts/components/Product/Blog/DataBlog';
const cx = classNames.bind(styles);
function BlogContent() {
  return (
    <div className={cx('section')}>
      <div className={cx('container')}>
        <div className={cx('col-blog')}>
          <div className={cx('row-blog')}>
            <div className={cx('col-post')}>
              {DataBlog.map((value, index) => (
                <div className={cx('post')} key={index}>
                  <div className={cx('post-top')}>
                    <Link>
                      <img src={value.image} alt="" />
                    </Link>
                  </div>
                  <div className={cx('post-bottom')}>
                    <div className={cx('post-description')}>
                      <h5>{value.title}</h5>
                      <span>
                        Posted On
                        <p>{value.posted}</p>
                      </span>
                      <p className={cx('description')}>{value.description}</p>
                    </div>
                    <Link className={cx('read')}>Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
