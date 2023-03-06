// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import UserNewEditForm from 'src/sections/user/UserNewEditForm';
import BannerNewEditForm from 'src/sections/banner/BannerNewEditForm';
import CategoryNewEditForm from 'src/sections/category/CategoryNewEditForm';
// sections
// import UserNewEditForm from '../../../sections/@dashboard/user/UserNewEditForm';

// ----------------------------------------------------------------------

CategoryCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CategoryCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Create a new banner">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new banner"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Category', href: PATH_DASHBOARD.category.root },
            { name: 'New Category' },
          ]}
        />
        <CategoryNewEditForm />
      </Container>
    </Page>
  );
}
