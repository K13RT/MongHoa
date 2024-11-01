import React from 'react';
import { Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';

export default function Top() {
    return (
        <nav id='top'>
            <Container>
                <div className='nav float-start'>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            Hotline : <a href='tel:0931474900'>0931474900</a>
                        </li>
                    </ul>
                </div>
                <div className='nav float-end'>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            <a href='#'>
                                <FaUser />
                                <span>Account</span>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a href='#'>
                                <FaShoppingCart />
                                <span>Cart</span>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a href='#'>
                                <IoMdCash />
                                <span>Cash</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}
