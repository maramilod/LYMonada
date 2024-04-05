import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import Sky from '../models/Sky';
import YASLoader from "../components/YASLoader";

import AdminInterface from './AdminInterface';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './chat-css/home.css';

import Home from '../../public/Home';
import { Link } from "react-router-dom";

import { violin, bmute, ylog } from "../assets/icons";
import voice from "../assets/voice.mp3";

// Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBnSXpKbw_BxrNWD6W6GFgi90f8O3ljyX0",
 authDomain: "lymonada2.firebaseapp.com",
 projectId: "lymonada2",
 storageBucket: "lymonada2.appspot.com",
 messagingSenderId: "563990784076",
 appId: "1:563990784076:web:7d791b14b3bad0a4afece9",
 measurementId: "G-8KH4R7D41W"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
} else {
 firebase.app();
}

export const firebaseInstance = firebase;

export const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
const adminUserId = 't6MiuJNgaugSmPql7kP3ZWPHset2';

const Projects = () => {
 const [count, setCount] = useState(5);
 const [user] = useAuthState(auth);
 const [isAdmin, setIsAdmin] = useState(false);

 // Check if the current user is an admin
 useEffect(() => {
    if (user) {
      setIsAdmin(user.uid === adminUserId);
    } else {
      setIsAdmin(false);
    }
 }, [user]);

 const audioRef = useRef(new Audio(voice));
 audioRef.current.volume = 0.4;
 audioRef.current.loop = true;

 const [isPlayingMusic, setIsPlayingMusic] = useState(true);

 // Play or pause music based on isPlayingMusic state
 useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
 }, [isPlayingMusic]);

 return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent `}>
        <Suspense fallback={<YASLoader />}>
          <Environment preset='sunset' />
          <Home/>
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? violin : bmute}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
      <div className='absolute bottom-2 left-20'>
        <Link to='../'>
          <img
            src={ylog}
            alt='jukebox'
            className='w-71 h-10 cursor-pointer object-contain'
          />
        </Link>
      </div>
      <div className="absolute bottom-4 right-2">
        <header>
          <SignOut />
        </header>
        {isAdmin ? (
          <AdminInterface />
        ) : user ? (
          <ChatRoom />
        ) : (
          <SignIn />
        )}
      </div>
    </section>
 );
}

function SignIn() {
 const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
 }

 // Define the styles for the sign-in button
 const signInButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 10px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
 };

 return (
    <>
      <button className="sign-in" style={signInButtonStyle} onClick={signInWithGoogle}><img src="chat.png"/></button>
    </>
 );
}

function SignOut() {
 const signOutButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 10px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
 };

 return auth.currentUser && (
    <button className="sign-out" style={signOutButtonStyle} onClick={() => auth.signOut()}>🙋‍♀️</button>
 );
}

function ChatRoom() {
 const dummy = useRef();
 const messagesRef = firestore.collection('users');
 const query = messagesRef.orderBy('createdAt').limit(25);

 const [messages] = useCollectionData(query, { idField: 'id' });

 const [formValue, setFormValue] = useState('');

 const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, email } = auth.currentUser;

    await messagesRef.add({
      email,
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      receiverId: adminUserId
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
 }

 const filteredMessages = messages && messages.filter(msg => 
    (msg.uid === auth.currentUser.uid && msg.receiverId === adminUserId) ||
    (msg.uid === adminUserId && msg.receiverId === auth.currentUser.uid)
 );

 return (
    <>
      <main className="chat-areay">
        {filteredMessages && filteredMessages.map(msg => (
          <div key={msg.id} className={`message ${msg.uid === auth.currentUser.uid ? 'sent-message' : 'received-message'}`}>
            <ChatMessage message={msg} />
            {msg.reply && (
             <div className="admin-reply">
               <div className="admin-photoy" />
               <div className="admin-messagey">
                 <p>{msg.reply}</p>
               </div>
              </div>
            )}
          </div>
        ))}
        <span ref={dummy}></span>
      </main>
      <form className="input-form" onSubmit={sendMessage}>
        <input className="input-fieldy" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Azul" />
        <button className="send-buttony" type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>
 );
}

function ChatMessage(props) {
 const { text, uid, photoURL } = props.message;

 const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

 return (
    <>
      <div className={`message ${messageClass}`}>
        <img className="user-photo" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <div className="user-messagey"><p>{text}</p></div>
      </div>
    </>
 );
}

export default Projects;
