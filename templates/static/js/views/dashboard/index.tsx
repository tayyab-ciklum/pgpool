import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux-sagas/app.action';
import { Button } from 'antd';
const Dashboard = (): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <>
            <Button type="primary" style={{ float: 'right' }} onClick={() => dispatch(getUser('456789'))}>
                Send a call{' '}
            </Button>
            <p>Dashboard here</p>
        </>
    );
};
export default Dashboard;
