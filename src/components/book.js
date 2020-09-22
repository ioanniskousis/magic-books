/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, removeBook } = props;
  const {
    id,
    title,
    category,
    writer,
    complete,
    chapter,
  } = book;

  return (
    <div className="bookPanel">
      <div className="bookDetails">
        <div className="bookCategory">
          {category}
        </div>
        <div className="bookTitle">
          {title}
        </div>
        <div className="writer-name">
          {writer}
        </div>
        <div className="bookMenu">
          <div>
            <button type="button">
              Comments
            </button>
          </div>
          <div className="bookMenu-vline" />
          <div>
            <button type="button" onClick={removeBook} id={id}>
              Remove
            </button>
          </div>
          <div className="bookMenu-vline" />
          <div>
            <button type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="bookProgress">
        <div className="">
          <img src="oval.png" alt="" />
        </div>
        <div className="progressVals">
          <div className="progressPerc">
            {complete}
          </div>
          <div className="progressPercLab">
            Completed
          </div>
        </div>
        <div className="progress-vline" />
        <div className="progressChapter">
          <div className="currentChapterLab">
            CURRENT CHAPTER
          </div>
          <div className="currentChapter">
            {chapter}
          </div>
          <div>
            <button type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  removeBook: null,
};
