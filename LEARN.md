# How to Build Chatvoid :wrench:

Before we learn how to build **Chatvoid**, we must first understand the concept behind it.
This single paged application has an input field and two button by it's side for sending and receiving whatever text was kept in the input field. The text would be sent to an object of a selected user created earlier.

### Pre Requisite

I expect you to have some knowledge on

- [ReactJs](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## Let's Begin

This web app is split into 2 main sections namely

- ### Chat List

  This displays all the users created and has an [AddNewChat](./src/components/chatList/AddNewChat.tsx) component for creating new users

- ### Main Chat

  This displays all the messages for the selected user

## Store

Redux has a concept of store where all components that want to interact with a particular data access a single source of truth for the application while avoiding prop drilling.
There are two slices (or we can call them sub stores) used here, namely;

- users
- util

### users

This slice holds the necessary action for creating a new user. It's schema looks like this

```
users[]: id: string;
         username: string;
         joined: string;
         lastseen: string;
         read: boolean;
         typing: boolean;
         messages[]: day: string;
                     chats[]: id: string;
                              message: string;
                              time: string;
                              type: number;
```

### util

This slice holds the necessary action for other utilities such as deciding which user was selected. It's schema looks like this

```
util: selectedMessage: number | null
```
