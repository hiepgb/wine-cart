import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}

export default Header;
