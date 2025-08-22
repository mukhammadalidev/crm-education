
import React, { useState } from 'react'
import { Avatar, Breadcrumb, Button, Card , Col, DatePicker, Flex, Input, Layout, Modal, Row, Select, Slider, Space, Table, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Link from 'antd/es/typography/Link'
import { columns, data } from '../../data'
import { SearchOutlined, UserOutlined, MoneyCollectOutlined, ShoppingFilled, WalletOutlined, PlusOutlined } from '@ant-design/icons'
const { Text } = Typography;
function Dashboard() {

     const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    console.log(data);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('e', e);
        
        // Handle form submission logic here
      };
    
  return (
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
              <Row gutter={16}>
                <Col span={24}style={{ backgroundColor: '#1E223B', padding: '16px', borderRadius: '8px' }}>
                <Button
                onClick={showModal}
                type="primary" style={{ marginBottom: 16, backgroundColor: '#5D5FEF', borderColor: '#5D5FEF',float: 'right' }}>
                <PlusOutlined />  Add New Customer
                </Button>
                 <Modal
        title="Add Stuent"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
          <form>
                   <Input placeholder="Name" style={{ marginBottom: 16 }} />
        <DatePicker placeholder="Date of Birth" style={{ marginBottom: 16, width: '100%' }} />
        <Input placeholder="Telegram ID" style={{ marginBottom: 16 }} />
        <Input placeholder="Course" style={{ marginBottom: 16 }} />
        <Select placeholder="Select Group" style={{ width: '100%', marginBottom: 16 }}>
          <Select.Option value="A1">A1</Select.Option>
          <Select.Option value="B1">B1</Select.Option>
          <Select.Option value="C1">C1</Select.Option>
        </Select>
        
       Active:
        <Slider
        
        defaultValue={0} tooltip={{ formatter: (value) => `${value}%` }} style={{ marginBottom: 16 }} />
          <Space.Compact>
      <Input style={{ width: '20%' }} defaultValue="+998" />
      <Input style={{ width: '80%' }} defaultValue="26888888" />
    </Space.Compact>
    <br />
    <br />
        <Button type="primary" onClick={handleOk}>
          Submit
        </Button>
          </form>
      </Modal>
                  <Table 
                  pagination={{ pageSize: 5 }}
                  rowClassName={()=> 'custom-row'}
                  columns={columns} dataSource={data} />
                </Col>
              </Row>
        
            </Content>
 
          </Content>
  )
}

export default Dashboard