// Use this to decode a token and get the user's info out of it
import decode from 'jwt-decode';

// Create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is logged in
  loggedIn() {
    // checks if there is a saved token and its still valid
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  // checks if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    //  This will reload the page and reset the state of the app
    window.location.assign('/');
  }
}

export default new AuthService();
