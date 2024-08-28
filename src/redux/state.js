let state = {
      profilePage: {
            posts: [
                  { id: 1, message: 'Hi! My name is Den !', likesCount: '5' },
                  { id: 2, message: "It's my first post !", likesCount: '10' },
                  { id: 3, message: "I'm learning  JS !", likesCount: '6' },
                  { id: 4, message: 'Thanks !', likesCount: '3' },
            ],
      },

      dialogsPage: {
            dialogsData: [
                  { id: 1, name: 'Den' },
                  { id: 2, name: 'Rex' },
                  { id: 3, name: 'Danya' },
                  { id: 4, name: 'Vika' },
                  { id: 5, name: 'Sanya' },
            ],

            messagesData: [
                  { id: 1, message: 'Hi!' },
                  { id: 2, message: 'How are you?' },
                  { id: 3, message: 'Yoooo!!!' },
                  { id: 4, message: 'Yooo' },
                  { id: 5, message: 'Yo' },
            ],
      },
};
export let addPost = (postMessage) => {
      let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0,
      };

      state.profilePage.posts.push(newPost);
};

export default state;
