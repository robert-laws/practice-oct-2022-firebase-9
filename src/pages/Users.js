import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';

import Navigation from '../components/Navigation';

const usersCol = collection(db, 'users');

export const Users = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const q = query(usersCol, where('age', '>', 30));

    setLoading(true);

    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const unsubscribe = onSnapshot(usersCol, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setAllUsers(users);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addUser = async () => {
    const newUser = {
      username: 'Hal Hope',
      age: 25,
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };

    try {
      const userRef = doc(usersCol);
      await setDoc(userRef, newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Users</h2>
          <hr />
          <Navigation />
          <hr />
          {allUsers && (
            <ul>
              {allUsers.map((user) => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
          )}
          <button onClick={addUser}>Add User</button>
        </div>
      )}
    </div>
  );
};
