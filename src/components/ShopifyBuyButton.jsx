
import React, { useEffect, useRef } from 'react';
import ShopifyBuy from 'shopify-buy';

const ShopifyBuyButton = ({ productId }) => {
  const buyButtonRef = useRef(null);
  const shopifyClientRef = useRef(null);

  useEffect(() => {
    if (!productId) return;

    const shopifyConfig = {
      domain: 'ga0ae0-f6.myshopify.com',
      storefrontAccessToken: '7e58e52c8292d0679087a4ddfd58f05f',
    };

    if (!shopifyClientRef.current) {
      shopifyClientRef.current = ShopifyBuy.buildClient(shopifyConfig);
    }

    const ui = ShopifyBuy.UI.init(shopifyClientRef.current);
    const node = buyButtonRef.current;

    if (node) {
      node.innerHTML = '';
      ui.createComponent('product', {
        id: productId,
        node: node,
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                },
                "text-align": "left"
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "styles": {
              "button": {
                "background-color": "#00ff41",
                "color": "black",
                ":hover": {
                  "background-color": "#00e63a"
                }
              }
            },
            "popup": false
          },
          "toggle": {
             "styles": {
                "toggle": {
                  "background-color": "#00ff41",
                  ":hover": {
                    "background-color": "#00e63a"
                  }
                }
              }
          }
        },
      });
    }

    return () => {
      if (node) {
        node.innerHTML = '';
      }
    };
  }, [productId]);

  if (!productId) return null;

  return <div ref={buyButtonRef} />;
};

export default ShopifyBuyButton;
