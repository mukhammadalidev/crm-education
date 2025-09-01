import React, { createContext, useEffect, useState } from 'react'
import Sider from 'antd/es/layout/Sider'
import {CustomerServiceOutlined, DashboardOutlined, InfoCircleFilled, IssuesCloseOutlined, MoneyCollectOutlined, PlusOutlined, SearchOutlined, SettingOutlined, ShoppingFilled, UserOutlined, WalletOutlined} from '@ant-design/icons'
import './App.css'

import Dashboard from './pages/dashboard/Dashboard'
import { Layout } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'
import Message from './pages/message/Message'
import axios from 'axios'
export const AppContext = createContext();
function App() {

  const [students, setStudents] = React.useState([])
  const [studentLength,setStudentsLenth] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/').then(response => {
      setStudents(response.data)
      setStudentsLenth(response.data.length)
      console.log(response.data)
      
    }).catch(error => {
      console.error('There was an error!', error);
    })
  })
  return (
    <AppContext.Provider value={{students, setStudents,studentLength}}>
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
            <Link to={'/'} style={{ color: 'white', padding: '16px',display:'block'}} className='nav-active '>
              <DashboardOutlined /> Dashboard
            </Link>
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
        
     <Routes>
         <Route path="/" element={ 
      <Dashboard />} />
       <Route path="/message" element={<Message />} />
       <Route path="*" element={<h1>Not Found</h1>} />
     </Routes>
        </Layout>
   
     
     
    </Layout>
    </AppContext.Provider>
  )
}

export default App