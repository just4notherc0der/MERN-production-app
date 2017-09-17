import axios from 'axios';

export default {
  user: {
    login: (credentials) => {
      return axios.post('/api/auth', { credentials })
        .then((res) => {
          console.log('RESPONSE: ' + res.data.user);
          return res.data.user;
        })
        //.then(res => res.data.user)
    }
  }
}
