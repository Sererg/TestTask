import React, { useState } from 'react';
import { Breadcrumb, Col, Container, Row, Image, Carousel, Form, Nav, Button, Alert, Card, CardGroup} from 'react-bootstrap';



const PageBootstrapTest = () => {

    const [show, setShow] = useState(true);

    return (
        <Container>
            <header className='my-5'>
                <Row>
                    <Col md='2'><Image src="https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg" roundedCircle height={30} className='mr-2' />
                        Logo
                    </Col>
                    <Col md='10'>
                        <Nav variant="pills" defaultActiveKey="/home" className='d-flex justify-content-end'>
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                  
                </Row>
            </header>
            <Breadcrumb data-bs-theme="black">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://sudarshana.ru/wp-content/uploads/2019/10/023_Азартные-игры-кости-и-фишки.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>Первый слайд</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://proffadvokat.ru/wp-content/uploads/2020/03/pexels-photo-3279695.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Второй слайд</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://hub.ldpr.ru/media/images/kalmykia/3c83c8148d7d0c9cb676bb01c432542c6715fb73931d0f21a36a0d7da309460a.jpeg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Третий слайд</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Form.Select aria-label="Default select example" data-bs-theme="dark" className='mb-5'>
                <option>Открыть меню</option>
                <option value="1">Кости</option>
                <option value="2">Покер</option>
                <option value="3">Рулетка</option>
            </Form.Select>

            <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://micolock.ru/wp-content/uploads/b/5/e/b5e011e6f8792f319b52c77f27ca8c27.jpeg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://vdecret.com/wp-content/uploads/1-123.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://krovlyakryshi.ru/wp-content/uploads/sa2-372.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

            <>
            <Alert show={show} variant="success">
                <Alert.Heading>Предупреждение</Alert.Heading>
                <p>
                Последние несколько дней погода была неустойчивой. Но она нравится мне больше всего. Когда я сегодня проснулся, день казался скучным и серым. Но затем прояснилось, и сейчас ярко сияет солнце и очень тепло.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Закрыть
                </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Открыть предупреждение</Button>}
            </>
        </Container>
    );
};

export default PageBootstrapTest;