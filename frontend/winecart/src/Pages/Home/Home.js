import Category from '~/Layouts/components/Category/Category';
import SliderBanner from '~/Layouts/components/Slider/SliderBanner/SliderBanner';
import SliderFlash from '~/Layouts/components/Slider/SliderFlash/SliderFlash';

function Home() {
  return (
    <div>
      <SliderBanner />
      <SliderFlash />
      <Category />
    </div>
  );
}

export default Home;
