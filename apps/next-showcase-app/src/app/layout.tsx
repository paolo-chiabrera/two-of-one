/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import "./main.css";
import "./variables.css";
import "./app.css";
import "./normalize.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="icon.png" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="icon.png" />
      </head>
      <body>
        <header className="header">
          <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg" />
          <div className="menu-wrapper">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button" />
            </label>
            <ul className="menu">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
              <li>Five</li>
            </ul>
          </div>
        </header>
        {children}
        <footer
          className="app-footer hidden-mobile-when-search"
          data-v-42e6316f=""
          data-v-5e877c34=""
        >
          <div className="app-footer__container" data-v-42e6316f="">
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg"
              alt="Glovo"
              data-test-id="footer-logo"
              width={115}
              height={39}
              loading="lazy"
              className="footer-logo"
              data-v-e814c496=""
              data-v-42e6316f=""
              data-ol-has-click-handler=""
            />
            <div className="app-footer__grid" data-v-42e6316f="">
              <div
                data-test-id="footer-column"
                className="footer-column"
                data-v-75430ada=""
                data-v-42e6316f=""
              >
                <div
                  data-test-id="column-title"
                  className="footer-column__title"
                  data-v-75430ada=""
                >
                  Colabora con Glovo
                </div>
                <a
                  data-test-id="footer-link"
                  href="https://jobs.glovoapp.com"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Trabaja con nosotros
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://sell.glovoapp.com"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Glovo para Partners
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://couriers.glovoapp.com/es/"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Repartidores
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://business.glovoapp.com"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Glovo Business
                </a>{" "}
                {/**/}
              </div>
              <div
                data-test-id="footer-column"
                className="footer-column"
                data-v-75430ada=""
                data-v-42e6316f=""
              >
                <div
                  data-test-id="column-title"
                  className="footer-column__title"
                  data-v-75430ada=""
                >
                  Enlaces de interés
                </div>
                <a
                  data-test-id="footer-link"
                  href="https://about.glovoapp.com"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Acerca de nosotros
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://glovoapp.com/docs/es/faq"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Preguntas frecuentes
                </a>
                <a
                  href="/es/es/prime/"
                  data-test-id="footer-link"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Glovo Prime
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://blog.glovoapp.com/"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Blog
                </a>
                <span
                  data-test-id="footer-support"
                  role="button"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Contacto
                </span>
                <a
                  href="/es/security/"
                  data-test-id="footer-link"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Seguridad
                </a>{" "}
                {/**/}
              </div>
              <div
                data-test-id="footer-column"
                className="footer-column"
                data-v-75430ada=""
                data-v-42e6316f=""
              >
                <div
                  data-test-id="column-title"
                  className="footer-column__title"
                  data-v-75430ada=""
                >
                  Síguenos
                </div>
                <a
                  data-test-id="footer-link"
                  target="_blank"
                  rel="noopener"
                  href="https://www.facebook.com/glovoappES"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Facebook
                </a>
                <a
                  data-test-id="footer-link"
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/Glovo_ES"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Twitter
                </a>
                <a
                  data-test-id="footer-link"
                  target="_blank"
                  rel="noopener"
                  href="https://www.instagram.com/glovo_es/"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Instagram
                </a>{" "}
                {/**/}
              </div>
              <div
                className="footer-interlinks app-footer__interlinks--mobile"
                data-v-e4db3a20=""
                data-v-42e6316f=""
              />
              <div
                data-test-id="footer-column"
                className="footer-column footer-column-with-downloads app-footer__column-with-downloads--desktop footer-column--with-download-buttons"
                data-v-75430ada=""
                data-v-10af60be=""
                data-v-42e6316f=""
              >
                <div
                  className="footer-column-with-downloads__button-container"
                  data-v-75430ada=""
                  data-v-10af60be=""
                >
                  <a
                    data-test-id="footer-column-download-link"
                    target="_blank"
                    rel="noopener"
                    href="https://app.adjust.com/xle4el?adgroup=&campaign=footer_es_es"
                    className="footer-column-with-downloads__button"
                    data-v-10af60be=""
                    data-v-75430ada=""
                    data-ol-has-click-handler=""
                  >
                    <img
                      alt="App Store"
                      width={105}
                      height={35}
                      className="footer-column-with-downloads__image"
                      data-v-10af60be=""
                      data-src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_105/https://glovoapp.com/images/app_store/download-button-new.svg"
                      src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_105/https://glovoapp.com/images/app_store/download-button-new.svg"
                    />
                  </a>
                  <a
                    data-test-id="footer-column-download-link"
                    target="_blank"
                    rel="noopener"
                    href="https://app.adjust.com/ule61n?redirect=http%3A%2F%2Fplay.google.com/store/apps/details?id=com.glovo&hl=es&adgroup=&campaign=footer_es_es"
                    className="footer-column-with-downloads__button"
                    data-v-10af60be=""
                    data-v-75430ada=""
                    data-ol-has-click-handler=""
                  >
                    <img
                      alt="Google play"
                      width={112}
                      height={35}
                      className="footer-column-with-downloads__image"
                      data-v-10af60be=""
                      data-src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_112/https://glovoapp.com/images/google_play/download-button-new.svg"
                      src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_112/https://glovoapp.com/images/google_play/download-button-new.svg"
                    />
                  </a>
                </div>{" "}
                {/**/}{" "}
                <a
                  data-test-id="footer-link"
                  href="https://glovoapp.com/docs/es/legal/terms/"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Condiciones de uso
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://glovoapp.com/docs/es/legal/privacy/"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Política de privacidad
                </a>
                <a
                  href="/es/legal/cookies/"
                  data-test-id="footer-link"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Política de cookies
                </a>
                <a
                  data-test-id="footer-link"
                  href="https://compliance.glovoapp.com/public/home"
                  className="footer-column__link"
                  data-v-75430ada=""
                  data-ol-has-click-handler=""
                >
                  Cumplimiento
                </a>{" "}
                {/**/}
              </div>
            </div>
            <div
              className="footer-interlinks app-footer__interlinks--desktop"
              data-v-e4db3a20=""
              data-v-42e6316f=""
            />
            <div
              data-test-id="language-picker"
              className="language-picker"
              data-v-42e6316f=""
            >
              <div data-v-649c8f7e="" className="language-picker">
                <div
                  data-v-649c8f7e=""
                  data-test-id="picker-trigger"
                  className="picker__trigger"
                >
                  <div
                    data-v-48f51742=""
                    data-v-649c8f7e=""
                    className="trigger"
                    data-test-id="trigger"
                    data-ol-has-click-handler=""
                  >
                    <div data-v-48f51742="" className="">
                      <span data-v-48f51742="" className="trigger__inner">
                        Español
                      </span>
                      <svg
                        data-v-48f51742=""
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="trigger__arrow"
                      >
                        <path
                          d="M6.49905 11.5628C6.1074 11.1734 6.10555 10.5403 6.49494 10.1486C6.85438 9.78707 7.42152 9.7577 7.8147 10.0616L7.90915 10.1445L12.1741 13.7931L16.4991 10.0865C16.8606 9.72708 17.4279 9.701 17.8193 10.0072L17.9133 10.0906C18.2727 10.4522 18.2988 11.0195 17.9926 11.4109L17.9092 11.5048L12.88 15.9123C12.5199 16.2702 11.9554 16.2978 11.5639 15.9949L11.4699 15.9123L6.49905 11.5628Z"
                          fill="#595959"
                        />
                      </svg>
                    </div>
                  </div>
                </div>{" "}
                {/**/} {/**/}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
