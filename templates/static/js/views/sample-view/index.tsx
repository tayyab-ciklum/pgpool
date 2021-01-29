import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux-sagas/app.action';
const SampleComponent = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <Button type="primary" style={{ float: 'right' }} onClick={() => dispatch(getUser('456789'))}>
            Send a call{' '}
        </Button>
    );
};
export default SampleComponent;
