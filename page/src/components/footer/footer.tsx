import React from 'react';
import { Row, Col, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, WhatsAppOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './footer.css';

const { Text, Title } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <Row gutter={[32, 24]} align="middle">
          {/* Контактная информация */}
          <Col xs={24} md={12}>
            <div className="footer__contacts">
              <Title level={4} className="footer__title">
                Свяжитесь с нами
              </Title>
              
              <div className="footer__contact-item">
                <PhoneOutlined className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <Text className="footer__contact-label">Телефон</Text>
                  <Text className="footer__contact-value">+7 (999) 123-45-67</Text>
                </div>
              </div>

              <div className="footer__contact-item">
                <MailOutlined className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <Text className="footer__contact-label">Почта</Text>
                  <Text className="footer__contact-value">team@innovate.ru</Text>
                </div>
              </div>

              <div className="footer__contact-item">
                <WhatsAppOutlined className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <Text className="footer__contact-label">Telegram</Text>
                  <Text className="footer__contact-value">@innovate_team</Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;