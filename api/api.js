
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const usersAPI = {
  getUsers() {
    debugger
    return instance.get('users')
      .then(response => {
        return response.data
      });
  },

  // getUserProfile(userId) {
  //   console.warn('Obsolete method. Please use profileAPI object');
  //   return profileAPI.getUserProfile(userId);
  // }
};


// export const profileAPI = {

//   getUserProfile(userId) {
//     return instance.get(`profile/${userId}`)
//       .then(response => {
//         return response.data
//       });
//   },
//
