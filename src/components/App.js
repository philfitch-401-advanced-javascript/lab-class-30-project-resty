import React from 'react';

export default function App() {
  return (
    <>
      <header>
        RESTy
      </header>
      <main>
        <aside>
          <h2>History</h2>
          <ul id="history"></ul>
        </aside>
        <section>
          <form>
            <section>
              <input type="text" className="wide" name="url" placeholder="URL" value/>
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
      <footer>
        <section>
          <p>&copy;2019 Dylan/Phil</p>
        </section>
      </footer>
    </>
  );
}
  