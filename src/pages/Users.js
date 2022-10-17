import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  onSnapshot,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';

import Navigation from '../components/Navigation';

const usersCol = collection(db, 'users');

export const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const q = query(usersCol, where('age', '>', 30));

    // const unsubscribe = onSnapshot(usersCol, (querySnapshot) => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setAllUsers(users);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <hr />
      <Navigation />
      <hr />
      {allUsers && (
        <ul>
          {allUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
