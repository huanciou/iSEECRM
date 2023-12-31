import React, { useEffect } from 'react';
import LoginComponent from './LoginComponent';
import LayoutComponent from './LayoutComponent';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ParticleComponent from './ParticleComponent';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Log-In';
  }, []);

  let navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const adminToken = Cookies.get('adminToken');
      console.log(adminToken);
      if (adminToken) {
        navigate('/admin/menuSetup');
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return (
    <div>
      <LayoutComponent>
        <ParticleComponent
          style={{
            zIndex: -999, // 确保粒子效果位于内容之下
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%', // 覆盖整个 Layout
          }}
        />
        <h
          style={{
            display: 'flex',
            justifyContent: 'center',
            minWidth: '1000px',
            fontSize: '40px',
            marginTop: 60,
            marginBottom: 60,
            zIndex: 50,
          }}
        >
          Administrative Backend System
        </h>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            minWidth: '1000px',
          }}
        >
          <LoginComponent />
        </div>
      </LayoutComponent>
    </div>
  );
};

export default LoginPage;
