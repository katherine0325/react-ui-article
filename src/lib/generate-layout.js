import React from "react";
import { Route } from "react-router-dom";

export default Layout => {
    return ({component: Component, ...rest}) => {
        return (
            <Route {...rest} render={matchProps => (
                // <Layout children={<Component {...matchProps} />}></Layout>
                <Layout component={Component} {...matchProps}></Layout>
            )} />
        )
    };
}

// export default Layout => {
//     return ({component: Component, ...rest}) => (
//         <Layout>
//             <Route {...rest} component={Component} />
//         </Layout>
//     )
// }
