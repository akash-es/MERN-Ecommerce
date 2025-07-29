import { Container,Row,Col } from "react-bootstrap";
const footer =() =>{
    const currentYear = 2024;
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                    <p>Ecommers &copy ;{currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

};
 export default footer;