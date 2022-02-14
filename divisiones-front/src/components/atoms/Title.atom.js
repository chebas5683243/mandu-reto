import "../../styles/atoms/Title.style.less";

const Title = ({title}) => {
  return (
    <div className='title'>
      <span>{title}</span>
    </div>
  );
}
 
export default Title;