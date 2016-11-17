import { onEnter, onChange } from '../util/checkAuth';
import App from '../components/App';
import home from './home';

const childRoutes = store => PAGES.reduce((result, page) => [require(`./${page}/index`).default(store), ...result], []);

const createRoutes = store => ({
  path: '/',
  component: App,
  onEnter,
  onChange,
  indexRoute: home(store),
  childRoutes: childRoutes(store)
});

export default createRoutes;
