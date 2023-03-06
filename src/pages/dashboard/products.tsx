import { ReactElement ,useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { PATH_DASHBOARD } from '../../routes/paths';


import { paramCase } from 'change-case';
import Scrollbar from '../../components/Scrollbar';

import { _productList, _userList } from '../../_mock';

// @mui
import {
  Box,
  Card,
  Table,
  Switch,
  Button,
  Divider,
  TableBody,
  Container,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// layouts
import Layout from '../../layouts';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';

import useTable, { emptyRows } from '../../hooks/useTable';

import useTabs from 'src/hooks/useTabs';

import {
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
} from '../../components/table';
// sections
import  UserTableRow  from '../../sections/user/UserTableRow';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Iconify from 'src/components/Iconify';
import ProductTableRow from 'src/sections/products/ProductTableRow';

// ----------------------------------------------------------------------

ProductList.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------




const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'brand', label: 'Brand', align: 'left' },
  { id: 'actual_price', label: 'actual price', align: 'left' },
  { id: 'sale price', label: 'sale price', align: 'left' },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

ProductList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ProductList() {


  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();


  const { push } = useRouter();

  const [tableData, setTableData] = useState(_productList);


  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('all');

 
  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

 
  const handleEditRow = (id: string) => {
    push(PATH_DASHBOARD.user.edit(paramCase(id)));
  };



  const denseHeight = dense ? 52 : 72;

  const isNotFound = !tableData.length
  const { themeStretch } = useSettings();

  return (
    <Page >
      <Container maxWidth={themeStretch ? false : 'xl'}>

      <HeaderBreadcrumbs
          heading="Product List"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Product', href: PATH_DASHBOARD.product.root },
            { name: 'List' },
          ]}
          action={
            <NextLink href={PATH_DASHBOARD.product.new} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New Product
              </Button>
            </NextLink>
          }
        />



        <Card>
        
      

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              
              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ProductTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.name)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}
