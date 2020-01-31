import React from 'react';
import { dataSource } from '../router/Router';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <Button to="/films" big mr={4}>
        Hello
      </Button>
      <Button to="/films">Hello</Button>
    </div>
  );
}

export default Home;
