import PageMain from '../view/page/PageMain.vue';
import PageTaskView from '../view/page/PageTaskView.vue';
import PageTaskUpdate from '../view/page/PageTaskUpdate.vue';

import ModalWindow from '../view/widgets/ModalWindow.vue';


const routes = [
    {
        path: '/',
        name: 'main',
        component: PageMain
    }, {
        path: '/view/:id',
        name: 'task',
        component: PageTaskView,
        props: true
    }, {
        path: '/update/:id',
        name: 'update',
        component: PageTaskUpdate,
        props: true
    }, {
        path: '/modal',
        name: 'modal',
        component: ModalWindow,
    }
];

export default {
    routes
};