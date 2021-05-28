import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    render() {
        const { contactName, contactNumber, onDeleteContact, id } = this.props;
        return (
            <li>
                {contactName} : {contactNumber}
                <button type="button" onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
            </li>
        );
    }
}

Contact.propTypes = {
    id: PropTypes.string,
    contactName: PropTypes.string,
    contactNumber: PropTypes.string,
    onDeleteContact: PropTypes.func,
};

export default Contact;
