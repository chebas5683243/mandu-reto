import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { Input, Radio, Select } from "antd";
import { useState } from "react";
import { selectItems } from "../../constants/OrganizationTableColumns.constants";
import "../../styles/molecules/OrganizationSearchForm.style.less";
import Resources from "../../constants/Resources.es.constants";

const OrganizationSearchForm = ({ searchDivisions }) => {

  const [selectedColumn, setSelectedColumn] = useState("name");
  const [searchText, setSearchText] = useState("");

  const handleSelectChange = (value) => {
    setSelectedColumn(value);
  }

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleOnSumit = (e) => {
    e.preventDefault();
    searchDivisions({
      name: null,
      upper_division_name: null,
      level: null,
      [selectedColumn]: [searchText]
    });
  }

  return (
    <div className='top-container'>
      <Radio.Group value="list">
        <Radio.Button value="list">{Resources.List}</Radio.Button>
        <Radio.Button value="tree">{Resources.Tree}</Radio.Button>
      </Radio.Group>
      <form className='search-container' onSubmit={handleOnSumit}>
        <div style={{ display: 'flex' }}>
          <Select
            value={selectedColumn}
            onChange={handleSelectChange}
            style={{ width: 160 }}>
            {selectItems.map(item => (
              <Select.Option key={item.value} value={item.value}>{item.description}</Select.Option>
            ))}
          </Select>
        </div>
        <Input
          placeholder={Resources.Search}
          value={searchText}
          name="searchText"
          onChange={handleInputChange}
          style={{ width: 210 }}
          suffix={<SearchOutlined style={{ color: '#999' }} />} />
        <button hidden />
      </form>
    </div>
  );
}

export default OrganizationSearchForm;