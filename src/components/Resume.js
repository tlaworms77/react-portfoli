import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

export default function Resume(props) {
  return (
    <div id='resume' className='section'>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 50, fontWeight: 800, padding: '30px 0' }} gutterBottom>
            Resume
          </Typography>
        </Box>
        <div style={{ display: 'flex', gap: 30 }}>
          <div style={{ flex: 1.2, paddingLeft: '70px', textAlign: 'left' }}>
            <Box style={{ paddingBottom: '32px', background: 'transparent' }}>
              <Card sx={{ minWidth: 275, background: 'transparent' }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 30, fontWeight: 800, color: 'white' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    (주)더존비즈온
                  </Typography>
                  <Typography sx={{ fontSize: 20, color: 'dimgray' }} color='text.secondary' gutterBottom>
                    2019.07.08 ~ 2023.04.30 : (3년 10개월)
                  </Typography>
                  <Typography variant='h6' component='div' sx={{ textAlign: 'left', color: 'darkgray' }}>
                    <ul>
                      <li style={{ paddingBottom: '20px' }}>
                        <div>
                          <span>ERP10 개발</span>
                          <div>동서발전 ERP10 구축</div>
                          <div>담당업무: 설비관리패키지 커스텀 및 인사모듈 지원</div>
                          <div>Stack: Java, Spring, MyBatis, Oracle, JSP, HTML, CSS, Javascript, JQuery </div>
                        </div>
                      </li>
                      <li style={{ paddingBottom: '20px' }}>
                        <div>
                          <span>Amaranth10 개발</span>
                          <div>물류 ERP 패키지 웹 개발</div>
                          <div>담당업무: (생산, 제조, 구매, 영업) 파트 및 공통업무 담당</div>
                          <div>Stack: Java, Spring, Mybatis, MariaDB, Javascript, React</div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>Amaranth10 기반 스마트제조시스템 구축</span>
                          <div>물류 ERP 패키지 웹/앱 개발</div>
                          <div>담당업무: (생산, 제조, 구매, 영업) 파트 및 공통업무 담당</div>
                          <div>Stack: Java, Spring, Mybatis, MariaDB, Javascript, React</div>
                        </div>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
