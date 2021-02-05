import React from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';

function ChannelList({ channels, setChannel }) {
    return (
        <ul>
            {channels.map(chan => (
                <Channel key={chan.id} channel={chan} setChannel={setChannel} />
            ))}
        </ul>
    );
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default ChannelList;
