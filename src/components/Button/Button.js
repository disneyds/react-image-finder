import React from 'react';

export default function Button({ loadMore }) {
  return (
    <div className="btn-wrapper">
      <button
        type="button"
        className="btn btn-warning btn-sub"
        onClick={loadMore}
      >
        Загрузить ещё...
      </button>
    </div>
  );
}
