import react, { useState, useEffect } from "react";

import './profileA.css'
import '../pictures/pic5.png';

const ProfileA = () => {

    //state to be sent to backend
    const intialValuesA = { bdate: "", address: "", country: "", city: "", profession: "", languages: "", file: "", licID: "", licED: "" };

    const [profileAValues, setProfileAValues] = useState(intialValuesA);
    const [profileAErrors, setProfileAErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setProfileAValues({ ...profileAValues, [name]: value });
    }

    const handleSubmit = (err) => {
        err.preventDefault();
        setProfileAErrors(validate(profileAValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(profileAErrors).length === 0 && isSubmit) {
            console.log(profileAValues);
        }
    }, [profileAErrors])

    const validate = (values) => {
        const errors = {};

        if (!values.bdate) {
            errors.bdate = 'bdate is required!';
        }
        if (!values.address) {
            errors.address = 'address is required!';
        }
        if (!values.country) {
            errors.country = 'country is required!';
        }
        if (!values.city) {
            errors.city = 'city is required!';
        }
        if (!values.profession) {
            errors.profession = 'profession is required!';
        }
        if (!values.languages) {
            errors.languages = 'language is required!';
        }
        if (!values.file) {
            errors.file = 'licences image is required!';
        }
        if (!values.licID) {
            errors.licID = 'lic. Issued Date is required!';
        }
        if (!values.licED) {
            errors.licED = 'lic. Expiry Date is required!';
        }
        return errors;
    }





    return (
        <div className="a_profileA">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="a_container">
                    <div className="a_birthday">
                        <input
                            type="date"
                            id="a_date"
                            name="bdate"
                            value={profileAValues.bdate}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='errorMsg'>{profileAErrors.bdate}</p>

                    <br />

                    <input
                        type="text"
                        name="address"
                        placeholder='Address'
                        value={profileAValues.address}
                        onChange={handleChange}
                    />
                    <p className='errorMsg'>{profileAErrors.address}</p>

                    <br />
                    <div className="a_where">

                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder='Country'
                            value={profileAValues.country}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder='City'
                            value={profileAValues.city}
                            onChange={handleChange}

                        />
                    </div>
                    <p className='errorMsg'>{profileAErrors.country}</p>
                    <p className='errorMsg'>{profileAErrors.city}</p>

                    <br />
                    <div className="a_Profession">
                        <select
                            name="profession"
                            className="a_prof"
                            id="prof"
                            value={profileAValues.profession}
                            onChange={handleChange}>
                            <option value="selected disabled">Your Profession:</option>
                            <option value="Therapist">Therapist</option>
                            <option value="Life Coach">Life Coach</option>
                            <option value="Yoga instructor">Yoga instructor</option>
                            <option value="Nutritionist">Nutritionist</option>
                        </select>

                        <select
                            name="languages"
                            className="a_languages"
                            id="lang"
                            value={profileAValues.languages}
                            onChange={handleChange}>
                            <option value="selected disabled">Proficient languages:</option>
                            <option value="Arabic">Arabic</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <p className='errorMsg'>{profileAErrors.profession}</p>
                    <p className='errorMsg'>{profileAErrors.languages}</p>

                    <br />
                    <p id="a_p">Upload photo of license</p>
                    <div className="a_upload">
                        <input
                            type='file'
                            name="file"
                            placeholder="click to uplad image"
                            value={profileAValues.file}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='errorMsg'>{profileAErrors.file}</p>

                    <br />
                    <div className="a_license">
                        <input
                            type="date"
                            name="licID"
                            id="licID"
                            placeholder="Lic. Issued Date"
                            value={profileAValues.licID}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="licED"
                            id="licED"
                            placeholder="Lic. Expiry Date"
                            value={profileAValues.licED}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='errorMsg'>{profileAErrors.licID}</p>
                    <p className='errorMsg'>{profileAErrors.licED}</p>




                    <div className="a_clearfix">
                        <button type="submit" className="a_start">Start Your Journy</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ProfileA;