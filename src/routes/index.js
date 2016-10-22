import { onEnter, onChange } from '../util/checkAuth';
import App from '../components/App';
import home from './home';

const createRoutes = store => ({
  path: '/',
  component: App,
  onEnter,
  onChange,
  indexRoute: home(store),
  childRoutes: [home(store)],
});

export default createRoutes;
