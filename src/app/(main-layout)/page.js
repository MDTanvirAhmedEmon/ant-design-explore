import { Flex, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import SiderCom from '../../components/SiderCom'
import ContentCom from '@/components/ContentCom';
import HeaderCom from '@/components/HeaderCom';

const Home = () => {
  return (
    <Flex>
      <Layout>
        <Sider style={{ height: "100vh" }} width="20%">
          <SiderCom></SiderCom>
        </Sider>
        <Layout>
          <Header style={{ height: "90px", backgroundColor: "#645645" }}><HeaderCom></HeaderCom></Header>
          <Content><ContentCom></ContentCom></Content>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default Home;