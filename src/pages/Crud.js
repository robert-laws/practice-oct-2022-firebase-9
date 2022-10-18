import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import Navigation from '../components/Navigation';

export const Crud = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(collection(db, 'users'), {
      username: newName,
      age: Number(newAge),
    });
  };

  const increaseAge = async (userId, age) => {
    const userDoc = doc(db, 'users', userId);
    const newFields = {
      age: age + 1,
    };

    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
      console.log(users);
    });

    return unsubscribe;
  }, []);

  return (
    <div className='App'>
      <h2>Firebase 9 + React</h2>
      <hr />
      <Navigation />
      <hr />
      <div>
        <input
          onChange={(e) => setNewName(e.target.value)}
          type='text'
          placeholder='username'
        />
        <input
          onChange={(e) => setNewAge(e.target.value)}
          type='number'
          placeholder='age'
        />
        <button onClick={createUser}>Create User</button>
      </div>
      <hr />
      <div>
        {users &&
          users.map((user) => {
            return (
              <div
                key={user.id}
                style={{
                  display: 'block',
                  padding: '5px',
                  borderBottom: '1px solid #000',
                }}
              >
                <p>{user.username}</p>
                <p>{user.age}</p>
                <button onClick={() => increaseAge(user.id, user.age)}>
                  Increase Age
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete User</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
