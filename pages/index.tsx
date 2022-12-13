import React, { useCallback, useMemo } from 'react';
import moment from 'moment-timezone';
import type { NextPage } from 'next';

import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { openDonate } from 'src/redux/modalDonate';

import Layout from 'src/components/Layout';
import { useCompany } from 'src/hooks/company';
import di from 'server/container';

import { ModalDonate } from 'src/components/ModalDonate';
import { useDispatch } from 'react-redux';
import { IDonateForm, ITableField, ModalAction } from 'src/constants';
import { CustomTable } from 'src/components/CustomTable';
import { useDonation } from 'src/hooks/donation';

const Home: NextPage = (props) => {
  const { data, error } = useCompany();
  const { trigger } = useDonation();
  const dispatch = useDispatch();

  const loading = !data && !error;
  console.log(
    'data',
    data?.data.filter((el) => el.status == 'active')
  );
  const filteredData = data
    ? data.data.filter((el) => el.status == 'active')
    : data;

  const handleActionClick = useCallback(
    async (action: ModalAction, data: IDonateForm, company: any) => {
      await trigger({ ...data, companyId: company.id });
    },
    []
  );

  const fields: ITableField[] = useMemo(
    () => [
      {
        title: 'Compaign Name',
        align: 'left',
        field: 'name',
      },
      {
        title: 'Goal',
        align: 'center',
        field: 'goal',
      },
      {
        title: 'Status',
        align: 'center',
        field: 'status',
      },
      {
        title: 'Owner',
        align: 'left',
        field: (row: any) => row.owner.name,
      },
      {
        title: 'Expired',
        align: 'right',
        field: (row: any) => moment.unix(row.expirationDate).format('LL'),
      },
      {
        title: 'Action',
        align: 'right',
        field: (row: any) => (
          <Button
            size="small"
            startIcon={<MonetizationOnIcon />}
            onClick={() => dispatch(openDonate(row))}
          >
            Donate
          </Button>
        ),
      },
    ],
    [data]
  );

  return (
    <Layout>
      <CustomTable data={filteredData} fields={fields} />
      <ModalDonate onActionClick={handleActionClick} />
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  return di('CompanyController').run(req, res);
}

export default Home;
