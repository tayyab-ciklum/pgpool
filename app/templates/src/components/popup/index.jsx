import { notification } from 'antd';
const popUp = (notificationType, title, message) => {
    notification.open({
      message: title,
      type: notificationType,
      placement: 'bottomRight',
      description: message,
      duration: 0
    });
  };
export default popUp;