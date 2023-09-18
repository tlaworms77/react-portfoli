import React from 'react';

export default function DivImage() {
  const fixedStyled = { border: '3px solid black' };
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>- Div Image -</h1>
        <div style={{ margin: '10px', display: 'inline-block' }}>
          <div style={{ width: '600px', height: '600px', position: 'relative', backgroundColor: 'black' }}>
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'calc(50% - 3px)',
                height: 'calc(50% - 3px)',
                backgroundColor: '#F919FF',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 'calc(50% - 3px)',
                height: 'calc(50% - 3px)',
                backgroundColor: '#FFFE00',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#FFFFFF',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: '25%',
                right: 0,
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#3FFFFF',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: 'calc(50% - 3px)',
                height: 'calc(50% - 3px)',
                backgroundColor: '#42FE00',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: '37.5%',
                left: '25%',
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#FA0000',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: '12.5%',
                right: '12.5%',
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#001FFF',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                bottom: '12.5%',
                left: '12.5%',
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#FFFFFF',
              }}
            />
            <div
              style={{
                ...fixedStyled,
                position: 'absolute',
                top: '50%',
                left: '37.5%',
                width: 'calc(25% - 3px)',
                height: 'calc(25% - 3px)',
                backgroundColor: '#F2F2F2',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
