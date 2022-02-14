import Resources from "./Resources.es.constants";
import AddCell from "../components/atoms/AddCell.atom";

export const organizationTableColumns = (divisionsNames, levels, upperDivisionsNames, filteredInfo) => ([
  {
    title: Resources.Division,
    dataIndex: 'name',
    sorter: {
      multiple: 4
    },
    filters: divisionsNames.map(item => ({
      value: item.name,
      text: item.name
    })),
    filteredValue: filteredInfo.name || null,
    filterSearch: true,
  },
  {
    title: Resources.UpperDivision,
    dataIndex: 'upper_division_name',
    render: (upper_division_name) => upper_division_name ? upper_division_name : "-",
    sorter: {
      multiple: 5
    },
    filters: upperDivisionsNames.map(item => ({
      value: item.name,
      text: item.name
    })),
    filteredValue: filteredInfo.upper_division_name || null,
    filterSearch: true,
  },
  {
    title: Resources.Collaborators,
    dataIndex: 'collaborators',
    sorter: {
      multiple: 3
    },
  },
  {
    title: Resources.Level,
    dataIndex: 'level',
    sorter: {
      multiple: 2
    },
    filters: levels.map(item => ({
      value: item.level,
      text: item.level
    })),
    filteredValue: filteredInfo.level || null,
    filterSearch: true,
  },
  {
    title: Resources.Subdivisions,
    dataIndex: 'n_subdivisions',
    render: (n_divisions) => <AddCell text={n_divisions}/>,
    sorter: {
      multiple: 1
    },
  },
  {
    title: Resources.Ambassador,
    dataIndex: 'ambassador_name',
    render: (ambassador_name) => ambassador_name ? ambassador_name : "-",
  },
]);

export const selectItems = [
  {
    value: "name",
    description: Resources.Division
  },
  {
    value: "upper_division_name",
    description: Resources.UpperDivision
  },
  {
    value: "level",
    description: Resources.Level
  },
]