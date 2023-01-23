import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Table } from 'antd';
import data from '../../data/data.json';
import { 
    StyledSideNav,
    StyledSpace,
    StyledTag,
    StyledNavContainer,
    StyledBodyContainer,
    StyledPage,
    StyledTableContainer,
    StyledInput,
    StyledViewButton,
    PrimaryColumnText,
    SecondaryColumnText,
    StyledHeader,
    StyledLayout,
} from './HomeStyles';
import moment from 'moment';

export default function Home() {

    const [sideNavSelected, setSideNavSelected] = useState('1');

    const [tableData, setTableData] = useState(data);
    
    // SideNav items
    //#region 
    
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setSideNavSelected(e.key);
    };
      
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
        key,
        icon,
        children,
        label,
        type,
        } as MenuItem;
    }
    
    const items: MenuItem[] = [
        getItem('', 'sub0', <MailOutlined />),
        getItem('Dashboard', 'sub1', <MailOutlined />),    
        getItem('Shipments', 'sub2', <AppstoreOutlined />),    
        getItem('Porjects', 'sub3', <SettingOutlined />),
        getItem('Businesses', 'sub4', <SettingOutlined />),        
        getItem('News', 'sub5', <SettingOutlined />),
    ];
    //#endregion

    // DataTable Items
    //#region 

    const ProcessTags = (props: any) => {
        const { text } = props;
        
        switch (text) {
            case 'in progress':
                return <StyledTag color="warning">{text.toUpperCase()}</StyledTag>
        
            case 'confirmed':
                return <StyledTag color="success">{text.toUpperCase()}</StyledTag>
                
            case 'on hold':
                return <StyledTag color="error">{text.toUpperCase()}</StyledTag>

            default:
                return <StyledTag color="default">{text.toUpperCase()}</StyledTag>
        }
    }

    const columns = [
        {
            title: 'Shipment',
            dataIndex: 'shipmentName',
            key: 'shipmentName',
            render: (shipment: any) => <PrimaryColumnText>{shipment}</PrimaryColumnText>
        },
        {
            title: 'Client',
            dataIndex: 'clientName',
            key: 'clientName',
            render: (clientName: any) => <SecondaryColumnText>{clientName}</SecondaryColumnText>
        },
        {
            title: 'Entry date',
            dataIndex: 'entryDate',
            key: 'entryDate',
            render: (entryDate: any) => <SecondaryColumnText>{moment(entryDate).format('DD/MM/YYYY')}</SecondaryColumnText>
        },
        {
            title: 'Shipment date',
            dataIndex: 'shipmentDate',
            key: 'shipmentDate',
            render: (shipmentDate: any) => <SecondaryColumnText>{moment(shipmentDate).format('DD/MM/YYYY')}</SecondaryColumnText>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: any) => <ProcessTags text={status} />
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            render: (value: any) => <SecondaryColumnText>{value}</SecondaryColumnText>
        },
        {
            title: 'Action',
            dataIndex: 'value',
            key: 'value',
            render: () => <StyledViewButton>View</StyledViewButton >
        }
    ];
    
    //#endregion

    // Search Input Items
    //#region 

    const handleSearchChange = (e: any) => {
        const { value } = e.target;

        if (value.length > 0) {
            let sortedData: { shipmentName: string; clientName: string; entryDate: string; shipmentDate: string; status: string; value: number; }[] = [];

            data.map((record) => {
                const { clientName, shipmentName } = record;

                if (clientName.toLowerCase().includes(value) || shipmentName.toLowerCase().includes(value))
                    sortedData.push(record);
            })
            setTableData(sortedData);
        } else setTableData(data);
    }
    
    //#endregion
    
    return (
        <StyledPage>
            <StyledNavContainer>
                <StyledSideNav
                    theme={'dark'}
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[sideNavSelected]}
                    mode="inline"
                    items={items}
                />
            </StyledNavContainer>
            <StyledLayout>
                <StyledHeader>Shipments</StyledHeader>
            </StyledLayout>
            <StyledBodyContainer>
                <StyledInput 
                    placeholder='Search'
                    onChange={handleSearchChange}
                />
                <StyledTableContainer>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        style={{ width: '100vh', paddingLeft: '0rem'}}
                        pagination={{ position: ['bottomRight'] }}
                    />
                </StyledTableContainer>
            </StyledBodyContainer>
        </StyledPage>
    )
}