import { Content } from 'antd/es/layout/layout';
import React from 'react';
import UMBreadCrumb from './UMBreadCrumb';

const Contents = ({ children }: { children: React.ReactNode; }) => {
    const base = 'admin';
    return (
        <Content style={{ minHeight: "100vh" }}>
            <UMBreadCrumb
                items={[
                    {
                        label: `${base}`,
                        link: `/${base}`,
                    },
                    {
                        label: "student",
                        link: `/${base}/student`,
                    },
                ]}
            />
            {
                children
            }
        </Content>
    );
};

export default Contents;