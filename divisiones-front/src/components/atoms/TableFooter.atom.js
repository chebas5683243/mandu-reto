import Resources from "../../constants/Resources.es.constants";

const TableFooter = ({numberRegisters}) => {
  return (
    <span>{Resources.TotalDivisions} {numberRegisters}</span>
  );
}
 
export default TableFooter;