import React from 'react'
import { Avatar, Breadcrumb, Button, Card , Col, Flex, Input, Layout, Row, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import {CustomerServiceOutlined, DashboardOutlined, InfoCircleFilled, IssuesCloseOutlined, MoneyCollectOutlined, SearchOutlined, SettingOutlined, ShoppingFilled, UserOutlined, WalletOutlined} from '@ant-design/icons'
import './App.css'
import Title from 'antd/es/skeleton/Title'
import Link from 'antd/es/typography/Link'
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
     
        <Layout>
          <Sider style={{ background: '#1E223B', width: 200,color: 'white'}}>
            <div style={{ color: 'white', padding: '16px', fontSize: '24px' }}>
              CRM System
            </div>
            <div style={{ color: 'white', padding: '16px', }}>
               Menu 
            </div>
            {/* Add your navigation items here */}
            <div style={{ color: 'white', padding: '16px'}} className='nav-active '>
              <DashboardOutlined /> Dashboard
            </div>
            <div style={{ color: 'white', padding: '16px' }} className='nav-active'>
             <CustomerServiceOutlined /> Customers
            </div>
            <div style={{ color: 'white', padding: '16px' }} className='nav-active'>
              <SettingOutlined /> Settings
            </div>
            <div style={{ color: 'white', padding: '16px' }} className='nav-active'>
             <IssuesCloseOutlined /> Reports
            </div>  
            <div style={{ color: 'white', padding: '16px' }} className='nav-active'>
             <InfoCircleFilled /> Help
            </div>
          </Sider>
        
          <Content style={{background:"#141625",color: 'white'}}>
            <Header style={{ color: 'white' }} className='header'>
              <Input
                placeholder="Search..."
                className='search-input'
                prefix={<SearchOutlined />}
                style={{ width: 300, marginLeft: 16, borderRadius: '4px' }}
              />  
            <div style={{ float: 'right', color: 'white' }}>
              <Avatar
              
                style={{ backgroundColor: '#87d068', marginRight: 16 }}
                icon={<UserOutlined />}>User Name</Avatar>
              <Button
              
                type="primary"
                danger
                onClick={() => alert('Logout clicked')}
              style={{ marginRight: 16 }}>Logout</Button>
            </div>            

              
            </Header>
            <Content style={{ padding: '24px', minHeight: '280px',color: 'white',backgroundColor: '#141625' }}>
              <Breadcrumb
              separator=">"
              className='breadcrumb'
              
              items={[
                { title: 'Home' },
                { title: 'Dashboard', },
                { title: '' },
              ]}
              style={{ marginBottom: 16, color: 'white' } }

              />
              
              <Typography.Title level={3} style={{ color: 'white' }}>
                Dashboard
              </Typography.Title>


<Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={6}>
                  <Card  variant="borderless" style={{ backgroundColor: '#1E223B', color: 'white' }}>
                   <Flex justify="space-between" align="center">
 <Typography.Text style={{color:"gray"}}>Total Customers: 150</Typography.Text>
                    <Typography style={{ color: '#87d068', marginLeft: 8 }}>
                      +10%
                    </Typography>

                    </Flex>
                    <Typography.Title level={3} style={{ color: 'white' }}>
                     $589.98k
                    </Typography.Title>

                    <Flex justify="space-between" align="center">
                      
                      <Link type="link" style={{ color: '#5D5FEF' }}>
                        View Details
                      </Link>
                    <Button type="link" style={{ color: '#87d068',padding:'20px',backgroundColor: 'rgba(25, 251, 44, 0.2)',borderRadius:'4px' }}>
                        <MoneyCollectOutlined />
                      </Button>

                    </Flex>


                  </Card >
                </Col>
                 <Col span={6}>
                  <Card  variant="borderless" style={{ backgroundColor: '#1E223B', color: 'white' }}>
                   <Flex justify="space-between" align="center">
 <Typography.Text style={{color:"gray"}}>Orders</Typography.Text>
                    <Typography style={{ color: '#87d068', marginLeft: 8 }}>
                      +15%
                    </Typography>

                    </Flex>
                    <Typography.Title level={3} style={{ color: 'white' }}>
                    +45
                    </Typography.Title>

                    <Flex justify="space-between" align="center">
                      
                      <Link type="link" style={{ color: '#5D5FEF' }}>
                        View Details
                      </Link>
                    <Button type="link" style={{ color: '#2df5e4ff',padding:'20px',backgroundColor: 'rgba(46, 229, 249, 0.2)',borderRadius:'4px' }}>
                       <ShoppingFilled />
                      </Button>

                    </Flex>


                  </Card >
                </Col>
                 <Col span={6}>
                  <Card  variant="borderless" style={{ backgroundColor: '#1E223B', color: 'white' }}>
                   <Flex justify="space-between" align="center">
 <Typography.Text style={{color:"gray"}}>Total Customers: +150</Typography.Text>
                    <Typography style={{ color: '#87d068', marginLeft: 8 }}>
                      +10%
                    </Typography>

                    </Flex>
                    <Typography.Title level={3} style={{ color: 'white' }}>
                     145
                    </Typography.Title>

                    <Flex justify="space-between" align="center">
                      
                      <Link type="link" style={{ color: '#5D5FEF' }}>
                        View Details
                      </Link>
                    <Button type="link" style={{ color: '#ccf34eff',padding:'20px',backgroundColor: 'rgba(212, 240, 1, 0.2)',borderRadius:'4px' }}>
                       <UserOutlined />
                      </Button>

                    </Flex>


                  </Card >
                </Col>
                 <Col span={6}>
                  <Card  variant="borderless" style={{ backgroundColor: '#1E223B', color: 'white' }}>
                   <Flex justify="space-between" align="center">
 <Typography.Text style={{color:"gray"}}>Balance</Typography.Text>
                    <Typography style={{ color: '#87d068', marginLeft: 8 }}>
                      +0.00%
                    </Typography>

                    </Flex>
                    <Typography.Title level={3} style={{ color: 'white' }}>
                     $12,500.00
                    </Typography.Title>

                    <Flex justify="space-between" align="center">
                      
                      <Link type="link" style={{ color: '#5D5FEF' }}>
                        View Details
                      </Link>
                    <Button type="link" style={{ color: '#3b17efff',padding:'20px',backgroundColor: 'rgba(32, 0, 135, 0.2)',borderRadius:'4px' }}>
                      <WalletOutlined />
                      </Button>

                    </Flex>


                  </Card >
                </Col>
              </Row>
        
            </Content>
 
          </Content>
        </Layout>
    </Layout>
  )
}

export default App