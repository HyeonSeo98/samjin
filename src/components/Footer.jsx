import React from "react";
import styled from "styled-components"

export default function Footer() {

  const Button = styled.button`
    width:137px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-size: 15px;
    color: #666;
    text-align: center;
    border: 1px solid #666;
    background : #fff;
    display: block;
  `
  
  const Fmenus = styled.a `
    padding: 5px 15px;
    box-sizing: border-box;
    background: #0c0705;
    color: #fff;
    font-size: 12px;
    transition: all 0.4s;
    border-radius: 5px;
    &:hover {
      background: black;
    }
  `

  const notices = [
    {
      id: 'not-01',
      title: '[화물연대파업 관련 배송 지연 안내]',
      day: '2022.06.07'
    },
    {
      id: 'not-02',
      title: '[2/1(화) 설연휴로 인한 배송공지]',
      day: '2022.01.28'
    },
    {
      id: 'not-03',
      title: 'CJ 택배 파업 관련 배송 공지',
      day: '2022.01.18'
    },
    {
      id: 'not-04',
      title: '[1/1(토) 설연휴로 인한 배송공지]',
      day: '2021.12.27'
    }
  ]

  const footMenus = [
    {
      id: 'footM01',
      title: '회사소개'
    },
    {
      id: 'footM02',
      title: '체험,역사관'
    },
    {
      id: 'footM03',
      title: '삼진어묵당'
    },
    {
      id: 'footM04',
      title: '매장찾기'
    },
    {
      id: 'footM05',
      title: '고객센터'
    },
    {
      id: 'footM06',
      title: '개인정보처리방침'
    },
    {
      id: 'footM07',
      title: '이용약관'
    },
    {
      id: 'footM08',
      title: '이메일 무단수집 거부'
    },
  ]

  return (
    <>
      <section className="footerTop-container">
        <div className="containerT">
          <div className="contact">
            <div className="title">고객센터</div>
            <div className="container">
              <div className="left">
                <p className="call01">051-412-5468</p>
                <p className="call02"><span>문자상담</span>1644-1953</p>
                <p className="time">09:00 ~ 18:00 평일운영</p>
                <p className="kcpservice">
                  <p className="kcp">KCP구매안전(에스크로)서비스</p>
                <p className="real"><a href="#!">서비스 가입사실 확인</a></p>
                </p>
              </div>
              <div className="right">
                <Button>1대1 문의하기</Button>
                <Button>FAQ 바로가기</Button>
                <Button>삼진어묵</Button>
              </div>
            </div>
          </div>
          
          <div className="bank">
            <div className="title">입금계좌</div>
            <div className="container">
              <p className="txt">무통장입금시 확인해주세요.</p>
              <p className="bankN">322-910082-65305</p>
              <p className="name">하나은행<span>예금주 : 삼진식품㈜</span></p>
              <Button>입금자 확인하기</Button>
              <div className="img_box">
                <p><img src="/images/DM_20220706163311_070.png" alt="" /></p>
                <p><img src="/images/DM_20220706163311_071.png" alt="" /></p>
              </div>
            </div>
          </div>
          
          <div className="notice">
            <div className="title">공지사항<span>+</span></div>
            <div className="not_box">
              {
                notices.map((notice) => {
                  return(
                    <div className="not">
                      <p>{notice.title}</p>
                      <p>{notice.day}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className="footerBottom-container">
        <div className="containerB">
          <div className="logo">
            <p>삼진어묵</p>
            <p>SINCE 1953</p>
          </div>
          <ul className="footer_menu">
            {
              footMenus.map((footMenu) => {
                return(
                  <li key={footMenu.id}><Fmenus>{footMenu.title}</Fmenus></li>
                )
              })
            }
          </ul>
          <div className="footer_bottom">
            <p>상호명 : 삼진식품(주) 대표 : 박용준 부산광역시 영도구 태종로99번길 36 </p>
            <p>전화번호 : 051-412-5468 팩스번호 : 051-980-5468 문자상담 : 1644-1953 메일 : samjinorder@daum.net</p>
            <p>사업자등록번호 : 360-86-00207 통신판매업신고번호 : 제2016-부산영도-00107호 개인정보관리책임자 : 최문수</p>
          </div>
          <div className="copy">
            Copyright © samjinfood.com All right reserved.
          </div>
        </div>

      </section>
  
    </>
  )
}