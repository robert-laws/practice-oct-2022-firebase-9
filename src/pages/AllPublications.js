import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

import Navigation from '../components/Navigation';

const facultyDataCol = collection(db, 'facultyData');

export const AllPublications = () => {
  const [loading, setLoading] = useState(true);
  const [allPublications, setAllPublications] = useState([]);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(facultyDataCol, (querySnapshot) => {
      const publications = [];

      querySnapshot.forEach((pub) => {
        publications.push({ ...pub.data(), id: pub.id });
      });

      setAllPublications(publications);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h2>All Publications</h2>
          <hr />
          <Navigation />
          <hr />
          <ul>
            {allPublications.map((pub) => (
              <li key={pub.id}>
                <a href={`publication/${pub.pubId}`}>
                  {pub.title ? pub.title : pub.sourceTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
