import * as React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import TypewriterComponent from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';

// image, css
import mimoconImage from '../assets/images/mimocon.png';

export default function Contact(props) {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <div id='contact' className='section'>
      <div
        style={{
          textAlign: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <div style={{ padding: '30px' }}>
          <Typography sx={{ fontSize: 50, fontWeight: 800 }}>Contact</Typography>
        </div>
        <div style={{ color: 'white' }}>
          <img
            src={mimoconImage}
            alt='my develop mimocon'
            width={'280px'}
            height={'280px'}
            style={{ borderRadius: '9999px', border: 'solid 8px white', background: 'white', marginBottom: '20px' }}
          />
          <div className='typewriter'>
            <TypewriterComponent
              options={{
                strings: ['여기까지 읽어주셔서 감사합니다!'],
                delay: 100,
                pauseFor: 800,
                autoStart: true,
                loop: true,
                stringSplitter: stringSplitter,
              }}
            />
          </div>
          <Box>
            <Typography sx={{ fontSize: 30, fontWeight: 800, color: 'white' }} color='text.secondary' gutterBottom>
              Email: simjaegeun77@gmail.com
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 800, color: 'white' }} color='text.secondary' gutterBottom>
              Phone: 010-2966-4451
            </Typography>
            <Link href='#home'>
              <Button variant='outlined' sx={{ color: 'white', fontSize: '20px' }}>
                HOME
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
}
