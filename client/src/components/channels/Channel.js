import React from 'react';
import PropTypes from 'prop-types';

function Channel({ setChannel, channel }) {

    const onClick = (e) => {
        setChannel(channel);
        e.preventDefault();
    }

    return (
        <li>
            <a onClick={(e) => onClick(e)} href="void(0);">
                {channel.name}
            </a>
        </li>
    );
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default Channel;
