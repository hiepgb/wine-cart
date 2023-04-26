
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <HeaderTop />
      <HeaderMiddle />
    </header>
  );
}

export default Header;
