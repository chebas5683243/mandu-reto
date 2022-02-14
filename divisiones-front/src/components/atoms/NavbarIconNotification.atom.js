import { Badge } from 'antd';
import "../../styles/atoms/NavbarIconNotification.style.less";

const NavbarIconNotification = ({ icon, count }) => {
  return (
    <div className='notification-container'>
      <Badge count={count}>
        {icon}
      </Badge>
    </div>
  );
}

export default NavbarIconNotification;