import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomepageDesktop.module.css";

const HomepageDesktop = () => {
  const navigate = useNavigate();

  const onSVGIconClick = useCallback(() => {
    navigate("/shop-page-desktop");
  }, [navigate]);

  const onUserBtnIconClick = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/checkout-page-desktop");
  }, [navigate]);

  const onProductCardContainerClick = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer1Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer2Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer3Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer4Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer12Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer22Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer32Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.homepageDesktop}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
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
        <div className={styles.hero}>
          <img className={styles.heroBgIcon} alt="" src="/herobg@2x.png" />
          <div className={styles.heroContent}>
            <div className={styles.heroSlogan}>
              <div className={styles.pxMedium}>
                <div className={styles.text7}>Starting from: $49.99</div>
              </div>
              <div className={styles.h1}>
                <div className={styles.h11}>
                  <p className={styles.exclusiveCollection}>
                    Exclusive collection
                  </p>
                  <p className={styles.exclusiveCollection}>for everyone</p>
                </div>
              </div>
              <div className={styles.heroButton}>
                <div className={styles.pxMedium}>
                  <div className={styles.text8}>Explore now</div>
                </div>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.brandInfo}>
          <div className={styles.brandInfoContent}>
            <div className={styles.brandInfo1}>
              <img className={styles.svgIcon2} alt="" src="/svg2.svg" />
              <div className={styles.info}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Free shipping</div>
                </div>
                <div className={styles.pxRegular1}>
                  <div className={styles.text9}>On orders over $50.00</div>
                </div>
              </div>
            </div>
            <div className={styles.seperator} />
            <div className={styles.brandInfo2}>
              <img className={styles.svgIcon2} alt="" src="/svg3.svg" />
              <div className={styles.info}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Very easy to return</div>
                </div>
                <div className={styles.pxRegular1}>
                  <div className={styles.text9}>Just phone number</div>
                </div>
              </div>
            </div>
            <div className={styles.seperator} />
            <div className={styles.brandInfo2}>
              <img className={styles.svgIcon2} alt="" src="/svg4.svg" />
              <div className={styles.info}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Worldwide delivery</div>
                </div>
                <div className={styles.pxRegular1}>
                  <div className={styles.text9}>Fast delivery worldwide</div>
                </div>
              </div>
            </div>
            <div className={styles.seperator} />
            <div className={styles.brandInfo2}>
              <img className={styles.svgIcon2} alt="" src="/svg5.svg" />
              <div className={styles.info}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Refunds policy</div>
                </div>
                <div className={styles.pxRegular1}>
                  <div className={styles.text9}>
                    60 days return for any reason
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.collectionsSection}>
          <div className={styles.collections}>
            <div className={styles.h5}>
              <div className={styles.h21}>
                <span>{`Start exploring. `}</span>
                <span className={styles.goodThingsAre}>
                  Good things are waiting for you
                </span>
              </div>
            </div>
            <div className={styles.collectionsList}>
              <div className={styles.collectionCard}>
                <div className={styles.cardInfo}>
                  <div className={styles.titleGroup}>
                    <div className={styles.h5}>
                      <div className={styles.h31}>For Men's</div>
                    </div>
                    <div className={styles.pxRegular1}>
                      <div className={styles.text9}>Starting at $24</div>
                    </div>
                  </div>
                  <div className={styles.shopLink}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text14}>Shop Now</div>
                    </div>
                    <img className={styles.svgIcon6} alt="" src="/svg6.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.collectionCard}>
                <div className={styles.cardInfo}>
                  <div className={styles.titleGroup}>
                    <div className={styles.h5}>
                      <div className={styles.h31}>For Women's</div>
                    </div>
                    <div className={styles.pxRegular1}>
                      <div className={styles.text9}>Starting at $19</div>
                    </div>
                  </div>
                  <div className={styles.shopLink}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text14}>Shop Now</div>
                    </div>
                    <img className={styles.svgIcon6} alt="" src="/svg6.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.collectionCard}>
                <div className={styles.cardInfo}>
                  <div className={styles.titleGroup}>
                    <div className={styles.h5}>
                      <div className={styles.h31}>Accessories</div>
                    </div>
                    <div className={styles.pxRegular1}>
                      <div className={styles.text9}>Explore accessories</div>
                    </div>
                  </div>
                  <div className={styles.shopLink}>
                    <div className={styles.pxMedium}>
                      <div className={styles.text14}>Shop Now</div>
                    </div>
                    <img className={styles.svgIcon6} alt="" src="/svg6.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recommendationSection}>
          <div className={styles.recommendations}>
            <div className={styles.h5}>
              <div className={styles.h21}>
                <span>{`Recommendations. `}</span>
                <span className={styles.goodThingsAre}>
                  Best matching products for you
                </span>
              </div>
            </div>
            <div className={styles.recommendedProducts}>
              <div className={styles.products1}>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainerClick}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer1Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer2Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer3Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
          </div>
        </div>
        <div className={styles.recommendationSection}>
          <div className={styles.recommendations}>
            <div className={styles.h5}>
              <div className={styles.h21}>
                <span>{`Best Sellers. `}</span>
                <span className={styles.bestSellingOf}>
                  Best selling of the month
                </span>
              </div>
            </div>
            <div className={styles.bestsellerProducts}>
              <div className={styles.products2}>
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer4Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer12Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer22Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
                <div
                  className={styles.productCard}
                  onClick={onProductCardContainer32Click}
                >
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.tag}>
                      <img className={styles.svgIcon9} alt="" src="/svg7.svg" />
                      <div className={styles.pxMedium}>
                        <div className={styles.text4}>50% Discount</div>
                      </div>
                    </div>
                    <div className={styles.cartBtn1}>
                      <img className={styles.svgIcon6} alt="" src="/svg8.svg" />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.info4}>
                      <div className={styles.h5Parent}>
                        <div className={styles.h514}>
                          <div className={styles.h515}>
                            Black Automatic Watch
                          </div>
                        </div>
                        <div className={styles.pxRegular1}>
                          <div className={styles.text9}>Accessories</div>
                        </div>
                      </div>
                      <div className={styles.rating}>
                        <img
                          className={styles.svgIcon11}
                          alt=""
                          src="/svg9.svg"
                        />
                        <div className={styles.pxMedium}>
                          <div className={styles.text9}>4.9 (98)</div>
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
          </div>
        </div>
        <div className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            <img className={styles.bgImageIcon} alt="" src="/bgimage@2x.png" />
            <div className={styles.bannerContent}>
              <div className={styles.frameParent}>
                <div className={styles.pxMediumParent}>
                  <div className={styles.pxMedium}>
                    <div className={styles.text7}>100% Original Products</div>
                  </div>
                  <div className={styles.h26}>
                    <div className={styles.h21}>
                      <p className={styles.exclusiveCollection}>
                        The All New Fashion
                      </p>
                      <p className={styles.exclusiveCollection}>
                        Collection Items
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text7}>Starting from: $59.99</div>
                </div>
                <div className={styles.button}>
                  <div className={styles.pxMedium}>
                    <div className={styles.text8}>Shop now</div>
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
            <div className={styles.info12}>
              <div className={styles.itemInfo}>
                <div className={styles.logo2}>
                  <div className={styles.nexton}>NEXTON</div>
                  <div className={styles.ecommerce}>eCommerce</div>
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon11} alt="" src="/svg10.svg" />
                  <div className={styles.pxMedium}>
                    <div className={styles.text54}>Facebook</div>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon34} alt="" src="/svg11.svg" />
                  <div className={styles.text54}>Youtube</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon11} alt="" src="/svg12.svg" />
                  <div className={styles.text54}>Telegram</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon11} alt="" src="/svg13.svg" />
                  <div className={styles.text54}>Twitter</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Getting started</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Release Notes</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Upgrade Guide</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Browser Support</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Dark Mode</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Explore</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Prototyping</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Design systems</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Pricing</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Security</div>
                </div>
              </div>
            </div>
            <div className={styles.gettingStarted}>
              <div className={styles.h5}>
                <div className={styles.h51}>Community</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Discussion Forums</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Code of Conduct</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>Contributing</div>
                </div>
                <div className={styles.pxMedium}>
                  <div className={styles.text54}>API Reference</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.pxMedium}>
            <div className={styles.pxMedium}>
              <div className={styles.text54}>Nexton eCommerce. © 2024</div>
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

export default HomepageDesktop;
