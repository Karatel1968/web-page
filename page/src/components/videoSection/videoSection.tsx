import React from 'react';
import { Card, Row, Col, Typography, Avatar } from 'antd';
import { PlayCircleOutlined, CheckOutlined } from '@ant-design/icons';
import './videoSection.css'

const { Title, Paragraph } = Typography;

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const PartnersVideo: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'Геи',
      logo: '',
      description: '..............................',
      website: ''
    },
    {
      id: 2,
      name: 'Лесбиянки',
      logo: '',
      description: '...........................',
      website: ''
    },
    {
      id: 3,
      name: 'Трансы',
      logo: '',
      description: '...............................',
      website: ''
    },
    {
      id: 4,
      name: 'ННГУ',
      logo: '',
      description: '........................',
      website: 'http://www.unn.ru/?utm_source%3Dmindbox='
    }
  ];

  /*const videoUrl = "https://www.youtube.com/watch?v=lq0gRP3C1PI&t=1s";*/

  return (
    <div className="partners-video">
      <div className="partners-video__container">
        <div className="partners-video__header">
          <Title level={1} className="partners-video__title">
            О нашей компании
          </Title>
          <Paragraph className="partners-video__subtitle">
            Узнайте больше о нашей миссии и посмотрите, с кем мы сотрудничаем
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Card className="partners-video__card">
              <div className="partners-video__video-header">
                <PlayCircleOutlined className="partners-video__video-icon" />
                <Title level={3} className="partners-video__video-title">
                  Наше видео
                </Title>
              </div>
              <div className='plag'>
          <div className='plag-content'>
            <p className='plag-content-text'>контент будет добавлен позже</p>
          </div>
        </div>
              {/*<div className="partners-video__video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrl}
                  title="О нашей компании"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="partners-video__iframe"
                ></iframe>
              </div>*/}

              <div className="partners-video__features">
                <div className="partners-video__feature">
                  <CheckOutlined className="partners-video__feature-icon" />
                  <span>0+ лет на рынке</span>
                </div>
                <div className="partners-video__feature">
                  <CheckOutlined className="partners-video__feature-icon" />
                  <span>нихуя+ успешных проектов</span>
                </div>
                <div className="partners-video__feature">
                  <CheckOutlined className="partners-video__feature-icon" />
                  <span>Международная(нет) команда</span>
                </div>
                <div className="partners-video__feature">
                  <CheckOutlined className="partners-video__feature-icon" />
                  <span>Сертифицированные специалисты(шизы)</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card className="partners-video__card">
              <Title level={3} className="partners-video__partners-title">
                Наши партнеры
              </Title>
              <Paragraph className="partners-video__partners-subtitle">
                Мы гордимся сотрудничеством с ведущими компаниями отрасли
              </Paragraph>

              <div className="partners-video__partners-list">
                {partners.map((partner) => (
                  <div key={partner.id} className="partners-video__partner-item">
                    <Avatar
                      src={partner.logo}
                      size={50}
                      className="partners-video__partner-logo"
                    />
                    <div className="partners-video__partner-info">
                      <h4 className="partners-video__partner-name">
                        {partner.name}
                      </h4>
                      <p className="partners-video__partner-description">
                        {partner.description}
                      </p>
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="partners-video__partner-link"
                      >
                        Посетить сайт
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default PartnersVideo;