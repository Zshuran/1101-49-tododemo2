import { useState } from 'react';
import Modal_49 from '../components/Modal_49';
import Backdrop_49 from '../components/Backdrop_49';

function Todo_49(props) {
  const [showModal, setshowModal] = useState();

  function showModalHandler() {
    setshowModal(true);
  }

  function closeModalHandler() {
    setshowModal(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_49 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_49 text="Are you sure?" onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_49;
