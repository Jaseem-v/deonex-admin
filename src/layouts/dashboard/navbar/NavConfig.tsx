// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Admin', path: '/dashboard/admin', icon: ICONS.dashboard },
      { title: 'Users', path: '/dashboard/user', icon: ICONS.dashboard },
      { title: 'Products', path: '/dashboard/products', icon: ICONS.ecommerce },
      { title: 'Banners', path: '/dashboard/banner', icon: ICONS.ecommerce },
      { title: 'Categories', path: '/dashboard/category', icon: ICONS.analytics },
      { title: 'Coupon', path: '/dashboard/coupon', icon: ICONS.ecommerce },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      // {
      //   title: 'user',
      //   path: '/dashboard/user',
      //   icon: ICONS.user,
      //   children: [
      //     // { title: 'Four', path: '/dashboard/user/four' },
      //     // { title: 'Five', path: '/dashboard/user/five' },
      //     // { title: 'Six', path: '/dashboard/user/six' },
      //   ],
      // },
    ],
  },
];

export default sidebarConfig;
