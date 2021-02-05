import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ChannelForm({ addChannel }) {

    const [channel, setChannel] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        addChannel(channel);
        setChannel("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={channel} onChange={(e) => setChannel(e.target.value)} placeholder="Add New Channel..." />
        </form>
    );
}

ChannelForm.propTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm;
