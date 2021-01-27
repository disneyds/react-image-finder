import React from 'react';
import ReactLoader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <ReactLoader
      className={s.wrapper}
      type="ThreeDots"
      color="#ffc107"
      height={120}
      width={120}
    />
  );
}
