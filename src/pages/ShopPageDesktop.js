import { useCallback } from "react";
import { Slider, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ShopPageDesktop.module.css";

const ShopPageDesktop = () => {
  const navigate = useNavigate();

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

  const onProductCardContainer5Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer6Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer7Click = useCallback(() => {
    navigate("/product-page-desktop");
  }, [navigate]);

  const onProductCardContainer8Click = useCallback(() => {
    navigate("/product-page-desktop");
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
    <div className={styles.shopPageDesktop}>
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
                <div className={styles.listItem}>
                  <img className={styles.svgIcon} alt="" src="/svg10.svg" />
                  <div className={styles.pxRegular}>
                    <div className={styles.text}>Facebook</div>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon1} alt="" src="/svg11.svg" />
                  <div className={styles.text}>Youtube</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon} alt="" src="/svg12.svg" />
                  <div className={styles.text}>Telegram</div>
                </div>
                <div className={styles.listItem}>
                  <img className={styles.svgIcon} alt="" src="/svg13.svg" />
                  <div className={styles.text}>Twitter</div>
                </div>
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
          <div className={styles.productsContainer}>
            <div className={styles.products}>
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
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
              <div
                className={styles.productCard}
                onClick={onProductCardContainer5Click}
              >
                <div className={styles.productImage}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.tag}>
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
              <div
                className={styles.productCard}
                onClick={onProductCardContainer6Click}
              >
                <div className={styles.productImage}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.tag}>
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
              <div
                className={styles.productCard}
                onClick={onProductCardContainer7Click}
              >
                <div className={styles.productImage}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.tag}>
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
              <div
                className={styles.productCard}
                onClick={onProductCardContainer8Click}
              >
                <div className={styles.productImage}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.tag}>
                    <img className={styles.svgIcon4} alt="" src="/svg7.svg" />
                    <div className={styles.pxRegular}>
                      <div className={styles.text17}>50% Discount</div>
                    </div>
                  </div>
                  <div className={styles.cartBtn}>
                    <img className={styles.svgIcon5} alt="" src="/svg8.svg" />
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.h5Parent}>
                      <div className={styles.h56}>
                        <div className={styles.h57}>Black Automatic Watch</div>
                      </div>
                      <div className={styles.pxRegular15}>
                        <div className={styles.text18}>Accessories</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <img className={styles.svgIcon} alt="" src="/svg9.svg" />
                      <div className={styles.pxRegular}>
                        <div className={styles.text18}>4.9 (98)</div>
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
            <div className={styles.pagination}>
              <div className={styles.prevBtn}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.pageBtn}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>1</div>
                </div>
              </div>
              <div className={styles.pageBtn1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>2</div>
                </div>
              </div>
              <div className={styles.pageBtn1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>3</div>
                </div>
              </div>
              <div className={styles.pageBtn1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>4</div>
                </div>
              </div>
              <div className={styles.pageBtn1}>
                <div className={styles.pxRegular}>
                  <div className={styles.text}>5</div>
                </div>
              </div>
              <div className={styles.prevBtn}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
              <div className={styles.categories}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Categories</div>
                </div>
                <div className={styles.categoryList}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Men’s fashion</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Women’s fashion</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>{`Kids & Toys`}</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Accessories</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Cosmetics</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Shoes</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Sports</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.price9}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Price range</div>
                </div>
                <div className={styles.priceRange}>
                  <Box className={styles.wrapper} sx={{ width: 275 }}>
                    <Slider color="primary" />
                  </Box>
                  <div className={styles.priceInputs}>
                    <div className={styles.minPriceInput}>
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>Min price</div>
                      </div>
                      <div className={styles.input}>
                        <div className={styles.pxRegular}>
                          <input
                            className={styles.text66}
                            placeholder="100"
                            type="number"
                          />
                        </div>
                        <div className={styles.pxRegular}>
                          <div className={styles.text67}>$</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.maxPriceInput}>
                      <div className={styles.pxRegular}>
                        <div className={styles.text}>Max price</div>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.pxRegular}>
                          <input
                            className={styles.text66}
                            placeholder="500"
                            type="number"
                          />
                        </div>
                        <div className={styles.pxRegular}>
                          <div className={styles.text67}>$</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sorting}>
                <div className={styles.h5}>
                  <div className={styles.h41}>Sort order</div>
                </div>
                <div className={styles.sortingList}>
                  <div className={styles.checkbox}>
                    <div className={styles.radioInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Most Popular</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.radioInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Best Rating</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.radioInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Newest</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.radioInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Price Low - Hight</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.radioInput} />
                    <div className={styles.pxRegular}>
                      <div className={styles.text18}>Price Hight - Low</div>
                    </div>
                  </div>
                </div>
              </div>
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
              className={styles.svgIcon31}
              alt=""
              src="/svg.svg"
              onClick={onSVGIconClick}
            />
            <input
              className={styles.pxRegular69}
              placeholder="Search in products..."
              type="text"
            />
            <div className={styles.searchDropdown}>
              <div className={styles.products1}>
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
                      <div className={styles.price10}>
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
                      <div className={styles.price10}>
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
                      <div className={styles.price10}>
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
              <div className={styles.categories1}>
                <div className={styles.h5}>
                  <div className={styles.h51}>Categories</div>
                </div>
                <div className={styles.categoryItems}>
                  <div className={styles.categoryItem}>
                    <div className={styles.pxSemibold}>
                      <div className={styles.text79}>·</div>
                    </div>
                    <div className={styles.pxRegular73}>
                      <div className={styles.text17}>Men's Fashion</div>
                    </div>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.pxSemibold}>
                      <div className={styles.text79}>·</div>
                    </div>
                    <div className={styles.pxRegular73}>
                      <div className={styles.text17}>Women's Fashion</div>
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
              <div className={styles.cartBtn9}>
                <img className={styles.svgIcon32} alt="" src="/svg1.svg" />
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

export default ShopPageDesktop;
