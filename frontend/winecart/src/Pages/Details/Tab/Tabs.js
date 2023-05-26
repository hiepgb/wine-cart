import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import DetailsInFormation from '../DetailsInformation/DetailsInFor';
import Review from '../Review/Review';
const cx = classNames.bind(styles);

function TabLists() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={cx('section')}>
      <div className={cx('tab-container')}>
        <div className={cx('display')}>
          <div className={cx('bloc-tabs')}>
            <button className={toggleState === 1 ? cx('tabs', 'active-tabs') : cx('tabs')} onClick={() => toggleTab(1)}>
              Information
            </button>
            <button className={toggleState === 2 ? cx('tabs', 'active-tabs') : cx('tabs')} onClick={() => toggleTab(2)}>
              Review (25)
            </button>
          </div>
          <div className={cx('content-tabs')}>
            <div className={toggleState === 1 ? cx('content', 'active-content') : cx('content')}>
              <DetailsInFormation />
            </div>
            <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabLists;
