import React, {useState} from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [stateFirstModal, setStateFirstModal] = useState(false);
  const closeFirstModal = () => setStateFirstModal(false);

  const [stateSecondModal, setStateSecondModal] = useState(false);
  const closeSecondModal = () => setStateSecondModal(false);

  const firstBtn = {
    backgroundColor: 'Red',
    text: 'Open first modal',
    onClick: () => setStateFirstModal(true)
  }

  const secondBtn = {
    backgroundColor: 'Blue',
    text: 'Open second modal',
    onClick: () => setStateSecondModal(true)
  }

  const firstModal = {
    header: "Do you want to delete this file?",
    text: "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?",
    closeButton: true,
    actions:
      <>
        <Button text="Ok"
                onClick={closeFirstModal}/>
        <Button text="Cancel"
                onClick={closeFirstModal}/>
      </>
  }
  const secondModal = {
    header: "Second modal",
    text: "Text for the second modal window",
    closeButton: true,
    actions:
      <>
        <Button text="OK"
                onClick={closeSecondModal}/>
        <Button text="Click"
                onClick={closeSecondModal}/>
      </>
  }

  return (
    <>
      <Button {...firstBtn}/>
      <Button {...secondBtn}/>
      {stateFirstModal &&
      <Modal closeModal={closeFirstModal} {...firstModal}/>}
      {stateSecondModal &&
      <Modal closeModal={closeSecondModal} {...secondModal}/>}
    </>
  );
}

export default App;
