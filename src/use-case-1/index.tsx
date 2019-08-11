import React from 'react';
import { Route, RouteComponentProps, Link } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

interface MatchParams {
    name: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
}

export interface RouteComponentProps {
  match: match;
}

export interface match {
  url: string;
}

function UseCase1(routerProps: IProps) {
    return(
    <>
        <h2>Use Case 1 - Nested routers</h2>
        <Link to={`${routerProps.match.url}/page1`}>page 1</Link> /
        <Link to={`${routerProps.match.url}/page2`}>page 2</Link> /
        <Link to={`${routerProps.match.url}/page3`}>page 3</Link>
        <Route
            path={`${routerProps.match.url}/page1`}
            component={Page1}/>
        <Route
            path={`${routerProps.match.url}/page2`}
            component={Page2}/>
        <Route
            path={`${routerProps.match.url}/page3`}
            component={Page3}/>
    </>);
}

export default UseCase1;
