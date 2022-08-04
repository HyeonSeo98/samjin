import React,{useState}  from "react";
import './Contents.css';
import styled from "styled-components"
import { FaHeart,FaShoppingCart } from "react-icons/fa";

export default function Contents() {
  const Button = styled.button`
    width: 50%;
    height: 54px;
    border: none;
    background: #f8f8f8;
    color: #bbb;
    transition: all 0.6s;
    cursor: pointer;
    &:hover {
      background: #ccc;
      color: #000;
      font-weight: 700;
    }
  `

  const bestPs = [
    {
      id: 'best-01',
      alt: 'best_img01',
      image: '/images/best_01.png',
      desc: '쫄깃하고 탱글탱글한 식감이 일품!',
      title: '캠핌어묵탕(순한맛)',
      saleT: '8,900원',
      price: '7,100원',
      sale : true
    },
    {
      id: 'best-02',
      alt: 'best_img02',
      image: '/images/best_02.png',
      desc: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
      title: '어묵탕모둠어묵 플러스',
      price: '19,000원'
    },
    {
      id: 'best-03',
      alt: 'best_img03',
      image: '/images/best_03.png',
      desc: '시장에서 맛 보았던 추억의 어묵 모듬',
      title: '[창립 69주년 행사] 실속모듬어묵',
      saleT: '23,500원',
      price: '19,900원',
      sale : true
    },
    {
      id: 'best-04',
      alt: 'best_img04',
      image: '/images/best_04.png',
      desc: '인기 고급제품으로 구성된 선물세트',
      title: '1953세트 2호',
      price: '36,000원',
    },
    {
      id: 'best-05',
      alt: 'best_img05',
      image: '/images/best_05.png',
      desc: '팔도비빔장으로 어묶볶음을 간편하게',
      title: '떡한끼 볶음요리용(팔도)',
      price: '4,980원',
      new: true
    },
    {
      id: 'best-06',
      alt: 'best_img06',
      image: '/images/best_06.png',
      desc: '사정에서 소량으로 즐기는 꼬치어묵',
      title: '[냉동] 딱한끼 사각꼬치',
      saleT: '6,990원',
      price: '5,500원',
      sale : true
    },
    {
      id: 'best-07',
      alt: 'best_img07',
      image: '/images/best_07.png',
      desc: '어묵 고유의 탱글하고 담백한 맛',
      title: '딱한끼 어묵탕(순한맛)',
      price: '4,000원',
      best: true
    },
    {
      id: 'best-08',
      alt: 'best_img08',
      image: '/images/best_08.png',
      desc: '간신어묵 6종을 한번에 즐길 수 있는 제품',
      title: '어부의바 6종세트',
      saleT: '13,000원',
      price: '9,900원',
      saletag : true ,
      sale : true
    }
  ]

  const recPs = [
    {
      id: 'rec-01',
      alt: 'rec_img01',
      image: '/images/recommend_01.jpg',
      desc: '팔도x삼진 신제품 기념 이벤트',
      title: '팔도 딱한끼 볶음어묵 2종',
      saleT: '12,940원',
      price: '8,900원',
      new: true,
      saleTag: true,
      sale: true
    },
    {
      id: 'rec-02',
      alt: 'rec_img02',
      image: '/images/recommend_02.png',
      desc: '탱글한 식감이 일품인 모듬어묵',
      title: '특선 모듬어묵',
      price: '16,000원',
      new: true
    },
    {
      id: 'rec-03',
      alt: 'rec_img03',
      image: '/images/recommend_03.png',
      desc: '팔도x삼진 콜라보 사각어묵',
      title: '딱한끼 볶음사각(팔도)',
      price: '3,980원',
      new: true
    },
    {
      id: 'rec-04',
      alt: 'rec_img04',
      image: '/images/recommend_04.png',
      desc: '고소하고 담백한 사각어묵',
      title: '담백한 사각어묵',
      price: '2,700원',
      new: true
    },
    {
      id: 'rec-05',
      alt: 'rec_img05',
      image: '/images/recommend_05.jpg',
      desc: '잘게 썬 당면이 가득 당겨 탱글한 어묵',
      title: '삼각당면(진공)',
      price: '4,980원',
      new: true
    },
    {
      id: 'rec-06',
      alt: 'rec_img06',
      image: '/images/recommend_06.jpg',
      desc: '오징어를 듬뿍 넣어 감칠맛이 좋은 어묵',
      title: '오징어땡소(진공)',
      price: '3,480원',
      new: true
    },
    {
      id: 'rec-07',
      alt: 'rec_img07',
      image: '/images/recommend_07.png',
      desc: '매콤한 김치와 어묵이 어우러진 볶음밥',
      title: '[냉동] 김치 어묵볶음밥',
      saleT: '9,980원',
      price: '3,980원',
      new: true,
      sale: true
    },
    {
      id: 'rec-08',
      alt: 'rec_img08',
      image: '/images/recommend_08.png',
      desc: '신선한 새우가 가득 들어있는 어묵볶음밥',
      title: '[냉동] 새어어묵볶음밥',
      saleT: '10,980원',
      price: '8,700원',
      new: true
    },

  ]

  const [count, setCount] = useState([0,0,0,0,0,0,0,0])
  const [countR, setCountR] = useState([0,0,0,0,0,0,0,0])

  const giftPs = [
    {
      id: 'gift-01',
      alt: 'gift_img01',
      image: '/images/gift_01.png',
      title: '1953세트 2호',
      sub: '인기고급제품으로 구성된 선물세트',
      price: '36,000원'
    },
    {
      id: 'gift-02',
      alt: 'gift_img02',
      image: '/images/gift_02.png',
      title: '삼진프리미엄세트',
      sub: '삼진을 대표하는 프리미엄 어묵',
      price: '48,000원'
    },

  ]

  const banners = [
    {
      id: 'sginIn',
      image: '/images/sginIn.png',
      alt: 'sginIn_img',
      title: '회원가입시 마일리지 혜택',
      sub: '신규 회원가입 시 2,000원 마일리지가 지급됩니다.'
    },
    {
      id: 'service',
      image: '/images/sginIn.png',
      alt: 'service_img',
      title: '3만원 이상 무료배송',
      sub: '3만원 이상 무제한 무료배송 합니다.'
    },
    {
      id: 'Amount',
      image: '/images/sginIn.png',
      alt: 'Amount_img',
      title: '금액대별 회원 혜택',
      sub: '구매 금액대별 혜택을 드리는 회원제도'
    },
  ]

  const stores = [
    {
      id : 'store-01',
      image : '/images/store.jpg',
      alt : 'store_img',
      badge : 'STORE',
      title : '가까운 매장 찾기',
      sub : '우리동네에서 가까운\n 삼진어묵 매장을 찾아보세요!'
    },
    {
      id : 'store-02',
      image : '/images/reservation.jpg',
      alt : 'reservation_img',
      badge : 'RESERVATION',
      title : '체험 역사관 예약',
      sub : '삼진어묵 역사관 방문과\n 어묵 만들기를 체험해보세요!'
    },

  ]


  return (
    <>
      <section className="visual-name">
        <img src={process.env.PUBLIC_URL + "/images/visual_main_01.jpg"} alt="visual_img01"/>
      </section>

      <section className="best-container">
        <h2 className="best__title">삼진어묵 베스트</h2>
        <div className="best_box">
          {
            bestPs.map((bestP,i) => {
              return(
                  <div className="best" key={bestP.id}>
                    <img src={bestP.image} alt={bestP.alt} />
                    <p className="tag_box">
                      {bestP.new ? <img src="/images/new.png"/> : null}
                      {bestP.best ? <img src="/images/best.png"/> : null}
                      {bestP.saletag ? <img src="/images/sale.png"/> : null}
                    </p>
                    <div className="txt_box">
                      <p className='best_desc'>{bestP.desc}</p>
                      <h4 className="best_title">{bestP.title}</h4>
                      <p className="best_price">
                        {bestP.sale ? <span>{bestP.saleT}</span> : null}
                        {bestP.price}
                      </p>
                    </div>
                    <div className="best_btn">
                      <Button onClick={() =>{
                        let countCopy =[...count]
                        countCopy[i] += 1
                        setCount(countCopy)
                      }}>🤍찜하기{count[i]}</Button>
                      <Button >🛒장바구니</Button>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </section>

      <section className="recommend-container">
        <h2 className="rec__title">삼진어묵 추천상품</h2>
        <div className="rec_box">
          {
            recPs.map((recP,i) => {
              return(
                <div className="recommend" key={recP.id}>
                  <img src={recP.image} alt={recP.alt} />
                  <div className="tag_box">
                    {recP.new ? <img src="/images/new.png"/> : null}
                    {recP.saleTag ? <img src="/images/sale.png"/> : null}
                  </div>
                  <div className="txt_box">
                      <p className='best_desc'>{recP.desc}</p>
                      <h4 className="best_title">{recP.title}</h4>
                      <p className="best_price">
                        {recP.sale ? <span>{recP.saleT}</span> : null}
                        {recP.price}
                      </p>
                  </div>
                  <div className="rec_btn">
                    <Button onClick={() => {
                      let countCopy = [...countR]
                      countCopy[i] += 1
                      setCountR(countCopy)
                    }}>🤍찜하기{countR[i]}</Button>
                    <Button>🛒장바구니</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="gift-container">
        <h2 className="gift__title">삼진어묵 선물세트</h2>
        <div className="gift_box">
          {
            giftPs.map((giftP) => {
              return (
                <div className="gift_pro" key={giftP.id}>
                  <img src={giftP.image} alt={giftP.alt} />
                  <div className="txt">
                    <p className="title">{giftP.title}</p>
                    <p className="sub">{giftP.sub}</p>
                    <p className="price">{giftP.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="banner-container">
        <div className="banner_box">
          {
            banners.map((banner) => {
              return (
                <div className="banner" key={banner.id}>
                  <img src={banner.image} alt={banner.alt} />
                  <p className="title">{banner.title}</p>
                  <p className="sub">{banner.sub}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="store-container">
        <div className="store_box">
          {
            stores.map((store) => {
              return(
                <div className="store" key={store.id}>
                  <div className="img_box"><img src={store.image} alt={store.alt} /></div>
                  <div className="txt">
                    <p className="badge">{store.badge}</p>
                    <p className="title">{store.title}</p>
                    <p className="sub">{store.sub}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="insta-container">
        <div className="insta__title">
          <a href="#!">인스타그램 @samjinamook</a>
        </div>
      </section>

    </>
  )
}