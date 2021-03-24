import React, {useState} from 'react';
import { Progress } from 'antd';
const ProgressBar = ({title}) => {
    const [progress, setProgress] = useState(0);
    setTimeout(() => {
        if(progress < 95){
            setProgress(progress+3);
        }
    }, 3000);
    return (
        <div style={{width:'25%', padding:'5px',position: 'fixed', bottom: '0', right:'0'}}>
            <h4>{title}</h4>
        <Progress percent={progress} size="small" status="active" />
        </div>
    )
}
export default ProgressBar;