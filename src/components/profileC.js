import react, { Component, useState, useEffect } from 'react';

import './profileC.css';


const ProfileC = () => {

    //state to be sent to backend
    const intialValuesP = { bdate: "", address: "", country: "", city: "", mhistory: "", session: "", tcontact: "", rcontact: "" };

    const [profileValues, setProfileValues] = useState(intialValuesP);
    const [profileErrors, setProfileErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setProfileValues({ ...profileValues, [name]: value });
    }

    const handleSubmit = (err) => {
        err.preventDefault();
        setProfileErrors(validate(profileValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(profileErrors).length === 0 && isSubmit) {
            console.log(profileValues);
        }
    }, [profileErrors])

    const validate = (values) => {
        const errors = {};

        if (!values.bdate) {
            errors.bdate = 'bdate is required!';
        }
        if (!values.address) {
            errors.address = 'address is required!';
        }
        if (!values.mhistory) {
            errors.mhistory = 'medical history is required!';
        }
        if (!values.session) {
            errors.session = 'session is required!';
        }
        return errors;
    }


    return (
        <div className='profileC'>
            <form onSubmit={handleSubmit} >
                <div className="m_container">
                    <h1>Profile</h1>
                    <div className="m_birthday">
                        <input
                            type="date"
                            id="m_date"
                            name="bdate"
                            placeholder='Date of birth'
                            value={profileValues.bdate}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='errorMsg'>{profileErrors.bdate}</p>
                    <br />
                    <input
                        type="text"
                        name="address"
                        placeholder='Address'
                        value={profileValues.address}
                        onChange={handleChange}
                    />
                    <p className='errorMsg'>{profileErrors.address}</p>
                    <br />
                    <div className="m_where">
                        <input
                            type="text"
                            name="country"
                            id='country'
                            placeholder='Country'
                            value={profileValues.country}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            id='city'
                            placeholder='City'
                            value={profileValues.city}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="m_Medical">
                        <input
                            type="text"
                            name="mhistory"
                            placeholder='Medical History'
                            value={profileValues.mhistory}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='errorMsg'>{profileErrors.mhistory}</p>

                    <br />
                    <select
                        name="session"
                        className="m_session"
                        value={profileValues.session}
                        onChange={handleChange}>
                        <option value="placeholder disabled">What type of sessions are you interested in?</option>
                        <option value="individual session">individual session</option>
                        <option value="Couples session">Couples session</option>
                        <option value="Family session">Family session</option>
                        <option value="Group session">Group session</option>
                        <option value="Work Pressure session">Work Pressure session</option>
                        <option value="Teen session">Teen session</option>
                    </select>
                    <p className='errorMsg'>{profileErrors.session}</p>

                    <br />
                    <div className="m_contact">
                        <input
                            type="text"
                            name="tcontact"
                            id='CT'
                            placeholder='Trusted Contact'
                            value={profileValues.tcontact}
                            onChange={handleChange} />
                        <input
                            type="text"
                            name="rcontact"
                            placeholder='Contact Relation'
                            value={profileValues.rcontact}
                            onChange={handleChange} />
                    </div>
                    <div className="m_tell">
                        <p>Tell us whom should we call in case of an emergency.</p>
                        <p>This contact will be used in case emergency only.</p>
                    </div>
                    <div className="m_clearfix">
                        <button type="submit" className="m_start">Start Your Journy</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileC;