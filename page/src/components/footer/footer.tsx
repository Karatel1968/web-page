import React from 'react';
import { Row, Col, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
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
                  <Text className="footer__contact-value">team@RUST.ru</Text>
                </div>
              </div>

              <div className="footer__contact-item">
                <WhatsAppOutlined className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <Text className="footer__contact-label">Telegram</Text>
                  <Text className="footer__contact-value">@RUST_team</Text>
                </div>
              </div>
            </div>
          </Col>
          {/* Дополнительная информация */}
          <Col xs={24} md={12}>
            <div className="footer__info">
              <Title level={4} className="footer__title">
                Команда RUST
              </Title>
              <Text className="footer__description">
                Мы создаем инновационные решения для вашего бизнеса. 
                Свяжитесь с нами для обсуждения вашего проекта.
              </Text>
              
              <div className="footer__social-links">
                <a 
                  href="https://t.me/RUST_team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <WhatsAppOutlined/>
                </a>
                <a 
                  href="mailto:team@RUST.ru" 
                  className="footer__social-link"
                >
                  <MailOutlined />
                </a>
                <a 
                  href="tel:+79991234567" 
                  className="footer__social-link"
                >
                  <PhoneOutlined />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__copyright">
            <Text className="footer__copyright-text">
              © {currentYear} Команда RUST. Все права защищены.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;