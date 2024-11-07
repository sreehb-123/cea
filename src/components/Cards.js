import { Card,Container,Row,Col } from 'react-bootstrap';
import '../styles/Cards.css';

const Cards = () => {
    return(  
        <Container className="cards-section my-5">
            <Row>
                <Col md={4} sm={6} xs={12} className='d-flex justify-content-center mb-4'>
                    <Card className='custom-card'>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae justo ut velit 
                                congue scelerisque. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus 
                                et ultrices posuere cubilia curae; Morbi at nisl nec ligula facilisis aliquet in non tortor.
                                Integer dapibus quam ut libero tincidunt, id viverra sapien faucibus. Lorem ipsum dolor sit 
                                amet, consectetur adipiscing elit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={6} xs={12} className='d-flex justify-content-center mb-4'>
                    <Card className='custom-card'>
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                Praesent ullamcorper, tortor ac fermentum volutpat, magna sapien volutpat velit, sit amet 
                                accumsan mi lorem at nibh. Vivamus fringilla id arcu ac sollicitudin. Nam vulputate erat 
                                eget elit venenatis, sed tincidunt libero blandit. Fusce ut tortor mauris. Curabitur nec 
                                facilisis ex, et fermentum velit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={6} xs={12} className='d-flex justify-content-center mb-4'>
                    <Card className='custom-card'>
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                Maecenas consequat sem at est commodo, nec feugiat risus mollis. Nulla facilisi. Duis at 
                                metus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                                turpis egestas. Nunc vel magna nulla. Sed at ligula auctor, varius massa ut, consectetur dolor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Cards;