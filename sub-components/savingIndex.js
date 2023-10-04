import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from 'app/(auth)/authentication/sign-in/page';
import store from 'sub-components/auth/token'
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <SignIn/>
        </Provider>
    </CookiesProvider>,
    document.getElementById('root')
);