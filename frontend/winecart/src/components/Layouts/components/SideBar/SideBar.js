import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import CustomLinks from '~/components/custom/CustomLink/CustomLinks';
import { menuLinks } from '~/data/menulink';
const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx('info-list')}>
      <CustomLinks menuLinks={menuLinks} />
    </div>
  );
}

export default SideBar;
