import React from 'react';
import { Card, Row, Col, Typography, Avatar, Tag } from 'antd';
import { TeamOutlined, RocketOutlined, HeartOutlined, TrophyOutlined } from '@ant-design/icons';
import './teamSection.css';
import teamPhoto from '../../assets/5422726915548119153.jpg'

const { Title, Paragraph } = Typography;

const TeamSection: React.FC = () => {

  return (
    <div className="team-section">
      <div className="team-section__container">
        <Card className="team-section__card">
          <Row gutter={[48, 32]} align="middle">
            {/* Левая колонка - Информация о команде */}
            <Col xs={24} lg={12}>
              <div className="team-section__info">
                <div className="team-section__header">
                  <TeamOutlined className="team-section__icon" />
                  <div>
                    <Title level={1} className="team-section__title">
                      Команда RUST
                    </Title>
                    <div className="team-section__subtitle">
                      Профессионалы, честно
                    </div>
                  </div>
                </div>
                
                <Paragraph className="team-section__description">
                  Молодая команда из 4-х человек. Специализируемся на android и web разработке. Наши преимущества сильная мотивация и ответственность, а так же любовь к тому чем мы занимаемся, которые с лихвой компенсируют наши недостатки в опыте. При работе с нами вы получите не только положительные эмоции и блестяще выполненную работу но и полный покет технической документации. Мы ручаемся за качество своей работы и сервис. Выбирайте нас и мы сделаем всё возможное что бы работа с нами была простой и приятной.
                </Paragraph>

                <div className="team-section__values">
                  <Title level={4} className="team-section__values-title">
                    Используемые технологии:
                  </Title>
                  <div className="team-section__tags">
                    <Tag  color="blue" className="team-section__tag">
                        Android Studio
                    </Tag>
                    <Tag  color="pink" className="team-section__tag">
                        Kotlin
                    </Tag>
                    <Tag  color="red" className="team-section__tag">
                      React
                    </Tag>
                    <Tag  color="green" className="team-section__tag">
                      Python
                    </Tag>
                    <Tag  color="orange" className="team-section__tag">
                        Postman
                    </Tag>
                    <Tag color="yellow" className="team-section__tag">
                        Docker
                    </Tag>
                  </div>
                </div>

                
              </div>
            </Col>

            {/* Правая колонка - Фото и участники */}
            <Col xs={24} lg={12}>
              <div className="team-section__visual">
                <div className="team-section__photo-container">
                  <img 
                    src={teamPhoto}
                    alt="Наша команда"
                    className="team-section__main-photo"
                  />
                  <div className="team-section__photo-overlay">
                    <TrophyOutlined className="team-section__overlay-icon" />
                    <span>Работаем с 2025 года</span>
                  </div>
                </div>

              </div>


            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default TeamSection;