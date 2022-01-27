import React, { useEffect } from 'react';
import Gallery from '../../../components/fragments/Admin/Gallery';

export default function Content() {
  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  return (
    <div>
      <Gallery />
    </div>
  );
}
