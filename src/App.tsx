import React from 'react';
import styled from 'styled-components';
import NumberDisplay from './numberDisplay/NumberDisplay';

const Header = styled.header`
  text-align: center;
`;

const App = () => {
  return (
    <div>
      <Header>
        <h1>Nufreq - Count your numbers</h1>
      </Header>
      <main>
        <NumberDisplay />
      </main>
    </div>
  );
};

export default App;
