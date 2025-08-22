import { Avatar, Button, Form, Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

function Message() {
  return (
    <Layout>
       <Header style={{ color: 'white' }} className='header'>
              Message Page
            </Header>
            <Layout style={{ padding: '24px', minHeight: '280px',color: 'white',backgroundColor: '#141625' }}>
              This is the Message page.
               <Sider style={{ background: '#3d3431ff', width: 200,color: 'white',margin:`0` }}>
            <div style={{ color: 'white', padding: '16px', fontSize: '24px' }}>
              Messanger
            </div>
            <div style={{ color: 'white', padding: '16px', }}>
               Online 
            </div>
            {/* Add your navigation items here */}
            <div style={{ color: 'white', padding: '16px' }} className='nav-active '>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg" />  Nitali
            </div>
                  <div style={{ color: 'white', padding: '16px' }} className='nav-active '>
            <Avatar src="https://www.cabi.org/wp-content/uploads/Ivan-Rwomushana-scaled-e1709824132749.jpg" />  Nitali
            </div>
                  <div style={{ color: 'white', padding: '16px' }} className='nav-active '>
            <Avatar src="https://media.licdn.com/dms/image/v2/C4E03AQHPaliUzfykrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1588692462059?e=2147483647&v=beta&t=v4akVQk4LuB0QJnQUV55ikzvCD9zUQIQXunUM7KUW20" />  Nitali
            </div>  
            </Sider>
            <Content style={{ margin: '0', padding: 24, minHeight: 360, background: '#fff' }}>
              <h1>Backem</h1>
                <p>Hello, how are you?</p>
                <p>What are you doing?</p>
                <p>Let's meet tomorrow.</p>
                <p>Sure, what time?</p>
                <p>How about 3 PM?</p>
                <p>Sounds good, see you then!</p>
                <p>Don't forget to bring the documents.</p>
                <p>I will, thanks for the reminder!</p>
                <p>See you tomorrow!</p>        
                <Form>
                    <Form.Item flex>
                        <input type="text" placeholder='Type a message...' style={{ width: '100%', padding: '8px' }} />
                        <Button type="primary" style={{ marginTop: '8px' }}>Send</Button>
                    </Form.Item>

                </Form>

            </Content>  

            </Layout>

    </Layout>
  )
}

export default Message