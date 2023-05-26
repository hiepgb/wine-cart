import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';

import { TextareaAutosize } from '@mui/material';
import { useState } from 'react';
import Button from '~/components/Layouts/components/Button/Button';

const cx = classNames.bind(styles);

function Reviews(props) {
  const { data } = props;
  const [show, toggleShow] = useState(true);

  return (
    <ul>
      <li className={cx('comment-item')}>
        <img src={data.image} alt="" className={cx('avatar')} />
        <div className={cx('comment-body')}>
          <h5>{data.name}</h5>
          <div className={cx('rating-review')}>
            <span>ngôi sao</span>
          </div>
          <span className={cx('comment-post')}>Posted on: {data.posted}</span>
          <p className={cx('comment-user')}>{data.comment}</p>
          <div className={cx('comment-reply')}>
            <Button comment onClick={() => toggleShow(!show)}>
              Reply
            </Button>
            {show && (
              <div className={cx('reply-user')}>
                <TextareaAutosize
                  as="textarea"
                  placeholder="Type your reply..."
                  //   {...register('Your comments')}
                  className={cx('your-comment')}
                />
              </div>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Reviews;
