import MobileMenu from './modules/mobilemenu';
inport RealOnScroll from './modules/realonscroll';
import $ from 'jquery';
import StickyHeader from './modules/stickyheader';
import Modal from './modules/modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();