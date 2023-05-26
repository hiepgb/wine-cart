import { Link } from 'react-router-dom';

import styles from './HeaderBottom.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function HeaderBottom() {
  // const stickyHeader = useRef();
  // useLayoutEffect(() => {
  //   const topHeader = document.getElementById('wrapper-header');
  //   console.log(topHeader);
  //   let fixedTop = stickyHeader.current.offsetTop;
  //   const fixedHeader = () => {
  //     if (window.pageYOffset > fixedTop) {
  //       topHeader.classList.add('sticky');
  //     } else {
  //       topHeader.classList.remove('sticky');
  //     }
  //   };
  //   window.addEventListener('scroll', fixedHeader);

  // }, []);

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const stickyHeader = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = stickyHeader.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div ref={stickyHeader} className={sticky.isSticky ? cx('wrapper', 'sticky') : cx('wrapper-header')}>
      <div className={cx('container')}>
        <ul className={cx('navbar-nav')}>
          <li>
            <Link>Home Page</Link>
          </li>
          <li>
            <Link>Why Choose Us</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className={cx('menu')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
