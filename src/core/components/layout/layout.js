import React from 'react';
import Aux from '../../hoc/aux';
import Classes from './layout.css'
const Layout = (props) => (
    <Aux>
        <div>
            toolbaar, drowrs and sidebars
    </div>

        <main className={Classes.content}>
            {props.children}
        </main>
    </Aux>

);

export default Layout;