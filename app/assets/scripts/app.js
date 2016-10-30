import MobileMenu from './modules/mobilemenu';
inport RealOnScroll from './modules/realonscroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");