import { AreaChartOutlined, BarChartOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";



export const Root = [
    {
        icon: <HomeOutlined />,
        path: '/dashboard',
        title: 'Bosh sahifa'
    },
    {
        icon: <BarChartOutlined />,
        path: '/dashboard/pointers',
        title: "Ko'rsatgichlarim"
    },
    {
        icon: <AreaChartOutlined />,
        path: '/dashboard/reyting',
        title: 'Reyting'
    },
    {
        icon: <SettingOutlined />,
        path: '/dashboard/settings',
        title: 'Sozlamalar'
    },
]