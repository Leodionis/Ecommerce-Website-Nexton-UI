import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckoutPageDesktop.module.css";

const CheckoutPageDesktop = () => {
  const navigate = useNavigate();

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
    <div className={styles.checkoutPageDesktop}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo} onClick={onLogoContainerClick}>
            <div className={styles.nexton}>NEXTON</div>
            <div className={styles.ecommerce}>eCommerce</div>
          </div>
          <div className={styles.searchbar}>
            <img
              className={styles.svgIcon}
              alt=""
              src="/svg.svg"
              onClick={onSVGIconClick}
            />
            <input
              className={styles.pxRegular}
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
                      <div className={styles.itemInfo}>
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
                        <div className={styles.pxRegular1}>
                          <div className={styles.text}>$199.99</div>
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
                      <div className={styles.itemInfo}>
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
                        <div className={styles.pxRegular1}>
                          <div className={styles.text}>$199.99</div>
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
                      <div className={styles.itemInfo}>
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
                        <div className={styles.pxRegular1}>
                          <div className={styles.text}>$199.99</div>
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
                      <div className={styles.text3}>·</div>
                    </div>
                    <div className={styles.pxRegular4}>
                      <div className={styles.text4}>Men's Fashion</div>
                    </div>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.pxSemibold}>
                      <div className={styles.text3}>·</div>
                    </div>
                    <div className={styles.pxRegular4}>
                      <div className={styles.text4}>Women's Fashion</div>
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
                <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                <div className={styles.cartItems}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.breadcrumbs}>
            <div className={styles.h5}>
              <div className={styles.h21}>Checkout</div>
            </div>
            <div className={styles.breadcrumbsNavigation}>
              <div className={styles.pxMedium}>
                <div className={styles.text7}>Homepage</div>
              </div>
              <div className={styles.pxMedium}>
                <div className={styles.text7}>/</div>
              </div>
              <div className={styles.pxMedium}>
                <div className={styles.text7}>Checkout</div>
              </div>
            </div>
          </div>
          <div className={styles.pageContent}>
            <div className={styles.checkoutDetails}>
              <div className={styles.contact}>
                <div className={styles.sectionHeader}>
                  <img className={styles.svgIcon2} alt="" src="/svg14.svg" />
                  <div className={styles.pxMedium}>
                    <div className={styles.text7}>CONTACT INFO</div>
                  </div>
                </div>
                <div className={styles.sectionContent}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Your phone number</div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="+62"
                        type="text"
                      />
                    </div>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Email address</div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shipping}>
                <div className={styles.sectionHeader1}>
                  <img className={styles.svgIcon2} alt="" src="/svg15.svg" />
                  <div className={styles.pxMedium}>
                    <div className={styles.text7}>SHIPPING ADDRESS</div>
                  </div>
                </div>
                <div className={styles.sectionContent1}>
                  <div className={styles.inputGroup1}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>First name</div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="...."
                        type="text"
                      />
                    </div>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Last name</div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="...."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup1}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Address line 1</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputWithLabel5}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Apt, Suite</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputGroup3}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Address line 2</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputGroup1}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>City</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Country</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputGroup1}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>State/Province</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>Postal code</div>
                      </div>
                      <div className={styles.input4}>
                        <div className={styles.placeholder}>
                          example@example.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.sectionHeader}>
                  <img className={styles.svgIcon2} alt="" src="/svg16.svg" />
                  <div className={styles.pxMedium}>
                    <div className={styles.text7}>PAYMENT</div>
                  </div>
                </div>
                <div className={styles.sectionContent2}>
                  <div className={styles.inputWithLabel11}>
                    <div className={styles.h5}>
                      <div className={styles.h51}>Card number</div>
                    </div>
                    <input
                      className={styles.input}
                      placeholder="000"
                      type="text"
                    />
                  </div>
                  <div className={styles.inputWithLabel11}>
                    <div className={styles.h5}>
                      <div className={styles.h51}>Name on the card</div>
                    </div>
                    <input
                      className={styles.input}
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className={styles.inputGroup6}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>
                          Expiration date (MM/YY)
                        </div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="MM/YY"
                        type="number"
                      />
                    </div>
                    <div className={styles.inputWithLabel5}>
                      <div className={styles.h5}>
                        <div className={styles.h51}>CVC</div>
                      </div>
                      <input
                        className={styles.input}
                        placeholder="CVC"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.orderSummary}>
                <div className={styles.h5}>
                  <div className={styles.h31}>Order summary</div>
                </div>
                <div className={styles.cartItems1}>
                  <div className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <img
                        className={styles.product27141}
                        alt=""
                        src="/product271-4-1@2x.png"
                      />
                    </div>
                    <div className={styles.itemDetails3}>
                      <div className={styles.details3}>
                        <div className={styles.itemInfo3}>
                          <div className={styles.inputGroup3}>
                            <div className={styles.h545}>
                              Black Automatic Watch
                            </div>
                          </div>
                          <div className={styles.size}>
                            <img
                              className={styles.svgIcon5}
                              alt=""
                              src="/svg17.svg"
                            />
                            <div className={styles.pxMedium}>
                              <div className={styles.text13}>One size</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.quantity}>
                          <div className={styles.quantityInput}>
                            <div className={styles.decreaseBtn}>
                              <img
                                className={styles.svgIcon6}
                                alt=""
                                src="/svg18.svg"
                              />
                            </div>
                            <div className={styles.currentQuantity}>
                              <div className={styles.pxMedium}>
                                <div className={styles.text7}>1</div>
                              </div>
                            </div>
                            <div className={styles.increaseBtn}>
                              <img
                                className={styles.svgIcon7}
                                alt=""
                                src="/svg19.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>$169.99</div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <img
                        className={styles.product27141}
                        alt=""
                        src="/product271-4-1@2x.png"
                      />
                    </div>
                    <div className={styles.itemDetails3}>
                      <div className={styles.details3}>
                        <div className={styles.itemInfo3}>
                          <div className={styles.inputGroup3}>
                            <div className={styles.h545}>
                              Black Automatic Watch
                            </div>
                          </div>
                          <div className={styles.size}>
                            <img
                              className={styles.svgIcon5}
                              alt=""
                              src="/svg17.svg"
                            />
                            <div className={styles.pxMedium}>
                              <div className={styles.text13}>One size</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.quantity}>
                          <div className={styles.quantityInput}>
                            <div className={styles.decreaseBtn}>
                              <img
                                className={styles.svgIcon6}
                                alt=""
                                src="/svg18.svg"
                              />
                            </div>
                            <div className={styles.currentQuantity}>
                              <div className={styles.pxMedium}>
                                <div className={styles.text7}>1</div>
                              </div>
                            </div>
                            <div className={styles.increaseBtn}>
                              <img
                                className={styles.svgIcon7}
                                alt=""
                                src="/svg19.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.h5}>
                          <div className={styles.h51}>$169.99</div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.orderTotal}>
                <div className={styles.subtotal}>
                  <div className={styles.tax}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>Tax estimate</div>
                    </div>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>$24.90</div>
                    </div>
                  </div>
                  <div className={styles.shipping1}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>Shipping estimate</div>
                    </div>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.subtotal1}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>Subtotal</div>
                    </div>
                    <div className={styles.pxMedium}>
                      <div className={styles.text19}>$169.99</div>
                    </div>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.h5}>
                    <div className={styles.h51}>Order total</div>
                  </div>
                  <div className={styles.h5}>
                    <div className={styles.h51}>$199.89</div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.pxMedium}>
                  <div className={styles.text25}>Confirm order</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.footerContent}>
            <div className={styles.info}>
              <div className={styles.itemInfo}>
                <div className={styles.logo2}>
                  <div className={styles.nexton}>NEXTON</div>
                  <div className={styles.ecommerce}>eCommerce</div>
                </div>
              </div>
              <div className={styles.list}>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon11} alt="" src="/svg10.svg" />
                  <div className={styles.pxMedium}>
                    <div className={styles.text19}>Facebook</div>
                  </div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon12} alt="" src="/svg11.svg" />
                  <div className={styles.text19}>Youtube</div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon11} alt="" src="/svg12.svg" />
                  <div className={styles.text19}>Telegram</div>
                </a>
                <a className={styles.listItem} target="_blank">
                  <img className={styles.svgIcon11} alt="" src="/svg13.svg" />
                  <div className={styles.text19}>Twitter</div>
                </a>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Getting started</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Release Notes</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Upgrade Guide</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Browser Support</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Dark Mode</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Explore</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Prototyping</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Design systems</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Pricing</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Security</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Community</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Discussion Forums</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Code of Conduct</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>Contributing</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text19}>API Reference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.pxMedium}>
            <div className={styles.pxMedium}>
              <div className={styles.text19}>Nexton eCommerce. © 2024</div>
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
    </div>
  );
};

export default CheckoutPageDesktop;
