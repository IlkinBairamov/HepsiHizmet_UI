import { createBrowserHistory } from 'history';
import {Link} from 'react-router-dom'
import React from 'react';
import {Button, Container, Spinner} from 'reactstrap';
import "./Header.scss";
import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink ,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

export const Header : React.FC =()=>{

    return (
        <>
            <header>
                <div className="container">
                    <a className='logo' href="#" ></a>
                    <ul className="list-inline header-container header-container-homepage">
                        <li>
                            <a href="https://armut.com/g/temizlik-1">TEMİZLİK</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/tadilat-2">TADİLAT</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/nakliyat-3">NAKLİYAT</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/tamir-4">TAMİR</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/ozel-ders-5">ÖZEL DERS</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/saglik-6">SAĞLIK</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/dugun-7">DÜĞÜN</a>
                        </li>
                        <li>
                            <a href="https://armut.com/g/diger">DİĞER</a>
                        </li>
                    </ul>
                        <div className="profile-nav">
                            <ul className="list-inline">
                                <li className="hizmet-ver">
                                    <a className="btn-login" href="https://destek.armut.com/hc/tr">YARDIM</a>
                                </li>
                                <li className="hizmet-ver-container">
                                    <a href="https://armut.com/profesyonel-uye-ol">HİZMET VER</a>
                                </li>
                                <li className="hizmet-ver">
                                    <a href="https://armut.com/giris" className="btn-login">GİRİŞ</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </header>
        </>
    )
}
