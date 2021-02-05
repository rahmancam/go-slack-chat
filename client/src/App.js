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
    <div className="App">
      <h3>Active channel - {activeChannel.name}</h3>
      <ChannelSection
        channels={channels}
        setChannel={setChannel}
        addChannel={addChannel}
      />
    </div>
  );
}

export default App;
