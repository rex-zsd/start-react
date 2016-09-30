import checkAuth from '../util/checkAuth';
import App from '../components/App';
import index from './index/index';

const createRoutes = store => ({
  path: '/',
  component: App,
  onEnter: checkAuth,
  onChange: checkAuth,
  indexRoute: null,
  childRoutes: [index(store)],
});

export default createRoutes;
