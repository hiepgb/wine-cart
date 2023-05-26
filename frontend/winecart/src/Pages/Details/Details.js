import { useLayoutEffect } from 'react';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import DetailsProduct from './DetailsProduct/DetailsProduct';
import TabLists from './Tab/Tabs';
import RelatedProducts from '~/components/Layouts/components/Product/RelatedProducts/RelatedProduct';

function Details() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <DetailsHeader />
      <DetailsProduct />
      {/* <div className={cx('section')}>
        <div className={cx('info-container')}>
          <div className={cx('row')}>
            <SideBar />
            <div className={cx('information')}>
              <Outlet />
            </div>
          </div>
        </div>
      </div> */}
      <TabLists />
      <RelatedProducts />
    </>
  );
}

export default Details;
