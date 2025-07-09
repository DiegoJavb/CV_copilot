import React from 'react';
import fondoBlanco from './assets/fondo_blanco.png';
import { Layout, Typography, Row, Col, Card, List, Divider, Menu } from 'antd';
import { useRef } from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const sections = [
  { key: 'contacto', label: 'Contacto' },
  { key: 'educacion', label: 'Educación' },
  { key: 'conocimientos', label: 'Conocimientos' },
  { key: 'experiencia', label: 'Experiencia' },
  { key: 'cursos', label: 'Cursos' },
  { key: 'calificaciones', label: 'Calificaciones' },
];

function App() {
  // Referencias a las secciones
  const refs = {
    contacto: useRef(null),
    educacion: useRef(null),
    conocimientos: useRef(null),
    experiencia: useRef(null),
    cursos: useRef(null),
    calificaciones: useRef(null),
  };

  const handleMenuClick = (e) => {
    const ref = refs[e.key];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout className="cv-ant-layout">
      <Header className="cv-header" style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%', padding: 0 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={sections}
          onClick={handleMenuClick}
          className="cv-navbar"
          style={{ width: '100%', justifyContent: 'center', borderBottom: 'none' }}
        />
      </Header>
      <Content className="cv-content">
        <section className="cv-nombre-img-row">
          <div className="cv-nombre-img-flex">
            <div className="cv-nombre">
              <Title level={2} style={{ color: '#001529', margin: 0 }}>DIEGO BACUY</Title>
              <Title level={4} style={{ color: '#001529', margin: 0 }}>MOBILE SOFTWARE DEVELOPER</Title>
            </div>
            <img src={fondoBlanco} alt="Foto Diego Bacuy" className="cv-img-round" />
          </div>
        </section>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={16}>
            <Card bordered={false} className="cv-card">
              <Paragraph className="cv-summary">
                Como profesional me esfuerzo mucho en aprender y mantenerme al día en el área de desarrollo; además, siempre trato de investigar en documentación importante con el fin de obtener el mejor resultado.
              </Paragraph>
              <Divider orientation="left" ref={refs.contacto}>Contacto</Divider>
              <div ref={refs.contacto} />
              <List size="small">
                <List.Item><Text strong>Celular:</Text> 0984306337</List.Item>
                <List.Item><Text strong>Email:</Text> diegohd-20@outlook.com, diego.bacuy@epn.edu.ec</List.Item>
                <List.Item><Text strong>LinkedIn:</Text> <Link href="https://linkedin.com/in/diego-bacuy-09a790124" target="_blank">diego-bacuy-09a790124</Link></List.Item>
                <List.Item><Text strong>Github:</Text> <Link href="https://github.com/DiegoJavb" target="_blank">DiegoJavb</Link></List.Item>
              </List>
              <Divider orientation="left" ref={refs.educacion}>Educación</Divider>
              <div ref={refs.educacion} />
              <List size="small">
                <List.Item><Text strong>ESCUELA POLITÉCNICA NACIONAL:</Text> TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE</List.Item>
                <List.Item><Text strong>CARLOS ZAMBRANO OREJUELA:</Text> BACHILLER EN CIENCIAS</List.Item>
                <List.Item><Text strong>CECEPN:</Text> ACADEMIC THREE LEVEL TEN</List.Item>
              </List>
              <Divider orientation="left" ref={refs.conocimientos}>Conocimientos</Divider>
              <div ref={refs.conocimientos} />
              <List size="small" grid={{ gutter: 8, column: 2 }} dataSource={[
                'Scrum', 'Dart', 'PHP', 'JavaScript', 'NodeJS', 'Html', 'Css', 'Librería ReactJS', 'Bases de datos', 'Framework Laravel', 'Framework Angular', 'Framework Flutter']}
                renderItem={item => <List.Item>{item}</List.Item>} />
              <Divider orientation="left" ref={refs.experiencia}>Experiencia Laboral</Divider>
              <div ref={refs.experiencia} />
              <List size="small">
                <List.Item><Text strong>Plux.ec:</Text> 18 meses de experiencia desarrollando en Flutter.</List.Item>
              </List>
              <Divider orientation="left" ref={refs.cursos}>Cursos Tomados</Divider>
              <div ref={refs.cursos} />
              <List size="small">
                <List.Item>UDEMY LEGACY FLUTTER</List.Item>
                <List.Item>UDEMY UNIVERSIDAD ANGULAR</List.Item>
                <List.Item>FREECODECAMP JAVASCRIPT ALGORITHMS AND DATA STRUCTURES</List.Item>
                <List.Item>FREECODECAMP RESPONSIVE WEB DESIGN</List.Item>
                <List.Item>CISCO INTRODUCCIÓN A LA CIBERSEGURIDAD</List.Item>
                <List.Item>CISCO CYBERSECURITY ESSENTIALS</List.Item>
                <List.Item>ESFOT REDESCUBRIENDO LA ENSEÑANZA - HERRAMIENTAS DIGITALES PARA LA EDUCACIÓN</List.Item>
                <List.Item>CHARLOTTE ENGLISH SCHOOL - ENGLISH LANGUAGE INTERPRETER</List.Item>
              </List>
              <Divider orientation="left" ref={refs.calificaciones}>Calificaciones Básicas</Divider>
              <div ref={refs.calificaciones} />
              <List size="small">
                <List.Item>Buenas habilidades de comunicación</List.Item>
                <List.Item>Servicio y soporte</List.Item>
                <List.Item>Buena ética de trabajo</List.Item>
                <List.Item>Gran atención al detalle</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">CV de Diego Bacuy &copy; 2025</Text>
      </Footer>
    </Layout>
  )
}

export default App
