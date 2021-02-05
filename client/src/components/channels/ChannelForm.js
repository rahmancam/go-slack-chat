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
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    placeholder="Add New Channel..." />
            </div>
        </form>
    );
}

ChannelForm.propTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm;
