import React from 'react';
import TableDraw from './TableImage';
import DivImage from './DivImage';

export default function DrawLayout() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <TableDraw />
        <DivImage />
      </div>
    </>
  );
}
