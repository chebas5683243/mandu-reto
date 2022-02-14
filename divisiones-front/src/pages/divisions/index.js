import React from 'react';
import { Button, Tabs } from 'antd';
import "../../styles/pages/divisions/index.style.less";
import Title from '../../components/atoms/Title.atom';
import OrganizationTable from '../../components/organisms/OrganizationTable.organism';
import Resources from '../../constants/Resources.es.constants';
import { DownloadOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons/lib/icons';

const Divisions = () => {

  const { TabPane } = Tabs;

  return (
    <div className='page-container'>
      <div className='page-header'>
        <Title title="Organización" />
        <div className='options-page-header'>
          <Button type='primary' icon={<PlusOutlined />} />
          <Button icon={<DownloadOutlined style={{ color: '#1890ff' }} />} />
          <Button icon={<UploadOutlined style={{ color: '#1890ff' }} />} />
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab={Resources.Divisions} key="1">
          <OrganizationTable />
        </TabPane>
        <TabPane tab={Resources.Collaborators} key="2">
          {Resources.Test}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Divisions;