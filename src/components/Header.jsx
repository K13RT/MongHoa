import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Col';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <header id='hd'>
            <Container>
                <Row>
                    <Col md={4} mt={2}>
                        <div className='go social'>
                            <a href='https://www.facebook.com/profile.php?id=61567741142730'>
                                <FaFacebook />
                            </a>
                            <a href='https://www.instagram.com/monghoadann/'>
                                <FaInstagramSquare />
                            </a>
                            <a href='https://www.youtube.com/@M%E1%BB%99ngHoa%C4%90anshop'>
                                <FaYoutube />
                            </a>
                        </div>
                        <Col md={4} mt={2} fluid>
                            <div class='logo'>
                                <a href='#'>
                                    <img
                                        src='https://www.flowercorner.vn/image/catalog/common/shop-hoa-tuoi-flowercorner-logo.png.webp'
                                        title='FlowerCorner.vn - Shop hoa tươi'
                                        alt='FlowerCorner.vn - Shop hoa tươi'
                                        className='img-fluid'
                                        width={300}
                                        height={62}
                                    />
                                </a>
                            </div>
                        </Col>
                        <div>
                            <SearchBar />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
