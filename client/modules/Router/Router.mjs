import { urlRoutes } from './Router.config.mjs';

class Router {
    constructor() {
        if (Router.instance == null) {
            this.lastEntries = '';

            Router.instance = this;
        }

        return Router.instance;
    }

    // create a function that watches the url and calls the urlLocationHandler
    urlRoute(event) {
        const { urlLocationHandler, lastEntries = '' } = this;
        const { event: windowEvent, history = {} } = window;

        event = event || windowEvent; // get window.event if event argument not provided
        event.preventDefault();

        const { target: { href = '' } = {} } = event;

        if (lastEntries === href) {
            return;
        }

        this.lastEntries = href;

        // window.history.pushState(state, unused, target link);
        history.pushState({}, '', href);

        urlLocationHandler();
    }

    // create a function that handles the url location
    async urlLocationHandler() {
        const {
            location: {
                pathname: location = [],
                pathname: { length = 0 } = [],
            } = {},
        } = window; // get the url path

        // if the path length is 0, set it to primary page route
        if (length == 0) {
            location = '/';
        }

        // get the route object from the urlRoutes object
        const route = urlRoutes[location] || urlRoutes['404'];

        const htmlTemplate = route.template.render();

        // set the content of the content div to the html
        const bodyRef = document.querySelector('#root');

        bodyRef.innerHTML = '';
        bodyRef.append(...htmlTemplate.children);
        // document.getElementById('root').appendChild(new Function(html)());

        // set the title of the document to the title of the route
        document.title = route.title;
        // set the description of the document to the description of the route
        document
            .querySelector('meta[name="description"]')
            .setAttribute('content', route.description);
    }

    routerClick(e) {
        e.preventDefault();

        this.urlRoute(e);
    }

    routerClickBind = this.routerClick.bind(this);

    routerInit() {
        const { urlLocationHandler, urlRoute } = this;

        // add an event listener to the window that watches for url changes
        window.onpopstate = urlLocationHandler;

        // call the urlLocationHandler function to handle the initial url
        window.route = urlRoute;

        // call the urlLocationHandler function to handle the initial url
        urlLocationHandler();
    }
}

const RouterObj = new Router();

export default RouterObj;
