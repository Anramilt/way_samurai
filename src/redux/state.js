import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello world', likesCount: 12 },
            { id: 2, message: 'First post!', likesCount: 14 }
        ],
        newPostText: 'samurai'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Irina', avatar: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
            { id: 2, name: 'Aleksey', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s' },
            { id: 3, name: 'Maria', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s' }
        ],
        messages: [
            { id: 1, message: 'Hello world', isUser: false },
            { id: 2, message: 'Hi', isUser: true  },
            { id: 3, message: 'Hello',isUser: false }
        ]
    },
    sidebar: []
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;