import React from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const ButtonComp = () => {
    return (
        <div>
            <Button type='default' size="small">Primary</Button>
            <Button icon={<DownloadOutlined />} type="primary" shape='circle' />
            <Button type='default' loading >Loading</Button>
            <Button type="dashed" danger>   Dashed </Button>
        </div>
    )
}

export default ButtonComp
