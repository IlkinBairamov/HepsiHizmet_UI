import { CommonPageContainer } from "../../components/CommonPageContainer"
import React from "react"
import './HomePage.scss';

export const HomePage : React.FC= ()=>{
    return (
      <>
      <CommonPageContainer/>
        {/* main */}
        <div className="hero hero-homepage">
            <div className="body-container">
               <div className="hero-overlay"></div>
            </div>
            <div className="wrapper">
                <h1 className="widow-fix">Hizmet Piş, Ağzıma Düş</h1>
                <h2 className="widow-fix">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini&nbsp;hallet</h2>
              <div className="search-form">
                <form className="d-flex">
                  <input type="text" name="searchText"  className="search-form__input ng-pristine ng-invalid ng-touched"  placeholder="hangi hizmeti arıyorsun?" />
                  <button className="form-submit">ARA</button>
                </form>
              </div>
            </div>
           
        </div>
        {/* value-propositon section */}
        <section className="value-propositon">
          <div className="container">
            <div className="row">
              <div className="center">
                <div className="col-md-6">
                    <div className="values__text">
                            <h2 className="tag-style">Kaliteli Hizmet Al</h2>
                            <p>Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür,  güvenle kararını verirsin.</p>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="value-image">
                    <img src="https://cdn.armut.com/images/landing-pages/tr/qualty.jpg" alt=">Kaliteli Hizmet Al" />
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="col-md-6">
                  <div className="value-image">
                    <img src="https://cdn.armut.com/images/landing-pages/tr/qualty.jpg" alt=">Kaliteli Hizmet Al" />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="values__text">
                            <h2 className="tag-style">Kaliteli Hizmet Al</h2>
                            <p>Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür,  güvenle kararını verirsin.</p>
                    </div>
                </div>
              </div>
              <div className="center">
                <div className="col-md-6">
                    <div className="values__text">
                            <h2 className="tag-style">Kaliteli Hizmet Al</h2>
                            <p>Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür,  güvenle kararını verirsin.</p>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="value-image">
                    <img src="https://cdn.armut.com/images/landing-pages/tr/qualty.jpg" alt=">Kaliteli Hizmet Al" />
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="col-md-6">
                  <div className="value-image">
                    <img src="https://cdn.armut.com/images/landing-pages/tr/qualty.jpg" alt=">Kaliteli Hizmet Al" />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="values__text">
                            <h2 className="tag-style">Kaliteli Hizmet Al</h2>
                            <p>Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları gerçek müşteri yorumları sayesinde görür,  güvenle kararını verirsin.</p>
                    </div>
                </div>
              </div>
                <div className="col-xs-12 text-howto">
                  Nasıl Çalışır
                </div>
            </div>
          </div>
        </section>
        {/* howto section */}
        <section className="howto">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                          <div className="howto-first" style={{ backgroundImage:`url('https://cdn.armut.com/images/howto/tr/howto01.png')`}}>
                              <span className="numbers">1</span><div className="howto-title">İHTİYACINI BİRKAÇ SORUDA ANLAT</div>
                              <span className="green-line"></span>
                              <div className="howto-content">İhtiyacına özel soruları cevapla ve iletişim bilgilerini gir. İstersen iletişim bilgilerini gizli tut.</div>
                          </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                          <div className="howto-first" style={{ backgroundImage:`url('https://cdn.armut.com/images/howto/tr/howto02.png')`}}>
                              <span className="numbers">1</span><div className="howto-title">İHTİYACINI BİRKAÇ SORUDA ANLAT</div>
                              <span className="green-line"></span>
                              <div className="howto-content">İhtiyacına özel soruları cevapla ve iletişim bilgilerini gir. İstersen iletişim bilgilerini gizli tut.</div>
                          </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                          <div className="howto-first" style={{ backgroundImage:`url('https://cdn.armut.com/images/howto/tr/howto03.png')`}}>
                              <span className="numbers">1</span><div className="howto-title">İHTİYACINI BİRKAÇ SORUDA ANLAT</div>
                              <span className="green-line"></span>
                              <div className="howto-content">İhtiyacına özel soruları cevapla ve iletişim bilgilerini gir. İstersen iletişim bilgilerini gizli tut.</div>
                          </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}