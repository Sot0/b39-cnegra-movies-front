import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import { Nav, NavItem, NavLink, TabPane, TabContent } from "reactstrap";
import '../styles/nav-tab.scss';

const NavTap = ({ tabList = [] }) => {
    const [activeTab, setActiveTab] = useState(1);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Fragment>
            <Nav tabs className="nav-tab">
                {
                    tabList.map((item, i) => (
                        <NavItem className="nav-item" key={i}>
                            <NavLink
                                className={classnames({ active: activeTab === i + 1 })}
                                onClick={() => { toggle(i + 1); }} >
                                {item.text}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
            <TabContent activeTab={activeTab}>
                {
                    tabList.map((item, i) => (
                        <TabPane tabId={i + 1} key={i}>
                            {item.component}
                        </TabPane>
                    ))
                }
            </TabContent>
        </Fragment>
    );
}

export default NavTap;