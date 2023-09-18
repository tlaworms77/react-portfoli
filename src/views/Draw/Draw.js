import React from 'react';
import TableDraw from './TableImage';
import DivImage from './DivImage';

export default function Draw() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <TableDraw />
        <DivImage />
      </div>
    </>
  );
}
