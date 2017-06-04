import { onEnter, onChange } from '../util/checkAuth';
import App from '../components/App';
import home from './home';

const childRoutes = store => PAGES.map(page =>  require(`./${page}/index`).default(store));

console.log(PAGES);

const createRoutes = store => ({
    path: '/',
    component: App,
    onEnter,
    onChange,
    indexRoute: home(store),
    childRoutes: childRoutes(store)
});

export default createRoutes;
