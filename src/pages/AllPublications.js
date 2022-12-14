import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { ListItem } from '../components/ListItem';

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
          <p>{allPublications.length} total publications</p>
          <hr />
          <Navigation />
          <hr />
          <ul>
            {allPublications.map((pub) => (
              <ListItem
                key={pub.id}
                id={pub.id}
                author={`${pub.firstName} ${pub.lastName}`}
                title={pub.title ? pub.title : pub.sourceTitle}
                year={pub.year}
                docType={pub.documentType}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
