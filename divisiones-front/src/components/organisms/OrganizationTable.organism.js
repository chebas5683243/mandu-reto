import React, { useState } from 'react';
import { Table } from 'antd';
import "../../styles/organisms/OrganizationTable.style.less";
import { organizationTableColumns } from '../../constants/OrganizationTableColumns.constants';
import { getSendParams } from '../../utils/TableUtils';
import { useFetchDivisions } from '../../services/Division.service';
import OrganizationSearchForm from '../molecules/OrganizationSearchForm.molecule';
import TableFooter from '../atoms/TableFooter.atom';

const OrganizationTable = () => {

  const {
    divisions,
    pagination,
    loadingDivisions,
    divisionsNames,
    levels,
    upperDivisionsNames,
    fetchDivisions
  } = useFetchDivisions(true);

  const [tableFilters, setTableFilters] = useState({
    filteredInfo: {},
    sortedInfo: {}
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableFilters({
      filteredInfo: filters,
      sortedInfo: sorter
    })
    let sendParams = getSendParams(pagination, filters, sorter);
    fetchDivisions(sendParams);
  };

  const searchDivisions = (filters) => {
    setTableFilters(p => ({
      ...p,
      filteredInfo: filters
    }));
    let sendParams = getSendParams(pagination, filters, tableFilters.sortedInfo);
    fetchDivisions(sendParams);
  }

  return (
    <div className='info-container'>
      <OrganizationSearchForm searchDivisions={searchDivisions} />
      <Table
        columns={organizationTableColumns(divisionsNames, levels, upperDivisionsNames, tableFilters.filteredInfo)}
        dataSource={divisions}
        rowKey={division => division.id}
        pagination={pagination}
        loading={loadingDivisions}
        onChange={handleTableChange}
        footer={() => <TableFooter numberRegisters={pagination.total} />}
        // scroll={{ y: 200 }}
        // size="small"
        bordered
        rowSelection />
    </div>
  );
}

export default OrganizationTable;