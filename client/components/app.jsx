const React = require('react');

const App = () => (
  <div id="landing-page">

    <div id="landing-interface">
      <section className="left landing-side" id="landing-left">
        <div className="center-box">
          <h1 id="landing-title">
            Memoria
            <br />
            memorization app
          </h1>
          <img src="assets/white_book_icon.png" style={{ width: '70px', height: '70px' }} />
          <div className="subtitle">
            The app that helps you memorize text:
            speeches, lines, poems, whatever your heart desires!
          </div>
          <div id="start-button" className="button square-button">Get Started!</div>
          <div id="saved-button" className="button square-button">Open Previous</div>
        </div>
      </section>

      <section className="right landing-side" id="landing-right">
        <div className="center-box">
          <div id="title-input-box">
            <span className="user-title-tag">Title:</span>
            <input id="user-title-input" className="user-input" type="text" />
            <span className="user-title-tag">Author:</span>
            <input id="user-author-input" className="user-input" type="text" />
          </div>
          <textarea
            id="source-text-input"
            placeholder="Input your text to memorize..."
          />
          <input id="title-input" type="text" />
        </div>
      </section>
    </div>

  </div>
);

export default App;
