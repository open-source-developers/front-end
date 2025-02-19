import React from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Tabs } from "antd";
import logo from "../../assets/icons/logo.svg";
import backgroundImg from "../../assets/images/landing-page-background.jpg";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import {
  LandingContentContainer,
  AuthContainer,
  ProjectLogo,
  StyledCol
} from "./LandingPage.styles";

const { TabPane } = Tabs;

const Auth = ({ history }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <AuthContainer>
      <Col span={20} offset={2}>
        {/* TEMPORARY PLACEHOLDER FOR LOGO */}
        <ProjectLogo src={logo} alt="" />
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <LoginForm history={history} />
          </TabPane>
          <TabPane tab="Register" key="2">
            <RegisterForm history={history} />
          </TabPane>
        </Tabs>
      </Col>
    </AuthContainer>
  );
};

const LandingContent = () => (
  <LandingContentContainer>
    <img src={backgroundImg} alt="logo" />
  </LandingContentContainer>
);

const LandingPage = props => {
  return (
    <Row style={{ position: "relative" }}>
      <StyledCol xs={0} md={12} lg={16} background="#3b5999">
        <LandingContent />
      </StyledCol>
      <StyledCol xs={24} md={12} lg={8} background="#fefdf9">
        <Auth history={props.history} />
      </StyledCol>
    </Row>
  );
};

export default LandingPage;
