import React, { useEffect } from 'react';
import Home from '../../../components/fragments/Admin/Home';

export default function Content() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}
