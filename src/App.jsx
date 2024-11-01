import React from 'react';
import Top from '@components/Top';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Headernotice from '@components/Headernotice';
import Product from '@components/Product';
import GTpage from '@components/GTpage';
import Footer from '@components/Footer';
import Bottom from '@components/Bottom';
import './Scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className='app-Container'>
            <Top />
            <Header />
            <Menu />
            <Headernotice />
            <Product />
            <GTpage />
            <Footer />
            <Bottom />
        </div>
    );
}
