import React from "react";


export default function Header() {
  const liGnbs = [
    {id: 'gnb-01',gnbname: '로그인'},
    {id: 'gnb-02',gnbname: '회원가입'},
    {id: 'gnb-03',gnbname: '장바구니'}
  ]
  const liLnbs = [
    {id: 'lnb-01',lnbname:'베스트상품'},
    {id: 'lnb-02',lnbname:'신상품'},
    {id: 'lnb-03',lnbname:'기획전'},
    {id: 'lnb-04',lnbname:'이벤트/혜택'},
    {id: 'lnb-05',lnbname:'금복레시피'},
    {id: 'lnb-06',lnbname:'레시피공모전'}
  ]

  return (
    <header>
      <div className="header__container">
        <nav className="gnb">
          <ul>
            {
              liGnbs.map((liGnb) => {
                return (
                  <li key={liGnb.id}>{liGnb.gnbname}</li>
                )
              })
            }
          </ul>
        </nav>
        <div className="logo">
          <div className="logo_box">
            <img src="/images/logo.jpg" alt="logo" />
          </div>
        </div>
        <nav className="lnb">
          <ul>
            {
              liLnbs.map((liLnb) => {
                  return (
                  <li key={liLnb.id}>{liLnb.lnbname}</li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}