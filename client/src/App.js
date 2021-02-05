import React, { useState } from 'react'
import './App.css';
import ChannelSection from './components/channels/ChannelSection';

function App() {

  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState({});

  const setChannel = (channel) => {
    setActiveChannel(channel);
  };

  const addChannel = (chan) => {
    setChannels([].concat(channels, { id: channels.length, name: chan }));
  };

  return (
    <div className="app">
      <div className="nav">
        <ChannelSection
          channels={channels}
          setChannel={setChannel}
          addChannel={addChannel}
        />
      </div>
    </div>
  );
}

export default App;
