import classNames from 'classnames/bind';
import styles from './CustomLinks.module.scss';
import { NavLink } from 'react-router-dom';
import { menuLinks } from '../../../data/menulink';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function CustomLinks(props) {
  useEffect(() => {}, []);

  return (
    <div className={cx('nav-link')}>
      {menuLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) => (isActive ? cx('menu-item', 'active') : cx('menu-item'))}
        >
          <span>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default CustomLinks;
