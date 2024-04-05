import React, { useState, useEffect } from 'react';
import { firebaseInstance } from './Projects'; 
import './chat-css/admin2.css';

const AdminInterface = () => {
 const [messages, setMessages] = useState([]);
 const [groupedMessages, setGroupedMessages] = useState({});
 const [visibleEmail, setVisibleEmail] = useState(null);
 const [selectedMessage, setSelectedMessage] = useState(null);
 const [replyFormValue, setReplyFormValue] = useState('');
 const [refreshKey, setRefreshKey] = useState(0);
 const [searchQuery, setSearchQuery] = useState('');
 const [newMessageReceived, setNewMessageReceived] = useState(false);

 // Fetch messages from Firestore and set up real-time updates
 useEffect(() => {
    const fetchMessages = async () => {
      try {
        const usersSnapshot = await firebaseInstance.firestore().collection('users2').get();
        const messages = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          email: doc.data().email,
          text: doc.data().text,
        }));
        setMessages(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    const unsubscribe = firebaseInstance.firestore().collection('users2')
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          email: doc.data().email,
          text: doc.data().text,
        }));
        setMessages(newMessages);
        if (newMessages.length > messages.length) {
          setNewMessageReceived(true);
          setTimeout(() => setNewMessageReceived(false), 5000);
        }
      });

    return () => unsubscribe();
 }, [refreshKey]);

 // Group messages by email and filter based on search query
 useEffect(() => {
    const groupMessages = () => {
      const filteredMessages = messages.filter(message =>
        message.email.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const grouped = filteredMessages.reduce((acc, message) => {
        if (!acc[message.email]) {
          acc[message.email] = [];
        }
        acc[message.email].push(message);
        return acc;
      }, {});

      setGroupedMessages(grouped);
    };

    groupMessages();
 }, [messages, refreshKey, searchQuery]);

 // Toggle visibility of messages for a specific email
 const handleEmailClick = (email) => {
    setVisibleEmail(visibleEmail === email ? null : email);
 };

 // Select a message for replying
 const handleMessageClick = (message) => {
    setSelectedMessage(message);
 };

 // Send a reply to a selected message
 const sendReply = async (e) => {
    e.preventDefault();
    if (!replyFormValue) return;

    try {
      await firebaseInstance.firestore().collection('users2').doc(selectedMessage.id).update({
        reply: replyFormValue,
      });
      setReplyFormValue('');
      alert('Reply sent successfully!');
    } catch (error) {
      console.error("Error sending reply:", error);
    }
 };

 // Delete a specific message
 const deleteMessage = async (messageId) => {
    try {
      await firebaseInstance.firestore().collection('users2').doc(messageId).delete();
      alert('Message deleted successfully!');
      setMessages(messages.filter(message => message.id !== messageId));
      setRefreshKey(prevKey => prevKey + 1);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
 };

 // Delete all messages associated with a specific email
 const deleteEmailAndMessages = async (email) => {
    try {
      const messagesToDelete = messages.filter(message => message.email === email);

      for (const message of messagesToDelete) {
        await firebaseInstance.firestore().collection('users2').doc(message.id).delete();
      }

      setMessages(messages.filter(message => message.email !== email));
      setRefreshKey(prevKey => prevKey + 1);

      alert('Email and all associated messages deleted successfully!');
    } catch (error) {
      console.error("Error deleting email and messages:", error);
    }
 };

 // Update search query state
 const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
 };

 return (
    <div className="admin-interface2">
      <h2>Messages</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by email..."
      />
      {newMessageReceived && <div className="notification">New message received!</div>}
      {Object.entries(groupedMessages).map(([email, messages]) => (
        <div key={email}>
          <h3 className="email-button-2" onClick={() => handleEmailClick(email)}>
            {email}
          </h3>
          <button className="delete-button" onClick={() => deleteEmailAndMessages(email)}>Delete user</button>
          {visibleEmail === email && (
            <ul>
              {messages.map((message, index) => (
                <li key={message.id} onClick={() => handleMessageClick(message)}>
                 Message {index + 1}: {message.text}
                 <button className="delete-button" onClick={() => deleteMessage(message.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {selectedMessage && (
        <div>
          <h2>Reply to Message</h2>
          <p>Selected Message: {selectedMessage.text}</p>
          <form onSubmit={sendReply}>
            <input
              type="text"
              value={replyFormValue}
              onChange={(e) => setReplyFormValue(e.target.value)}
              placeholder="Type your reply here..."
            />
            <button type="submit">Send Reply</button>
          </form>
        </div>
      )}
    </div>
 );
};

export default AdminInterface;
