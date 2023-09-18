import * as React from 'react';

// image, css
import profileImage from '../assets/images/mainPortfoli.jpeg';
import { Box, Card, CardContent, Typography } from '@mui/material';

export default function About(props) {
  return (
    <div id='about' className='section' style={{ background: 'lightslategray' }}>
      <div
        style={{
          textAlign: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 50, fontWeight: 800, padding: '30px 0' }} gutterBottom>
            About Me!
          </Typography>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: 30 }}>
          <div style={{ flex: 1.8, paddingLeft: '70px' }}>
            <Box style={{ textAlign: 'left', paddingBottom: '32px' }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 30, fontWeight: 800 }} color='text.secondary' gutterBottom>
                    안녕하세요!
                  </Typography>
                  <Typography variant='h5' component='div'>
                    두드릴수록 단단해지는 개발자 심재근입니다.
                  </Typography>
                  <Typography variant='h5' component='div'>
                    저는 팀이 조금 더 업무에 집중할 수 있도록 유지보수에 관심을 많이 가지고 있으며, 팀 내에서는
                    추가적으로 공통개발업무를 담당했습니다. '꼼꼼한' 성격을 가지고 많은 테스트를 통해서 안정적인 개발을
                    하고자 노력합니다.
                  </Typography>
                  <Typography variant='h5' component='div'></Typography>
                </CardContent>
              </Card>
            </Box>
            <Box style={{ textAlign: 'left' }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 30, fontWeight: 800 }} color='text.secondary' gutterBottom>
                    나의 강점은 꾸준함!
                  </Typography>
                  <Typography variant='h5' component='div'>
                    ERP 특성상 한 달 뒤, 두 달 뒤 개선이 들어올때 다시 분석하고 개선하는 일이 빈번하기 때문에 평소에
                    꾸준히 개선해왔습니다. 이 때! 추가적으로 개선작업 시 공통으로 추출하여 팀원들에게 공유하였습니다!
                    해당 공통은 4000~5000줄까지 쌓여갔고, 팀 내 필수 기능으로 자리잡았습니다.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '10px',
                width: '265px',
                background: 'white',
                borderRadius: '5px',
              }}
            >
              <img src={profileImage} alt='my develop mimocon' width={'265px'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
