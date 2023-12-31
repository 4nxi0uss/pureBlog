import AboutObj from '../../pages/about.mjs';
import HomeObj from '../../pages/home.mjs';
import LoginObj from '../../pages/login.mjs';

const urlPageTitle = 'Zaliczenie';

// create an object that maps the url to the template, title, and description
export const urlRoutes = {
    404: {
        template: '/templates/404.html',
        title: '404 | ' + urlPageTitle,
        description: 'Page not found',
    },
    '/': {
        template: HomeObj,
        title: 'Home | ' + urlPageTitle,
        description: 'This is the home page',
    },
    '/about': {
        template: AboutObj,
        title: 'About Us | ' + urlPageTitle,
        description: 'This is the about page',
    },
    '/login': {
        template: LoginObj,
        title: 'Contact Us | ' + urlPageTitle,
        description: 'This is the login page',
    },
};
