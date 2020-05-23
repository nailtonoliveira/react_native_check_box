import React, {useState, useEffect} from 'react';

import CheckBox from './components/CheckBox';

import {Container} from './styles';

const App = () => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    console.log('Its works great!!', checked);
  }, [checked]);

  return (
    <Container>
      <CheckBox
        label="My own CheckBox works fine?"
        value={checked}
        onChange={(newValue) => setChecked(newValue)}
        checkedColor="#8E24AA"
        uncheckedColor="#E91E63"
      />
    </Container>
  );
};

export default App;
