import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

function UseCase1() {
    const [currentStep, setStep] = useState(0);

    const goToPage = (step: number) => () => {
        setStep(step);
    };

    const renderNoMatch = (pageTitle: string, step: number, page: string) => () => (
            <div className={currentStep >=step ? 'visited-line' : 'togo-line '}>
                <div>
                    <Link to={`/usecase2/${page}`}
                          onClick={goToPage(step)}>{pageTitle}</Link>
                </div>
            </div>
    );

    return (
        <>
            <h2>Use Case 2 - Multiple Section</h2>
            <ul>
                <li>Page has multiple section.</li>
                <li>All sections are visible</li>
                <li>Only one section is active and rest are in inactive state</li>
            </ul>
            <Router>
                <Switch>
                    <Route
                        exact={true}
                        path="/usecase2"
                        component={Page1}
                    />
                    <Route
                        exact={true}
                        path="/usecase2/page1"
                        component={Page1}
                    />
                    <Route
                        render={renderNoMatch('Page 1 deactive', 0, 'page1')}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact={true}
                        path="/usecase2/page2"
                        component={Page2}
                    />
                    <Route
                        render={renderNoMatch('Page 2 deactive', 1, 'page2')}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact={true}
                        path="/usecase2/page3"
                        component={Page3}
                    />
                    <Route
                        render={renderNoMatch('Page 3 deactive', 2, 'page3')}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact={true}
                        path="/usecase2/page4"
                        component={Page4}
                    />
                    <Route
                        render={renderNoMatch('Page 4 deactive', 3, 'page4')}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default UseCase1;
