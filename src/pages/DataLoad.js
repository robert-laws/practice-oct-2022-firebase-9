import React from 'react';
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import facultyDataSubset from '../data/faculty-data';

export const DataLoad = () => {
  const addSampleData = async (dataFields) => {
    console.log(dataFields.pubId);

    await addDoc(collection(db, 'facultyData'), {
      pubId: dataFields.pubId,
      firstName: dataFields.firstName,
      lastName: dataFields.lastName,
      authors: dataFields.authors,
      title: dataFields.title,
      year: dataFields.year,
      sourceTitle: dataFields.sourceTitle,
      volume: dataFields.volume,
      issue: dataFields.issue,
      pageStart: dataFields.pageStart,
      pageEnd: dataFields.pageEnd,
      pageCount: dataFields.pageCount,
      doi: dataFields.doi,
      link: dataFields.link,
      abstract: dataFields.abstract,
      authorKeywords: dataFields.authorKeywords,
      indexKeywords: dataFields.indexKeywords,
      editors: dataFields.editors,
      publisher: dataFields.publisher,
      issn: dataFields.issn,
      isbn: dataFields.isbn,
      language: dataFields.language,
      documentType: dataFields.documentType,
      eid: dataFields.eid,
      sustainableDevelopmentGoals: dataFields.sustainableDevelopmentGoals,
      callNumber: dataFields.callNumber,
      cirsSponsored: dataFields.cirsSponsored,
      fullText: dataFields.fullText,
    });
  };

  const handleDataLoad = () => {
    facultyDataSubset.forEach((dataFields) => {
      addSampleData(dataFields);
    });
  };

  return (
    <div>
      <h2>Data Loading...</h2>
      <button onClick={handleDataLoad}>Load Data</button>
    </div>
  );
};
