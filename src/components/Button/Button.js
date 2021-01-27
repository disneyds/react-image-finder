import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ loadMore }) {
  return (
    <div className={s.btnWrapper}>
      <button
        type="button"
        className={`btn btn-warning ${s.btnSub}`}
        onClick={loadMore}
      >
        Загрузить ещё...
      </button>
    </div>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
