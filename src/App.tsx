import React from 'react';
import MovableLogo from './components/MovableLogo';
import AdsenseBlock from './components/AdsenseBlock';

const App: React.FC = () => {
  return (
    <>
      <header>
        {/* your header / nav React JSX converted from HTML */}
      </header>

      <main className="wrap">
        {/* main CosmicSutra content as JSX */}
        <aside>
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Ad / Promotion</h3>
            <AdsenseBlock slot="4090023827" />
          </div>
        </aside>
      </main>

      <MovableLogo />
    </>
  );
};

export default App;
