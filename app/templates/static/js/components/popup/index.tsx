import { notification } from 'antd';
const popUp = (notificationType: any | undefined, title: string, message: string) => {
    notification.open({
      message: title,
      type: notificationType,
      placement: 'bottomRight',
      description: message
    });
  };
export default popUp;