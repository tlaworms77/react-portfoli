import * as React from 'react';
import { Button, Link } from '@mui/material';
import GraphemeSplitter from 'grapheme-splitter';
import TypewriterComponent from 'typewriter-effect';

export default function Home(props) {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <>
      <div id='home' className='section'>
        <div
          style={{
            textAlign: 'center',
            gap: '1.75em',
            alignItems: 'center',
            minHeight: '100vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(1,minmax(0, 1fr))',
          }}
        >
          <div style={{ color: 'white' }}>
            <div style={{ fontSize: '50px', fontWeight: '600', marginBottom: '20px' }}>반갑습니다!</div>
            <div className='typewriter'>
              <TypewriterComponent
                options={{
                  strings: [
                    '✋ 안녕하세요! 심재근입니다.',
                    '저는 개발경력이 3년 10개월입니다.',
                    '풀스택으로 개발을 해왔습니다!',
                    '아래로 스크롤을 내려서 확인해주세요! :D',
                  ],
                  delay: 150,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                  stringSplitter: stringSplitter,
                }}
              />
            </div>
            <Link href='#contact'>
              <Button variant='outlined' sx={{ color: 'white', fontSize: '20px' }}>
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
