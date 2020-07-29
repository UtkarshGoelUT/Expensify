import { googleProvider, firebase } from "../firebase/firebase";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            // code which runs on success
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            alert(errorCode);

            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });;
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}