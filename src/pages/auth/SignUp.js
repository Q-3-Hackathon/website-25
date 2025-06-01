import React, { use, useRef, useState} from 'react';
import { FIRESTORE_DB } from '../../firebase/FirebaseConfig';
import SelectButton from '../../components/SelectButton';
import TextInput from '../../components/TextInput';
import BubbleSelector from '../../components/BubbleSelector';
import { collection, addDoc } from 'firebase/firestore';
import styles from './SignUp.module.css';
import { schoolNames } from '../../assets/schools';

function SignUp() {
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const phoneNum = useRef('');
    const streetAddr = useRef('');
    const streetAddrTwo = useRef('');
    const city = useRef('');
    const state = useRef('');
    const zipCode = useRef('');
    const institution = useRef('');
    const role = useRef('');
    const whereHeard = useRef('');
    const emergFirstName = useRef('');
    const emergLastName = useRef('');
    const emergRelation = useRef('');
    const emergEmail = useRef('');
    const emergNumber = useRef('');

    // volunteer
    const availability = useRef('');
    const shifts = useRef('');
    const location = useRef('');

    // explorer
    const major = useRef('');
    const attendance = useRef('');
    const why = useRef('');
    const favoriteSong = useRef('');
    const favoriteMovie = useRef('');
    const favoriteMuseum = useRef('');
    const artPrompt = useRef('');
    const ethicsPrompt = useRef('');

    {/* Need to implement terms and conditions for the forms */}

    const canSubmit = useRef(true);

    const urlParams = new URLSearchParams(window.location.search);
    let userTypeParam = urlParams.get('userType');
    if (userTypeParam !== 'volunteer' && userTypeParam !== 'explorer') {
        userTypeParam = 'volunteer';
        urlParams.set('userType', userTypeParam);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    }
    const [userType, setUserType] = React.useState(urlParams.get('userType') || 'volunteer');

    // multiple choice questions
    const [selectedLocations, setSelectedLocations] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLocations((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
    };

    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!canSubmit.current)
            return;
        canSubmit.current = false;

        const data = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phoneNum: phoneNum.current.value,
            streetAddr: streetAddr.current.value,
            streetAddrTwo: streetAddrTwo.current.value,
            city: city.current.value,
            state: state.current.value,
            zipCode: zipCode.current.value,
            institution: institution.current.value,
            role: role.current.value,
            whereHeard: whereHeard.current.value
        };

        if (userType === 'volunteer') {
            data.availability = availability.current.value;
            data.shifts = shifts.current.value;
            data.location = location.current.value;
        } else if (userType === 'explorer') {
            data.major = major.current.value;
            data.attendance = attendance.current.value;
            data.why = why.current.value;
            data.favoriteSong = favoriteSong.current.value;
            data.favoriteMovie = favoriteMovie.current.value;
            data.favoriteMuseum = favoriteMuseum.current.value;
            data.artPrompt = artPrompt.current.value;
            data.ethicsPrompt = ethicsPrompt.current.value;
        }

        // Add a new document with a generated ID
        const docRef = await addDoc(collection(FIRESTORE_DB, 'signups'), data);
        console.log('Document written with ID: ', docRef.id);

        setSubmitted(true);

        canSubmit.current = true;
    }

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Sign Up</h1>
                <p>Thank you for signing up!</p>
                <p>We will get back to you soon.</p>
            </div>
        );
    }

    const handleUserTypeChange = (option) => {
        setUserType(option);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <BubbleSelector options={['volunteer', 'explorer']} onSelect={handleUserTypeChange} selectedOption={userType} />

                <br />

                <div className="form-group">
                <label htmlFor="full-name" classname="form-label">Name:</label>
                    <div id="full-name" className={styles.formRow}>
                        <TextInput label="First Name" ref={firstName} />
                        <TextInput label="Last Name" ref={lastName} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="street-address" classname="form-label">Address:</label>
                    <TextInput id="street-address" label="Street Address" ref={streetAddr} />
                </div>
                <TextInput label="Street Address Line 2" ref={streetAddrTwo} />
                <TextInput label="City" ref={city} />

                <div className={styles.formRow}>
                    <TextInput label="State" ref={state} />
                    <TextInput label="Zip Code" ref={zipCode} />
                </div>

                <div className="form-group">
                    <label htmlFor="email" classname="form-label">Email:</label>
                    <TextInput id="email" label="ex: myname@example.com" ref={email} type="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="phone-number" classname="form-label">Phone Number:</label>
                    <TextInput id="phone-number" label="(000) 000-000" ref={phoneNum} />
                </div>

                <div className="form-group">
                    <label htmlFor="institution" classname="form-label">Institution:</label>
                    <TextInput id="institution" label="ex: University of Maryland, College Park" ref={institution} />
                </div>
                {/*
                <SelectButton label="Institution" ref={institution} options={[
                    { label: 'Select Institution', value: '' },
                    ...schoolNames.map((school) => ({ label: school, value: school })),
                ]} />
                */}

                <div className="form-group">
                    <label htmlFor="role" classname="form-label">Role:</label>
                    <SelectButton id="role" label="role" ref={role} options={[
                        { label: 'Select Option', value: '' },
                        { label: 'High School Student', value: 'hsStudent' },
                        { label: 'Undergraduate Student', value: 'undergraduateStudent' },
                        { label: 'Graduate Student', value: 'graduateStudent' },
                        { label: 'Professional', value: 'professional' },
                        { label: 'Professor', value: 'professor' },
                        { label: 'Other', value: 'other' }
                    ]} />
                </div>

                {userType === 'explorer' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="major" classname="form-label">Major:</label>
                            <TextInput id="major" label="ex: Physics" ref={major} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="attendance" classname="form-label">Would you be attending in person or virtually?</label>
                            <SelectButton id="attendance" ref={attendance} options={[
                                { label: 'Select Option', value: '' },
                                { label: 'In Person', value: 'inPerson' },
                                { label: 'Virtual', value: 'virtual' }
                            ]} />
                        </div>
                    </>
                )}

                <hr style={{ margin: '20px 0' }} />

                {/* keep numbers as placeholders for now, will figure out later */}
                <div className="form-group">
                    <label htmlFor="where-heard" classname="form-label">Where did you hear about this event?</label>
                    <SelectButton id="where-heard" ref={whereHeard} options={[
                        { label: 'Select Option', value: '' },
                        { label: '1', value: 'one' },
                        { label: '2', value: 'two' },
                        { label: '3', value: 'three' },
                        { label: '4', value: 'four' }
                    ]} />
                </div>

                {userType === 'volunteer' && (
                    <>
                        <div className="form-group">
                            <label classname="form-label">Where would you like to volunteer?</label>
                            <div className="checkbox-group"> {[
                                { label: '  Registration', value: 'registration' },
                                { label: '  Set Up', value: 'setup' },
                                { label: '  Virtual Moderator', value: 'virtualModerator' },
                                { label: '  Exhibitions', value: 'exhibitions' },
                                { label: '  Workshops', value: 'workshops' }
                            ].map((option) => (
                                <div key={option.value} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        value={option.value}
                                        onChange={handleCheckboxChange}
                                        checked={selectedLocations.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label classname="form-label">What is your availability for the event?</label>
                            <div className="checkbox-group"> {[
                                { label: '  Friday Night', value: 'friday' },
                                { label: '  Saturday', value: 'saturday' },
                                { label: '  Sunday', value: 'sunday' },
                            ].map((option) => (
                                <div key={option.value} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        value={option.value}
                                        onChange={handleCheckboxChange}
                                        checked={selectedLocations.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label classname="form-label">What shifts are you able to volunteer?</label>
                            <div className="checkbox-group"> {[
                                { label: '  4:00 - 6:00 pm (Friday)', value: 'friday4to6'},
                                { label: '  9:00 - 11:00 am (Saturday)', value: 'saturday9to11' },
                                { label: '  11:00 am - 1:00 pm (Saturday)', value: 'saturday11to1' },
                                { label: '  1:00 - 3:00 pm (Saturday)', value: 'saturday1to3' },
                                { label: '  4:00 - 7:00 pm (Saturday)', value: 'saturday4to7' }
                            ].map((option) => (
                                <div key={option.value} className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        value={option.value}
                                        onChange={handleCheckboxChange}
                                        checked={selectedLocations.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                    </>
                )}

                {/* These are general questions for attendees that can be changed anytime */}
                {userType === 'explorer' && (
                    <>
                        <br />
                        <TextInput label="Why quantum and art?" ref={why} />
                        <TextInput label="My favorite song is..." ref={favoriteSong} />
                        <TextInput label="My favorite movie is..." ref={favoriteMovie} />
                        <TextInput label="My favorite museum is..." ref={favoriteMuseum} />

                        <br />
                        <TextInput label="A musician approaches you and asks you for a crazy idea on combining quantum and music. What would you say?" ref={artPrompt} showLabel={true} placeholder="A quantum keyboard..." />
                        <br />
                        <TextInput label="What if the musician said he wanted to use that idea to brainwash the world. What will you do to stop him?" ref={ethicsPrompt} showLabel={true} placeholder="You mustn't..." />
                    </>
                )}

                <hr style={{ margin: '20px 0' }} />

                {/* I don't know if this exact header is correct or not */}
                <h4>Emergency Contact Information</h4>

                <div className="form-group">
                <label htmlFor="emerg-name" classname="form-label">Name:</label>
                    <div id="emerg-name" className={styles.formRow}>
                        <TextInput label="First Name" ref={emergFirstName} />
                        <TextInput label="Last Name" ref={emergLastName} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="relation" classname="form-label">Relationship:</label>
                    <TextInput id="relation" label="ex: Father" ref={emergRelation} type="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="emerg-email" classname="form-label">Email:</label>
                    <TextInput id="emerg-email" label="ex: myname@example.com" ref={emergEmail} type="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="emerg-number" classname="form-label">Phone Number:</label>
                    <TextInput id="emerg-number" label="(000) 000-000" ref={emergNumber} />
                </div>

                {/* Implement Terms and Conditions text and option box (box can be multiple choice) */}

                <br />

                <button type="submit" className={styles.submitButton}>Sign Up</button>

                <br />
            </form>
        </div>
    );
};

export default SignUp;
