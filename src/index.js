import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import tabs from './modules/tabs';
import val from './modules/val';
import slider from './modules/slider';

timer('25 march 2022');
menu();
modal();
tabs();
val();
slider('.portfolio-content','.portfolio-item','.portfolio-dots');