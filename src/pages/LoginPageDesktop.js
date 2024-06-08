import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPageDesktop.module.css";

const LoginPageDesktop = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/register-page-desktop");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSVGIconClick = useCallback(() => {
    navigate("/shop-page-desktop");
  }, [navigate]);

  const onUserBtnIconClick = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/checkout-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.loginPageDesktop}>
      <div className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.footerContent}>
            <div className={styles.info}>
              <div className={styles.logo}>
                <div className={styles.logo1}>
                  <div className={styles.nexton}>NEXTON</div>
                  <div className={styles.ecommerce}>eCommerce</div>
                </div>
              </div>
              <div className={styles.list}>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon} alt="" src="/svg10.svg" />
                  <div className={styles.pxRegular}>
                    <div className={styles.text}>Facebook</div>
                  </div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon1} alt="" src="/svg11.svg" />
                  <div className={styles.text}>Youtube</div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon} alt="" src="/svg12.svg" />
                  <div className={styles.text}>Telegram</div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon} alt="" src="/svg13.svg" />
                  <div className={styles.text}>Twitter</div>
                </a>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Getting started</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Release Notes</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Upgrade Guide</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Browser Support</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Dark Mode</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Explore</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Prototyping</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Design systems</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Pricing</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Security</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Community</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Discussion Forums</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Code of Conduct</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>Contributing</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>API Reference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.pxRegular}>
            <div className={styles.pxRegular}>
              <div className={styles.text}>Nexton eCommerce. © 2024</div>
            </div>
          </div>
          <div className={styles.paymentIcons}>
            <img className={styles.visaIcon} alt="" src="/visa@2x.png" />
            <img className={styles.visaIcon} alt="" src="/paypal@2x.png" />
            <img className={styles.stripeIcon} alt="" src="/stripe.svg" />
            <img className={styles.visaIcon} alt="" src="/verisign@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.h5}>
            <div className={styles.h21}>Login</div>
          </div>
          <div className={styles.loginForm}>
            <div className={styles.form}>
              <div className={styles.emailInput}>
                <div className={styles.h5}>
                  <div className={styles.h51}>Email</div>
                </div>
                <div className={styles.input}>
                  <input
                    className={styles.placeholder}
                    placeholder="example@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className={styles.emailInput}>
                <div className={styles.h5}>
                  <div className={styles.h51}>Password</div>
                </div>
                <input
                  className={styles.input1}
                  placeholder="enter password"
                  type="text"
                />
              </div>
              <div
                className={styles.continueBtn}
                onClick={onContinueBtnContainerClick}
              >
                <div className={styles.pxRegular}>
                  <div className={styles.text17}>Continue</div>
                </div>
              </div>
            </div>
            <div className={styles.seperator}>
              <div className={styles.divabsolute} />
              <div className={styles.spanrelative}>
                <div className={styles.pxMedium1}>
                  <div className={styles.text18}>OR</div>
                </div>
              </div>
            </div>
            <div className={styles.text19} onClick={onTextClick}>
              <span>{`New user? `}</span>
              <span className={styles.createAnAccount}>Create an account</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo2} onClick={onLogoContainerClick}>
            <div className={styles.nexton}>NEXTON</div>
            <div className={styles.ecommerce}>eCommerce</div>
          </div>
          <div className={styles.searchbar}>
            <img
              className={styles.svgIcon4}
              alt=""
              src="/svg.svg"
              onClick={onSVGIconClick}
            />
            <input
              className={styles.pxRegular14}
              placeholder="Search in products..."
              type="text"
            />
            <div className={styles.searchDropdown}>
              <div className={styles.products}>
                <div className={styles.searchItem}>
                  <img
                    className={styles.itemImageIcon}
                    alt=""
                    src="/itemimage@2x.png"
                  />
                  <div className={styles.itemDetails}>
                    <div className={styles.details}>
                      <div className={styles.logo}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>$169.99</div>
                        </div>
                        <div className={styles.pxRegular15}>
                          <div className={styles.text20}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.searchItem}>
                  <img
                    className={styles.itemImageIcon}
                    alt=""
                    src="/itemimage@2x.png"
                  />
                  <div className={styles.itemDetails}>
                    <div className={styles.details}>
                      <div className={styles.logo}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>$169.99</div>
                        </div>
                        <div className={styles.pxRegular15}>
                          <div className={styles.text20}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.searchItem}>
                  <img
                    className={styles.itemImageIcon}
                    alt=""
                    src="/itemimage@2x.png"
                  />
                  <div className={styles.itemDetails}>
                    <div className={styles.details}>
                      <div className={styles.logo}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>$169.99</div>
                        </div>
                        <div className={styles.pxRegular15}>
                          <div className={styles.text20}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categories}>
                <div className={styles.h5}>
                  <div className={styles.h51}>Categories</div>
                </div>
                <div className={styles.categoryItems}>
                  <div className={styles.categoryItem}>
                    <div className={styles.pxSemibold}>
                      <div className={styles.text23}>·</div>
                    </div>
                    <div className={styles.pxRegular18}>
                      <div className={styles.text24}>Men's Fashion</div>
                    </div>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.pxSemibold}>
                      <div className={styles.text23}>·</div>
                    </div>
                    <div className={styles.pxRegular18}>
                      <div className={styles.text24}>Women's Fashion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headerButtons}>
            <img
              className={styles.userBtnIcon}
              alt=""
              src="/userbtn.svg"
              onClick={onUserBtnIconClick}
            />
            <div className={styles.cart} onClick={onCartContainerClick}>
              <div className={styles.cartBtn}>
                <img className={styles.svgIcon5} alt="" src="/svg1.svg" />
                <div className={styles.cartItems}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageDesktop;
