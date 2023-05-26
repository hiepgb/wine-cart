import Category from '~/components/Layouts/components/Category/Category';
import Combine from '~/components/Layouts/components/Combine/Combine';
import Information from '~/components/Layouts/components/Information/Information';
import NewArrivals from '~/components/Layouts/components/Product/NewArrivals/NewArrivals';
import TopPick from '~/components/Layouts/components/Product/TopPicks/TopPicks';
import SliderBanner from '~/components/Layouts/components/Slider/SliderBanner/SliderBanner';
import SliderFlash from '~/components/Layouts/components/Slider/SliderFlash/SliderFlash';

function Home() {
  return (
    <div>
      <SliderBanner />
      <SliderFlash />
      <Category />
      <Information />
      <NewArrivals />
      <TopPick />
      <Combine />
    </div>
  );
}

export default Home;
