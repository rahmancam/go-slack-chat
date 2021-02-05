import React from 'react';
import PropTypes from 'prop-types';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

function ChannelSection(props) {
    return (
        <div>
            <ChannelList {...props} />
            <ChannelForm {...props} />
        </div>
    );
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired
}

export default ChannelSection;
