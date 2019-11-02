import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './containers/Main';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          
          <Main />
          <label>
            <button type="submit">GO!</button>
          </label>
          
          <div id="json">
            <div className="react-json-view">
              <div className="pretty-json-container object-container">
                <div className="object-content">
                  <div className="object-key-val">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
  