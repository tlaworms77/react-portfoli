import React from 'react';

const RactInfo = [
  [
    /** 1 */ { bgColor: '#FFFFFF', border: { top: true, left: true } },
    /** 2 */ { bgColor: '#FFFFFF', border: { top: true, right: true } },
    /** 3 */ { bgColor: '#F919FF', border: { top: true, left: true } },
    /** 4 */ { bgColor: '#F919FF', border: { top: true, right: true } },
    /** 5 */ { bgColor: '#000000', border: { top: true } },
    /** 6 */ { bgColor: '#000000', border: { top: true, bottom: true } },
    /** 7 */ { bgColor: '#000000', border: { top: true } },
    /** 8 */ { bgColor: '#000000', border: { top: true, right: true } },
  ],
  [
    /** 9  */ { bgColor: '#FFFFFF', border: { left: true } },
    /** 10 */ { bgColor: '#FFFFFF', border: { right: true } },
    /** 11 */ { bgColor: '#F919FF', border: { left: true } },
    /** 12 */ { bgColor: '#F919FF', border: { right: true } },
    /** 13 */ { bgColor: '#000000', border: { right: true } },
    /** 14 */ { bgColor: '#001FFF', border: { top: true, left: true } },
    /** 15 */ { bgColor: '#001FFF', border: { top: true, right: true } },
    /** 16 */ { bgColor: '#000000', border: { right: true, left: true, bottom: true } },
  ],
  [
    /** 17 */ { bgColor: '#F919FF', border: { top: true, left: true } },
    /** 18 */ { bgColor: '#F919FF', border: { top: true, right: true } },
    /** 19 */ { bgColor: '#42FE00', border: { top: true, left: true, bottom: true } },
    /** 20 */ { bgColor: '#42FE00', border: { top: true, bottom: true } },
    /** 21 */ { bgColor: '#42FE00', border: { top: true } },
    /** 22 */ { bgColor: '#001FFF', border: { left: true, bottom: true } },
    /** 23 */ { bgColor: '#001FFF', border: { right: true, left: true, bottom: true, leftColor: 'transparent' } },
    /** 24 */ { bgColor: '#3FFFFF', border: { top: true, right: true, left: true } },
  ],
  [
    /** 25 */ { bgColor: '#F919FF', border: { left: true, bottom: true } },
    /** 26 */ { bgColor: '#F919FF', border: { right: true, bottom: true } },
    /** 27 */ { bgColor: '#FA0000', border: { top: true, left: true } },
    /** 28 */ { bgColor: '#FA0000', border: { top: true, right: true, bottom: true } },
    /** 29 */ { bgColor: '#42FE00', border: { left: true } },
    /** 30 */ { bgColor: '#42FE00', border: { top: true, right: true } },
    /** 31 */ { bgColor: '#3FFFFF', border: { top: true, left: true, bottom: true } },
    /** 32 */ { bgColor: '#3FFFFF', border: { right: true, bottom: true } },
  ],
  [
    /** 33 */ { bgColor: '#000000', border: { top: true, left: true } },
    /** 34 */ { bgColor: '#000000', border: { top: true, right: true, bottom: true } },
    /** 35 */ { bgColor: '#FA0000', border: { right: true, left: true, bottom: true } },
    /** 36 */ { bgColor: '#F2F2F2', border: { top: true, left: true } },
    /** 37 */ { bgColor: '#F2F2F2', border: { top: true, right: true } },
    /** 38 */ { bgColor: '#42FE00', border: { right: true, left: true } },
    /** 39 */ { bgColor: '#FFFE00', border: { top: true, left: true } },
    /** 40 */ { bgColor: '#FFFE00', border: { top: true, right: true } },
  ],
  [
    /** 41 */ { bgColor: '#000000', border: { right: true, left: true } },
    /** 42 */ { bgColor: '#FFFFFF', border: { top: true, left: true } },
    /** 43 */ { bgColor: '#FFFFFF', border: { top: true, right: true } },
    /** 44 */ { bgColor: '#F2F2F2', border: { left: true, bottom: true } },
    /** 45 */ { bgColor: '#F2F2F2', border: { right: true, bottom: true } },
    /** 46 */ { bgColor: '#42FE00', border: { right: true, left: true } },
    /** 47 */ { bgColor: '#FFFE00', border: { left: true } },
    /** 48 */ { bgColor: '#FFFE00', border: { right: true } },
  ],
  [
    /** 49 */ { bgColor: '#000000', border: { right: true, left: true } },
    /** 50 */ { bgColor: '#FFFFFF', border: { left: true, bottom: true } },
    /** 51 */ { bgColor: '#FFFFFF', border: { right: true, left: true, bottom: true, leftColor: 'transparent' } },
    /** 52 */ { bgColor: '#000000', border: { top: true, right: true, left: true } },
    /** 53 */ { bgColor: '#FFFE00', border: { top: true, left: true } },
    /** 54 */ { bgColor: '#FFFE00', border: { top: true } },
    /** 55 */ { bgColor: '#FFFE00', border: {} },
    /** 56 */ { bgColor: '#FFFE00', border: { right: true } },
  ],
  [
    /** 57 */ { bgColor: '#000000', border: { left: true, bottom: true } },
    /** 58 */ { bgColor: '#000000', border: { top: true, bottom: true } },
    /** 59 */ { bgColor: '#000000', border: { top: true, bottom: true } },
    /** 60 */ { bgColor: '#000000', border: { right: true, bottom: true } },
    /** 61 */ { bgColor: '#FFFE00', border: { left: true, bottom: true } },
    /** 62 */ { bgColor: '#FFFE00', border: { bottom: true } },
    /** 63 */ { bgColor: '#FFFE00', border: { bottom: true } },
    /** 64 */ { bgColor: '#FFFE00', border: { right: true, bottom: true } },
  ],
];

export default function TableDraw() {
  const ractPX = '69.63px';
  const tdStyled = { width: ractPX, height: ractPX, tableLayout: 'fixed' };
  const fixedTrStyled = { border: 'solid 3px transparent' };
  const ract = RactInfo;

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>- Table Image -</h1>
        <div style={{ margin: '10px', display: 'inline-block', textAlign: 'center' }}>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead />
            <tbody>
              {ract.map((tr, trIndex) => (
                <tr key={'tr-' + (trIndex + 1)} style={{ ...fixedTrStyled }}>
                  {tr.map((td, tdIndex) => {
                    const trueStyled = 'solid 3px black';
                    const falseStyled = 'solid 2px transparent';
                    const top = td.border.top === true ? trueStyled : falseStyled;
                    const right = td.border.right === true ? trueStyled : falseStyled;
                    const bottom = td.border.bottom === true ? trueStyled : falseStyled;
                    const left = td.border.left === true ? trueStyled : falseStyled;
                    const leftColor = td.border.leftColor ? { borderLeftColor: 'transparent' } : {};
                    return (
                      <>
                        <td
                          key={'td-' + trIndex * 8 + (tdIndex + 1)}
                          style={{
                            ...tdStyled,
                            borderTop: top,
                            borderRight: right,
                            borderBottom: bottom,
                            borderLeft: left,
                            ...leftColor,
                            backgroundColor: td.bgColor,
                          }}
                        >
                          {/* {trIndex * 8 + tdIndex + 1} */}
                        </td>
                      </>
                    );
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot />
          </table>
        </div>
      </div>
    </>
  );
}
