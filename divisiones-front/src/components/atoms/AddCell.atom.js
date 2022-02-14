import { ReactComponent as AddIcon } from "../../assets/AddIcon.svg";
import "../../styles/atoms/AddCell.style.less";

const AddCell = ({ text }) => {
  return (
    <div className="add-cell-container">
      {text}
      <AddIcon />
    </div>
  );
}

export default AddCell;