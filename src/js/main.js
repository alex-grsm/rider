// import _ from "lodash";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import getHeaderHeight from './functions/header-height';
import './functions/burger';
import langDropDown from './components/langdropdown';
import submenuMenu from './components/submenuMenu';
import productSwiper from './components/productSwiper';
import heroSwiper from './components/heroSwiper';
import downloadSwiper from './components/downloadSwiper';
import modalContact from './components/modalContact';
import searchMain from './components/searchMain';
import salePoints from './components/salePoints';
import { insertCurrentYear } from './functions/insertCurrentYear';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    getHeaderHeight();
    langDropDown();
    submenuMenu();
    productSwiper();
    heroSwiper();
    downloadSwiper();
    modalContact();
    searchMain();
    salePoints();
    insertCurrentYear();
    
    setTimeout (function () {
		var urlHash = window.location.href.split("#")[1];
		if (urlHash &&  $('#' + urlHash).length ) {
			$('html,body').animate({
					scrollTop: $('#' + urlHash).offset().top - 89
			}, 300);
		}
	}, 500);

});