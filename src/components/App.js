import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UrlInput from './UrlInput';

export default function App() {
  return (
    <>
      <Header />
      <main>
        
        <section>
          <form>
            <section>
              <UrlInput />
              <div id="methods">
                <label>
                  <input type="radio" name="method" value="get"/> 
                  <span>GET</span>
                </label>
                <label>
                  <input type="radio" name="method" value="post"/> 
                  <span>POST</span>
                </label>
                <label>
                  <input type="radio" name="method" value="put"/> 
                  <span>PUT</span>
                </label>
                <label>
                  <input type="radio" name="method" value="patch"/> 
                  <span>PATCH</span>
                </label>
                <label>
                  <input type="radio" name="method" value="delete"/> 
                  <span>DELETE</span>
                </label>
                <label>
                  <button type="submit">GO!</button>
                </label>
              </div>
            </section>
          </form>
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
  