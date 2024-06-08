import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductPageDesktop.module.css";

const ProductPageDesktop = () => {
  const navigate = useNavigate();

  const onProductCardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductCardContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductCardContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductCardContainer3Click = useCallback(() => {
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
    <div className={styles.productPageDesktop}>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.productContent}>
            <div className={styles.productInfo}>
              <div className={styles.productImages}>
                <div className={styles.images}>
                  <img
                    className={styles.product2721Icon}
                    alt=""
                    src="/product271-4-1@2x.png"
                  />
                  <img
                    className={styles.product2721Icon}
                    alt=""
                    src="/product272-1@2x.png"
                  />
                  <img
                    className={styles.product2721Icon}
                    alt=""
                    src="/product273-1@2x.png"
                  />
                  <img
                    className={styles.product2721Icon}
                    alt=""
                    src="/product274-1@2x.png"
                  />
                </div>
                <div className={styles.imageShowing}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.tag}>
                    <img className={styles.svgIcon} alt="" src="/svg20.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text}>New in</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon1} alt="" src="/svg8.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.seperator} />
              <div className={styles.productDetails}>
                <div className={styles.description}>
                  <div className={styles.h2}>
                    <div className={styles.h21}>Black Automatic Watch</div>
                  </div>
                  <div className={styles.pxRegular1}>
                    <div className={styles.text1}>
                      <p className={styles.theStLouis}>
                        The St. Louis Meramec Canoe Company was founded by
                        Alfred Wickett in 1922. Wickett had
                      </p>
                      <p className={styles.theStLouis}>
                        previously worked for the Old Town Canoe Co from 1900 to
                        1914. Manufacturing of the classic
                      </p>
                      <p className={styles.theStLouis}>
                        wooden canoes in Valley Park, Missouri ceased in 1978.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.fabric}>
                  <div className={styles.h3}>
                    <div className={styles.h31}>Fabric + Care</div>
                  </div>
                  <div className={styles.fabricDetails}>
                    <div className={styles.pxRegular}>
                      <div className={styles.text1}>
                        Material: Soft wool blend
                      </div>
                    </div>
                    <div className={styles.pxRegular}>
                      <div className={styles.text1}>Color: Various</div>
                    </div>
                  </div>
                </div>
                <div className={styles.fabric}>
                  <div className={styles.h3}>
                    <div className={styles.h31}>Sale performance</div>
                  </div>
                  <div className={styles.saleDetails}>
                    <div className={styles.pxRegular}>
                      <div className={styles.text1}>Sales: 0</div>
                    </div>
                    <div className={styles.pxRegular}>
                      <div className={styles.text1}>Review Count: -</div>
                    </div>
                    <div className={styles.pxRegular}>
                      <div className={styles.text1}>Review Average: -</div>
                    </div>
                  </div>
                </div>
                <div className={styles.keywords}>
                  <div className={styles.h3}>
                    <div className={styles.h31}>Keywords</div>
                  </div>
                  <div className={styles.keywordsItems}>
                    <div className={styles.keywordItem}>
                      <img className={styles.svgIcon} alt="" src="/svg20.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>men's fashion</div>
                      </div>
                    </div>
                    <div className={styles.keywordItem}>
                      <img className={styles.svgIcon} alt="" src="/svg20.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>winter hat</div>
                      </div>
                    </div>
                    <div className={styles.keywordItem}>
                      <img className={styles.svgIcon} alt="" src="/svg20.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>colorful accessory</div>
                      </div>
                    </div>
                    <div className={styles.keywordItem}>
                      <img className={styles.svgIcon} alt="" src="/svg20.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>warm headwear</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.addToCart}>
              <div className={styles.stickyContainer}>
                <div className={styles.sticky}>
                  <div className={styles.priceContainer}>
                    <div className={styles.reviews}>
                      <img
                        className={styles.svgIcon6}
                        alt=""
                        src="/svg21.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text11}>4.9</div>
                      </div>
                      <div className={styles.pxRegular}>
                        <div className={styles.text11}>·</div>
                      </div>
                      <div className={styles.pxRegular}>
                        <div className={styles.text13}>142 reviews</div>
                      </div>
                    </div>
                    <div className={styles.priceLg}>
                      <div className={styles.h3}>
                        <div className={styles.h31}>$169.99</div>
                      </div>
                      <div className={styles.pxMedium1}>
                        <div className={styles.text14}>$199.99</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sizeContainer}>
                    <div className={styles.h3}>
                      <div className={styles.text11}>Size: S</div>
                    </div>
                    <div className={styles.sizes}>
                      <div className={styles.sizeItem}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text11}>S</div>
                        </div>
                      </div>
                      <div className={styles.sizeItem1}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text11}>M</div>
                        </div>
                      </div>
                      <div className={styles.sizeItem1}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text11}>L</div>
                        </div>
                      </div>
                      <div className={styles.sizeItem1}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text11}>XL</div>
                        </div>
                      </div>
                      <div className={styles.sizeItem4}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text11}>2XL</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.quantityInput}>
                      <div className={styles.decreaseBtn}>
                        <img
                          className={styles.svgIcon7}
                          alt=""
                          src="/svg18.svg"
                        />
                      </div>
                      <div className={styles.currentQuantity}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text20}>1</div>
                        </div>
                      </div>
                      <div className={styles.increaseBtn}>
                        <img
                          className={styles.svgIcon8}
                          alt=""
                          src="/svg19.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.cartButton}>
                      <img
                        className={styles.svgIcon1}
                        alt=""
                        src="/svg22.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text21}>Add to cart</div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.totalPriceInfo}>
                    <div className={styles.subtotal}>
                      <div className={styles.priceContainer}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text1}>$169.99 x 1</div>
                        </div>
                        <div className={styles.pxRegular}>
                          <div className={styles.text1}>$169.99</div>
                        </div>
                      </div>
                      <div className={styles.priceContainer}>
                        <div className={styles.pxRegular}>
                          <div className={styles.text1}>Tax estimate</div>
                        </div>
                        <div className={styles.pxRegular}>
                          <div className={styles.text1}>$0</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.seperator1} />
                    <div className={styles.total}>
                      <div className={styles.h3}>
                        <div className={styles.text11}>Total</div>
                      </div>
                      <div className={styles.h3}>
                        <div className={styles.text11}>$169.99</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.recommendationSection}>
            <div className={styles.recommendations}>
              <div className={styles.h3}>
                <div className={styles.h21}>Recommended products</div>
              </div>
              <div className={styles.productCardParent}>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainerClick}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag1}>
                      <img
                        className={styles.svgIcon10}
                        alt=""
                        src="/svg7.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon1} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo1}>
                    <div className={styles.info}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h56}>
                          <div className={styles.h57}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text27}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon12}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxRegular}>
                          <div className={styles.text27}>4.9 (98)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.h3}>
                        <div className={styles.text11}>$169.99</div>
                      </div>
                      <div className={styles.pxMedium1}>
                        <div className={styles.text29}>$199.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer1Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag1}>
                      <img
                        className={styles.svgIcon10}
                        alt=""
                        src="/svg7.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon1} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo1}>
                    <div className={styles.info}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h56}>
                          <div className={styles.h57}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text27}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon12}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxRegular}>
                          <div className={styles.text27}>4.9 (98)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.h3}>
                        <div className={styles.text11}>$169.99</div>
                      </div>
                      <div className={styles.pxMedium1}>
                        <div className={styles.text29}>$199.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer2Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag1}>
                      <img
                        className={styles.svgIcon10}
                        alt=""
                        src="/svg7.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon1} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo1}>
                    <div className={styles.info}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h56}>
                          <div className={styles.h57}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text27}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon12}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxRegular}>
                          <div className={styles.text27}>4.9 (98)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.h3}>
                        <div className={styles.text11}>$169.99</div>
                      </div>
                      <div className={styles.pxMedium1}>
                        <div className={styles.text29}>$199.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer3Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag1}>
                      <img
                        className={styles.svgIcon10}
                        alt=""
                        src="/svg7.svg"
                      />
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon1} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo1}>
                    <div className={styles.info}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h56}>
                          <div className={styles.h57}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text27}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon12}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxRegular}>
                          <div className={styles.text27}>4.9 (98)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.h3}>
                        <div className={styles.text11}>$169.99</div>
                      </div>
                      <div className={styles.pxMedium1}>
                        <div className={styles.text29}>$199.99</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.footerContent}>
            <div className={styles.info4}>
              <div className={styles.logo}>
                <div className={styles.logo1}>
                  <div className={styles.nexton}>NEXTON</div>
                  <div className={styles.ecommerce}>eCommerce</div>
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon12} alt="" src="/svg10.svg" />
                  <div className={styles.pxRegular}>
                    <div className={styles.text1}>Facebook</div>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon23} alt="" src="/svg11.svg" />
                  <div className={styles.text1}>Youtube</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon12} alt="" src="/svg12.svg" />
                  <div className={styles.text1}>Telegram</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon12} alt="" src="/svg13.svg" />
                  <div className={styles.text1}>Twitter</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h3}>
                <div className={styles.text11}>Getting started</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Release Notes</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Upgrade Guide</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Browser Support</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Dark Mode</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h3}>
                <div className={styles.text11}>Explore</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Prototyping</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Design systems</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Pricing</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Security</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h3}>
                <div className={styles.text11}>Community</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Discussion Forums</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Code of Conduct</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>Contributing</div>
                </div>
                <div className={styles.pxRegular}>
                  <div className={styles.text1}>API Reference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.pxRegular}>
            <div className={styles.pxRegular}>
              <div className={styles.text1}>Nexton eCommerce. © 2024</div>
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
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo2}>
            <div className={styles.nexton}>NEXTON</div>
            <div className={styles.ecommerce}>eCommerce</div>
          </div>
          <div className={styles.searchbar}>
            <img
              className={styles.svgIcon26}
              alt=""
              src="/svg.svg"
              onClick={onSVGIconClick}
            />
            <input
              className={styles.pxRegular45}
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
                        <div className={styles.h3}>
                          <div className={styles.text11}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price4}>
                        <div className={styles.h3}>
                          <div className={styles.text11}>$169.99</div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text29}>$199.99</div>
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
                        <div className={styles.h3}>
                          <div className={styles.text11}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price4}>
                        <div className={styles.h3}>
                          <div className={styles.text11}>$169.99</div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text29}>$199.99</div>
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
                        <div className={styles.h3}>
                          <div className={styles.text11}>
                            Black Automatic Watch
                          </div>
                        </div>
                      </div>
                      <div className={styles.price4}>
                        <div className={styles.h3}>
                          <div className={styles.text11}>$169.99</div>
                        </div>
                        <div className={styles.pxMedium1}>
                          <div className={styles.text29}>$199.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categories}>
                <div className={styles.h3}>
                  <div className={styles.text11}>Categories</div>
                </div>
                <div className={styles.categoryItems}>
                  <div className={styles.keywordItem}>
                    <div className={styles.pxSemibold7}>
                      <div className={styles.text62}>·</div>
                    </div>
                    <div className={styles.pxRegular49}>
                      <div className={styles.text}>Men's Fashion</div>
                    </div>
                  </div>
                  <div className={styles.keywordItem}>
                    <div className={styles.pxSemibold7}>
                      <div className={styles.text62}>·</div>
                    </div>
                    <div className={styles.pxRegular49}>
                      <div className={styles.text}>Women's Fashion</div>
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
              <div className={styles.cartBtn5}>
                <img className={styles.svgIcon27} alt="" src="/svg1.svg" />
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

export default ProductPageDesktop;
