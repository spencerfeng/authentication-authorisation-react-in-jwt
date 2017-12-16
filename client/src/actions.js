export const userSignup = (user, history) => {
    return dispatch => {
        fetch('http://localhost:3000/signup', {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },
            body: `firstName=${user.firstName}&lastName=${user.lastName}&email=${user.email}&password=${user.password}`
        })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.token !== false) {
                console.log(`response token: ${data.token}`);
                
                // Save the token to local storage
                localStorage.setItem('token', data.token);

                // Update the store state
                dispatch(setAuthenticatedUser(data.user));

                // Redirect to home page
                history.push('/');
            } else {
                // TODO
            }
        })
        .catch(err => {
            console.log(err);  
        });
    }
};

export const userLogin = (user, history) => {
    return dispatch => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
            },
            body: `email=${user.email}&password=${user.password}`
        })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success === true) {
                // Save the token to local storage
                localStorage.setItem('token', data.token);

                // Update the store state
                dispatch(setAuthenticatedUser(data.user));

                // Redirect to user logged-in landing page
                history.push('/');
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const setAuthenticatedUser = (user) => ({ type: 'SET_USER', data: user });