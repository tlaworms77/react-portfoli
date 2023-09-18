import { Button, Link } from '@mui/material';
import * as React from 'react';

// image, css
import profileImage from '../assets/images/profile_unback.png';

export default function SideBar(props) {
  return (
    <>
      <div
        style={{
          height: '100vh',
          border: 'solid 1px black',
          minWidth: '25%',
          position: 'fixed',
          background: 'black',
          color: 'white',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            gap: '1em',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ paddingTop: '4rem' }}>
            <img
              src={profileImage}
              alt='my develop mimocon'
              width={'150px'}
              height={'150px'}
              style={{ borderRadius: '9999px', border: 'solid 8px white', background: 'white', marginBottom: '10px' }}
            />
          </div>
          <h1>JaeGeun Sim</h1>

          <Link href='#home'>
            <Button variant='text' sx={{ color: 'white', fontSize: '20px' }}>
              Home
            </Button>
          </Link>
          <Link href='#about'>
            <Button variant='text' sx={{ color: 'white', fontSize: '20px' }}>
              About
            </Button>
          </Link>
          <Link href='#resume'>
            <Button variant='text' sx={{ color: 'white', fontSize: '20px' }}>
              Resume
            </Button>
          </Link>
          <Link href='#project'>
            <Button variant='text' sx={{ color: 'white', fontSize: '20px' }}>
              Projects
            </Button>
          </Link>
          <Link href='#contact'>
            <Button variant='text' sx={{ color: 'white', fontSize: '20px' }}>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
