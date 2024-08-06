"use client"
import { Menu, ConfigProvider } from "antd";

const SiderCom = () => {
    const items = [
        {
            key: '1',
            label: 'Home',
        },
        {
            key: '2',
            label: 'Product',
        },
        {
            key: '3',
            label: 'Profile',
        },
    ];

    // Design token
    const menuToken = {
        components: {
            Menu: {
                colorItemBg: '#20facb',
                colorItemBgHover: '#ff16d0',
                colorItemBgSelected: '#fa205e',
                itemColor: "#fff2f6",
                itemHoverColor: "#fff2f6",
                itemActiveColor: "#fff2f6",
            },
        },
    };

    const handleClick = (e) => {
        console.log('click ', e);
    };

    return (
        <ConfigProvider theme={menuToken}>
            <div>
                <h1>This is Sider</h1>
                <Menu
                    onClick={handleClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </ConfigProvider>
    );
};

export default SiderCom;
