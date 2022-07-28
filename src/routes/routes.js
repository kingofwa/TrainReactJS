import Dashboard from '../components/admin/Dashbord';
import Profile from '../components/admin/Profile';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashbord', exact: true, name: 'dashbord', component: Dashboard},
    { path: '/admin/profile', exact: true, name: 'profile', component: Profile },
]
export default routes;