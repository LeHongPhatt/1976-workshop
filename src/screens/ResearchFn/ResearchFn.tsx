import React, {useState} from 'react';
import {Button} from 'react-native';

const ResearchFn = () => {
  // renders
  const [show, setShow] = useState(true);
  return (
    <>
      <Button title="Close Sheet" onPress={() => setShow(true)} />
    </>
  );
};

export default ResearchFn;
