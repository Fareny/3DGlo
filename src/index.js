import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import tabs from './modules/tabs';
import val from './modules/val';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('07 march 2022');
menu();
modal();
tabs();
val();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc();
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total'
    }
    ]
});
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }
    ]
});