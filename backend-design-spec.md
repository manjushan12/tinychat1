### Application Initial State

#### API for the chat history
Backend API should provide data in JSON format, with the entire chat history of the user from the user's
friends list. This should list the chat messages of all the chat friends, along with the chat
the user has sent to the chat friends. It should be of the following format:
```
{
  "messages": [
      {
          "id": 1,
          "author": "Jane",
          "timestamp": 1421953410956,
          "content": "Hello!"
      },
      {
          "id": 2,
          "author": "Sam",
          "timestamp": 1421953434028,
          "content": "How are you?",
          "last_edited": 1421953454124
      },
      {
          "id": 3,
          "author": "me",
          "timestamp": 1421968344000,
          "content": "data again first",
          "to": "Jane"
      }
      ],
      "last_seen": 1421953648024
  }
```

1. Chat message from a chat friend to the user
```
{
    "id": 1,
    "author": "Jane",
    "timestamp": 1421953410956,
    "content": "Hello!"
}
```
  * id: A unique identifier for each message
  * author : Name of the person who initiated the chat
  * timestamp : TimeStamp in milliseconds
  * content: The actual text content of the message

2. Chat message from the user to a chat friend
```
{
    "id": 3,
    "author": "me",
    "timestamp": 1421968344000,
    "content": "data again first",
    "to": "Jane"
}
```
  * id: A unique identifier for each message
  * author : The text would be "me"
  * timestamp : TimeStamp in milliseconds
  * content: The actual text content of the message
  * to: The name of the chat friend to whom the user has sent the message

3. last_seen gives the timestamp of when the user last logged off.

  ```
    "last_seen": 1421953648024
    ```
#### API for the users list

  * When the user clicks on "Add Friend", modal would pop up with the list all clients (non friends) of the server.  None of these users should already be in the user's friends list. The user can then select the friend from the drop-down, she would like to add and "ADD_USER" message would be sent back to the server.

  The API should serve JSON data back that would list all the clients (not already friends), the server has that the user can add.

 ```
  {
    "clients": [
        {
            "id": '1334ACV',
            "name": "JohnSmith"
        },
        {
            "id": '134AFT',
            "name": "SamuelGray"
        },
        {
            "id": '134DRT',
            "name": "Jennie"
        }
        ]
    }
  ```
    * id : Unique identifier for each client
    * name : Name (Handle) of the client



### Real Time Chat application

## From Client to Server

* ADD_MESSAGE

    * As the chat application is running, as soon as a new chat is sent in the chat application by the user, the application would send a new message "ADD_MESSAGE" to the WebSocketIO url.
    A new message from the user in the chat application will have the following format.

    ```
    {
    type: 'ADD_MESSAGE',
    message:
      {
          "id": 4,
          "author": "me",
          "timestamp": 1421953410956,
          "content": "Hello!",
          "to" : Jane
      }
    }
    ```

    The Backend server should open the socket and listen to it for any new "ADD_MESSAGE" message and persist the data.

* UPDATE_MESSAGE
  * If the user is updating an already sent message again, the message would be resent with the type "UPDATE_MESSAGE. The id would be the same as the already sent message and the server needs to update the message in the backend and re-send the message again (wth the new content and timestamp) to the chat friend.

    ```
    {
    type: 'UPDATE_MESSAGE',
    message:
      {
          "id": 4,
          "author": "me",
          "timestamp": 1421953410956,
          "content": "Hello again!",
          "to" : Jane
      }
    }
    ```
* ADD_USER
    * when the user adds a new chat-friend, a message will be sent to with the type 'ADD_USER'.
    * The server should receive the message and update the friends list of the user with the newly added user as well as add the user to the chat-friend's friends list
    * If the newly added friend is connected and active, add the new messages from the user to the newly added chat-friend.

  ```
  {
  type: 'ADD_USER',
  message:
    {
        "id" : '1234ABC'
        "name" : "John"
        "timestamp": 1421953410956
    }
  }
  ```
  * id : A unique identifier for the chat-friend
  * name : Name of the chat friend
  * timeStamp: TimeStamp when the chat-friend was added


* REMOVE_USER
    * when the user deletes an existing friend, a message will be sent to the server with the type 'REMOVE_USER'.
    * The server should receive the message and remove this user from the friends list and update the chat-friend's friends-list as well.

    ```
    {
    type: 'REMOVE_USER',
    message:
      {
          "id" : '1234ACV'
          "name" : "Jane"
          "timestamp": 1421953410956
      }
    }
    ```
    * id : A unique identifier for the chat-friend
    * name : Name of the chat friend
    * timeStamp: TimeStamp when the chat-friend was removed


### From Server to client

* As soon as a new message is received by the server, it should be sent to the client, to whom the message was sent to. A new message will be sent to the socketIO url, with the type 'MESSAGE_RECEIVED'

```
{
type: 'MESSAGE_RECEIVED',
message:
  {
      "id": 5,
      "author": "Jane",
      "timestamp": 1421953410956,
      "content": "Message from Jane!",
  }
}
```
    * id : A unique identifier for the new message
    * author : Name of the person who initiated the chat
    * timestamp : TimeStamp in milliseconds when the message was sent
    * content: The text content of the message


The client listens in the socket IO and as the new message is received, it updates its state, re-renders and the user is informed of the new message.

* USER_OFFLINE
  When a user is signed-out or goes offline, inform all active chat friends that the user has gone offline.

  ```
  {
  type: 'USER_OFFLINE',
  message:
    {
        "id" : '1234ACV'
        "author": "Jane",
        "timestamp": 1421953410956
    }
  }
  ```

  * id : A unique identifier for the chat-friend
  * name : Name of the chat friend
  * timeStamp: TimeStamp when the chat-friend went offline
