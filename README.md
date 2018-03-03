### To run the Application
1. unzip the folder and run either of the following
  > * npm install

  > * npm run build

  > * npm run dev

 or

  >python -m SimpleHTTPServer 8080



### Reach the chatroom after logging in from the landing page:
1. Go to the application landing page, and enter a handle for the user
> http://localhost:8080/

2. The chat room will fetch the chat history as JSON data from the API and display all the messages of the friends as the user clicks on each user name.

3. The currently selected user has a light green background color

4. The messages scroll down to the bottom of the screen.

5. The user can enter a message and hit enter and the message would now show up on the display.

6. These new messages are maintained in the state, so long as the window is not refreshed. (As the back end is not implemented)

7. The links in the messages are clickable

8. The handle of the user is shown on the Profile with 'Busy' status


##### Features that are not yet developed but good to have
1. A Search Feature, that would list all the chats with the searched text
2. 'Add Friend' Button, that the user can click to add new users.
3. Provide a way to upload the Profile photo for the users
4. Display the profile photo along side the users list on the side bar.
5. Provide a way to change the status of the user from 'Busy'
6. Add websocket-io to the client, to listen for real time messages from the server and update the messages accordingly and to post data to, that the server can receive
7. Provide a way to edit a previously sent message
