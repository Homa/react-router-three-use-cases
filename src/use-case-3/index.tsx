import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, Link } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

function UseCase3(routeProps: RouteComponentProps) {
    const [next, setNext] = useState('');

    useEffect(() => {
        const currentPage = routeProps.location.pathname.replace(/\/$/, "").replace(/(.*\/)*/, "");
        let next;

        if (currentPage === 'page1') {
            next = 'page2';
        } else if (currentPage === 'page2') {
            next = 'page3';
        } else if (currentPage === 'page3') {
               next = '';
        } else {
            next = 'page1/page2';
        }

        setNext(next);
    }, [routeProps.location]);

    const goNext = () => {
        routeProps.history.replace(`${routeProps.location.pathname}/${next}`);
    };

    return (
        <>
            <h2>Use Case 3</h2>
            <Router>
                <Route
                    exact={true}
                    path="/usecase3"
                    render={() => {
                        return <Page1 />;
                    }}/>
                <Route
                    exact={false}
                    path="/usecase3/page1"
                    render={() => {
                        return <Page1 />;
                    }}/>
                <Route
                    exact={false}
                    path="/usecase3/page1/page2"
                    render={() => {
                        return <Page2 />;
                    }}/>
                <Route
                    exact={false}
                    path="/usecase3/page1/page2/page3"
                    render={() => {
                        return <Page3 />;
                    }}/>

                {next !== '' &&
                    <Link
                        to={`${routeProps.location.pathname}/${next}`}
                        onClick={goNext}>Next</Link>
                }
            </Router>
        </>
    );
}

export default UseCase3;
