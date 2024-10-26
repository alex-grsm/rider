// import _ from "lodash";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import getHeaderHeight from './functions/header-height';
import langDropDown from './components/langdropdown';
import submenuMenu from './components/submenuMenu';
import heroSwiper from './components/heroSwiper';
import modalContact from './components/modalContact';
import searchMain from './components/searchMain';
import salePoints from './components/salePoints';
import { insertCurrentYear } from './functions/insertCurrentYear';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    getHeaderHeight();
    langDropDown();
    submenuMenu();
    heroSwiper();
    modalContact();
    searchMain();
    salePoints();
    insertCurrentYear();
    

});