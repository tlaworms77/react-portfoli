import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

// image, css
import imageA10 from '../assets/images/amaranth10.png';
import imageSmartA10 from '../assets/images/smartA10.png';

export default function Project(props) {
  return (
    <div id='project' className='section'>
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
            Projects
          </Typography>
        </Box>
        <div style={{ display: 'flex', gap: 30 }}>
          <div style={{ flex: 1.2, paddingLeft: '70px', textAlign: 'left' }}>
            <Box style={{ paddingBottom: '32px' }}>
              <Card sx={{ minWidth: '120vh', width: '95%', background: '#0A212D', border: 'solid 1px green' }}>
                <Box
                  sx={{
                    margin: '30px 30px 0 30px',
                    border: 'solid 1px white',
                    borderRadius: 3,
                    background: 'black',
                  }}
                >
                  <CardMedia sx={{ height: 600 }} image={imageA10} title='green iguana' />
                </Box>
                <CardContent>
                  <Box sx={{ margin: '0 25px', color: 'white' }}>
                    <Typography gutterBottom variant='body1' component='div'>
                      Saas 기반 올인원 솔루션
                    </Typography>
                    <Typography gutterBottom variant='h4' component='div' fontWeight={800}>
                      Amaranth10 ERP 물류 패키지 개발
                    </Typography>
                    <Typography variant='body2' color='text.secondary' style={{ color: 'white' }}>
                      <ul>
                        <li>BOM관리부터 생산지시 및 자재청구, 자재이동요청까지 담당</li>
                        <li>물류환경설정에 따른 자동프로세스 처리</li>
                        <li>물류 팀 내 사용될 공통 스크립트 개발 및 배포</li>
                        <li>물류 모듈의 형황 메뉴 및 엑셀 임포트 개발</li>
                        <li>물류공통관리의 품목관리 및 사업장관리 개발</li>
                        <li>기본 창고 장소관리 개발</li>
                        <li>물류 환경설정메뉴 개발</li>
                        <li>
                          결론: KPI 개발 준수율 100% 달성 및 추가적으로 팀 내 공통업무 담당하여 팀의 생산성향상에
                          기여하였습니다.
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box style={{ paddingBottom: '32px' }}>
              <Card sx={{ minWidth: '120vh', width: '95%', background: '#0A212D', border: 'solid 1px green' }}>
                <Box
                  sx={{
                    margin: '30px 30px 0 30px',
                    border: 'solid 1px white',
                    borderRadius: 3,
                    background: 'black',
                  }}
                >
                  <CardMedia sx={{ height: 400 }} image={imageSmartA10} title='green iguana' />
                </Box>
                <CardContent>
                  <Box sx={{ margin: '0 25px', color: 'white' }}>
                    <Typography gutterBottom variant='body1' component='div'>
                      물류/생산현장을 위한 새로운 ERP
                      <br />
                      PC 중심의 전통적인 ERP를 벗어난 현장 중심의 ERP 솔루션 프로젝트
                    </Typography>
                    <Typography gutterBottom variant='h4' component='div' fontWeight={800}>
                      스마트제조시스템 개발
                    </Typography>
                    <Typography variant='body2' color='text.secondary' style={{ color: 'white' }}>
                      <ul>
                        <li>기존 개발된 물류 웹 메뉴를 기준으로 웹/앱으로 신규 개발</li>
                        <li>물류(생산, 재고, 원가, 영업 등) 물류 ERP 커스텀 컴포넌트 개발 및 공통화 처리</li>
                        <li>팀 내 생산성 향상을 위한 공통 스크립트 개발 담당</li>
                        <li>윈도우에 종속된 인쇄물 관련하여 브라우저 출력기능으로 개선</li>
                        <li>전자결재, 그룹문서, 쪽지 등 그룹웨어 API 연동을 통한 메모 컴포넌트 개발</li>
                        <li>출력물 바코드 기능 개발</li>
                        <li>바코드 기기가 사용될 수 없는 경우를 대비하여 카메라 스캔 기능 확장</li>
                        <li>기존 물류 메뉴 개발 진행 총 10건</li>
                        <li>
                          결론: KPI 개발 준수율 100% 달성 및 추가적으로 팀 내 공통업무 담당하여 팀의 생산성향상에
                          기여하였습니다.
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
