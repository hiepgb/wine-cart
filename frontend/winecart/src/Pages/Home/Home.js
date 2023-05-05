import Category from '~/Layouts/components/Category/Category';
import TopPick from '~/Layouts/components/Product/TopPicks/TopPicks';
import SliderBanner from '~/Layouts/components/Slider/SliderBanner/SliderBanner';
import SliderFlash from '~/Layouts/components/Slider/SliderFlash/SliderFlash';

function Home() {
  return (
    <div>
      <SliderBanner />
      <SliderFlash />
      <Category />
      <TopPick />
    </div>
  );
}

export default Home;
