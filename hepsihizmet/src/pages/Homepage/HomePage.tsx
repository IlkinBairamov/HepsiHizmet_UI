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
        {/* appstore-desktop */}
        <section className="appstore-ultraHd1">
          <div className="container">
          <div className="col-sm-6 download-banner-container">
              <h4 className="widow-fix"> Telefonuna&nbsp;İndir</h4>
              <p className="widow-fix">  Artık cebinde de hizmet pişsin, ağzına düşsün! Resmi Armut.com telefon uygulamasını&nbsp;indir.</p>
              <div className="icon-app">
                      <a href="https://app.adjust.com/f7wvf7e?campaign=O_Tr_Arm_iOS_C_N_U_U_Homepage_U" title="Binlerce hizmet verene ulaşmanın kolay yolu Armut'un IOS uygulamasını indirmek için App Store linki">
                        <img src="https://cdn.armut.com/images/mobile-apps/tr:h-45/app-store-download-badge-tr.png" alt="" />
                      </a>
                      <a href="https://app.adjust.com/chnlj3s?campaign=O_Tr_Arm_Android_C_N_U_U_Homepage_U" title="Binlerce hizmet verene ulaşmanın kolay yolu Armut'un Android uygulamasını indirmek için Google Play Store linki">
                        <img src="https://cdn.armut.com/images/mobile-apps/tr:h-45/play-store-download-badge-tr.png" alt="" />
                      </a>
                        <a href="https://app.adjust.com/qa4yd9f?campaign=O_Tr_Arm_Android_C_U_U_U_Homepage_U-Huawei" title="Binlerce hizmet verene ulaşmanın kolay yolu Armut'un Android uygulamasını indirmek için Google Play Store linki">
                          <img src="https://cdn.armut.com/images/mobile-apps/tr:h-45/app-gallery-download-badge-tr.png" /> 
                        </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="popular" style={{marginTop:"10px"}}>
            <div className="container text-center">
                <div className="col-xs-12 text-armut margin-armut">
                    Popüler Hizmetler
                </div>
                <div className="row">
                    <div className="col-xs-12 text-left all-services-list">
                        
                                <a href="https://armut.com/bos-ev-temizligi">Boş Ev Temizliği</a>
                            
                                <a href="https://armut.com/boyaci-boya-badana-ustasi">Boyacı (Boya Badana Ustası)</a>
                            
                                <a href="https://armut.com/cam-balkon">Cam Balkon</a>
                            
                                <a href="https://armut.com/direksiyon-dersi">Direksiyon Dersi</a>
                            
                                <a href="https://armut.com/esya-depolama">Eşya Depolama</a>
                            
                                <a href="https://armut.com/parca-esya-tasima">Parça Eşya Taşıma</a>
                            
                                <a href="https://armut.com/ev-tadilat">Ev Tadilat</a>
                            
                                <a href="https://armut.com/ev-temizligi">Ev Temizliği</a>
                            
                                <a href="https://armut.com/evden-eve-nakliyat">Evden Eve Nakliyat</a>
                            
                                <a href="https://armut.com/fayans-doseme">Fayans Döşeme</a>
                            
                                <a href="https://armut.com/ic-mimar">İç Mimar</a>
                            
                                <a href="https://armut.com/ilkokul-ozel-ders">İlkokul Özel Ders</a>
                            
                                <a href="https://armut.com/koltuk-yikama-temizleme">Koltuk Yıkama Temizleme</a>
                            
                                <a href="https://armut.com/logo-tasarim">Logo Tasarım</a>
                            
                                <a href="https://armut.com/minivan-nakliye">Minivan Nakliye</a>
                            
                                <a href="https://armut.com/mutfak-dolabi-yapimi">Mutfak Dolabı Yapımı</a>
                            
                                <a href="https://armut.com/online-ingilizce-ozel-ders">Online İngilizce Özel Ders</a>
                            
                                <a href="https://armut.com/online-psikolog">Online Psikolog</a>
                            
                                <a href="https://armut.com/ortaokul-matematik-ozel-ders">Ortaokul Matematik Özel Ders</a>
                            
                                <a href="https://armut.com/psikolog">Psikolog</a>
                            
                                <a href="https://armut.com/sehirler-arasi-nakliyat">Şehirler Arası Nakliyat</a>
                            
                                <a href="https://armut.com/profesyonel-site-bina-ve-apartman-yonetimi">Profesyonel Site Bina ve Apartman Yönetimi</a>
                            
                                <a href="https://armut.com/tyt-ayt-matematik-ozel-ders">TYT AYT Matematik Özel Ders</a>
                            
                                <a href="https://armut.com/web-site-yapimi">Web Site Yapımı</a>
                            
                    </div>
                </div>
            </div>
        </section>
      </>
    )
}