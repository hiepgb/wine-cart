import * as Yup from 'yup';

export const validationReview = Yup.object({
  fullName: Yup.string().min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters').required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  comment: Yup.string().required('Required'),
});
