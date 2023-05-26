//Layout
import Blogs from '~/Pages/Blogs/Blogs';
import Details from '~/Pages/Details/Details';
import DetailsInFormation from '~/Pages/Details/DetailsInformation/DetailsInFor';
import Home from '~/Pages/Home/Home';

const publicRoutes = [
  { path: '/', component: Home },
  {
    path: '/details',
    component: Details,
    // childRoute: [{ path: '/information-product', component: DetailsInFormation }],
  },
  { path: '/blog', component: Blogs },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
