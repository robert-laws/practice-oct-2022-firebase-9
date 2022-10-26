import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const Publication = () => {
  const { id } = useParams();

  const [publication, setPublication] = useState(null);

  useEffect(() => {
    const getPublication = async (docId) => {
      const docRef = doc(db, 'facultyData', docId);
      const docSnap = await getDoc(docRef);
      setPublication(docSnap.data());
    };

    if (id) {
      getPublication(id);
    }
  }, [id]);

  return (
    <div>
      <h2>Single Publication</h2>
      <hr />
      <Navigation />
      <hr />
      {/* <p>{id}</p> */}
      {publication && (
        <div>
          <h3>
            {publication.title ? publication.title : publication.sourceTitle}
          </h3>
          <p>
            <strong>Document Type</strong>: {publication.documentType}
          </p>
          <p>
            <strong>Author</strong>: {publication.firstName}{' '}
            {publication.lastName}
          </p>
          <p>
            <strong>Year</strong>: {publication.year}
          </p>
        </div>
      )}
    </div>
  );
};
