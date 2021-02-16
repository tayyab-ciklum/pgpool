import { notification } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectError, selectSuccess } from '../../redux-sagas/app.selector';
const openNotification = (notificationType: any | undefined, title: string, message: string) => {
  notification.open({
    message: title,
    type: notificationType,
    placement: 'bottomRight',
    description: message
  });
}
const PopUp = () => {
  useEffect(() => {
    {error ? openNotification('error', 'Error', 'Unexpected Error!'): null}
    {success ? openNotification('success','Success', 'Request handled Successfully'): null}
  })
  const error = useSelector(
        selectError,
        shallowEqual
      ) as any;
      const success = useSelector(
        selectSuccess,
        shallowEqual
      ) as any;
      return (null)
  };
export default PopUp;