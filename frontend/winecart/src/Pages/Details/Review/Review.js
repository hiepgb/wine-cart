import classNames from 'classnames/bind';
import styles from './Review.module.scss';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, TextareaAutosize } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { validationReview } from '~/Pages/ValidationReview';

import Button from '~/components/Layouts/components/Button/Button';
import DataReview from './DataReview';
import Reviews from '~/components/Layouts/components/Reviews/Reviews';

const cx = classNames.bind(styles);
function Review() {
  const schema = validationReview;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      comment: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    // props.signup(values);
  };
  return (
    <div className={cx('review-content')}>
      <h4>Leave A Review</h4>
      <div className={cx('rating')}>
        <div>ngôi sao</div>
        <span>Your Review</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('comment-form')}>
        <div className={cx('top')}>
          <div className={cx('full-name')}>
            <Controller
              name="fullName"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className={cx('form-Control-Input')}>
                  <TextField
                    className={cx('form-Input')}
                    // {...register}
                    fullWidth
                    onChange={onChange}
                    margin="dense"
                    label="Full Name*"
                    autoComplete="fullName"
                    error={!!errors?.fullName}
                    helperText={errors?.fullName ? errors.fullName.message : null}
                  />
                </div>
              )}
            />
          </div>
          <div className={cx('email')}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className={cx('form-Control-Input')}>
                  <TextField
                    className={cx('form-Input')}
                    // {...register}
                    fullWidth
                    onChange={onChange}
                    margin="dense"
                    label="Email*"
                    autoComplete="email"
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className={cx('bottom')}>
          <TextareaAutosize
            as="textarea"
            placeholder="Type your comment..."
            {...register('Your comments')}
            className={cx('comment')}
          />
        </div>
        <Button brown>Post Review</Button>
      </form>
      <div className={cx('comment-list')}>
        {DataReview.map((data, index) => (
          <Reviews key={index} data={data} />
        ))}
        <Pagination className={cx('pagination')} count={10} shape="rounded" />
      </div>
    </div>
  );
}

export default Review;
