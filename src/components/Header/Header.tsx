import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
const { Header: AntHeader } = Layout;
import { UserOutlined } from '@ant-design/icons';
import { authKey, removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const handleLogout = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button onClick={handleLogout} style={{ border: 'none', color: "red" }}>Logout</Button>
            ),
        },

    ];
    return (
        <AntHeader>
            <Row justify="end">
                <Space wrap size={16}>
                    <Dropdown menu={{ items }} placement="topLeft" >
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                </Space>
            </Row>

        </AntHeader>
    );
};

export default Header;