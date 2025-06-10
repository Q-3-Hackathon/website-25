import React, { useRef, useState} from 'react';
import { FIRESTORE_DB } from '../../firebase/FirebaseConfig';
import SelectButton from '../../components/SelectButton';
import TextInput from '../../components/TextInput';
import BubbleSelector from '../../components/BubbleSelector';
import { collection, addDoc } from 'firebase/firestore';
import styles from './SignUp.module.css';


function SignUp() {
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const phoneNum = useRef('');
    const institution = useRef('');
    const role = useRef('');
    const otherRole = useRef('');
    const whereHeard = useRef('');
    const otherWhereHeard = useRef('');
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
    const whyQuantumArt = useRef('');
    const favoriteSong = useRef('');
    const favoriteMovie = useRef('');
    const favoriteBook = useRef('')
    const favoriteGame = useRef('');
    const bookPrompt = useRef('');
    const artPrompt = useRef('');
    const researchPrompt = useRef('');
    const q3Prompt = useRef('');

    // Need to implement terms and conditions for the forms 

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
    const [locationError, setLocationError] = useState('');

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLocations((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );

        if (locationError) { 
            setLocationError('');
        }
    };

    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (selectedLocations.length === 0) {
            setLocationError('Please select at least one option')
            return;
        }

        if (!canSubmit.current)
            return;
        canSubmit.current = false;

        const data = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phoneNum: phoneNum.current.value,
            institution: institution.current.value,
            role: role.current.value,
            otherRole: otherRole.current.value,
            whereHeard: whereHeard.current.value,
            otherWhereHeard: whereHeard.current.value
        };

        if (userType === 'volunteer') {
            data.availability = availability.current.value;
            data.shifts = shifts.current.value;
            data.location = location.current.value;
        } else if (userType === 'explorer') {
            data.major = major.current.value;
            data.attendance = attendance.current.value;
            data.whyQuantumArt = whyQuantumArt.current.value;
            data.favoriteSong = favoriteSong.current.value;
            data.favoriteMovie = favoriteMovie.current.value;
            data.favoriteGame = favoriteGame.current.value;
            data.favoriteBook = favoriteBook.current.value;
            data.artPrompt = artPrompt.current.value;
            data.bookPrompt = bookPrompt.current.value;
            data.researchPrompt = researchPrompt.current.value;
            data.q3Prompt = q3Prompt.current.value;
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

                <div className={styles.formGroup}>
                    <label htmlFor="name" className="form-label">Name</label>
                    <div className={styles.formRow}>
                        <TextInput id="firstName" label="First Name" ref={firstName} required={true} style={{ flex: 1 }} />
                        <TextInput id="lastName" label="Last Name" ref={lastName} required={true} style={{ flex: 1 }} />
                    </div>
                </div>

                <TextInput label="Email" ref={email} showLabel={true} type="email" placeholder="ex: myname@example.com" required={true} />
                <TextInput label="Phone Number" ref={phoneNum} showLabel={true} placeholder="(000) 000-000" required={true} />

                <TextInput label="Institution" ref={institution} showLabel={true} placeholder="ex: University of Maryland, College Park" required={false} />
                {/*
                <SelectButton label="Institution" ref={institution} options={[
                    { label: 'Select Institution', value: '' },
                    ...schoolNames.map((school) => ({ label: school, value: school })),
                ]} />
                */}

                <div className={styles.formGroup}>
                    <label htmlFor="role" className="form-label">Role</label>
                    <SelectButton id="role" ref={role} required={true} options={[
                        { label: 'Select Option', value: '' },
                        { label: 'High School Student', value: 'hsStudent' },
                        { label: 'Undergraduate Student', value: 'undergraduateStudent' },
                        { label: 'Graduate Student', value: 'graduateStudent' },
                        { label: 'Professional', value: 'professional' },
                        { label: 'Professor', value: 'professor' },
                        { label: 'Other', value: 'other' }
                    ]} />
                </div>

                <TextInput label="Please specify if you selected 'Other'" ref={otherRole} showLabel={true} required={false} />

                {userType === 'explorer' && (
                    <>
                        <TextInput label="Major" ref={major} showLabel={true} placeholder="ex: Physics" required={false} />

                        {/* show label does not work for drop down menus, yet */}
                        <div className={styles.formGroup}>
                            <label htmlFor="attendance" classname="form-label">Would you be attending in person or virtually?</label>
                            <SelectButton id="attendance" ref={attendance} required={true} options={[
                                { label: 'Select Option', value: '' },
                                { label: 'In Person*', value: 'inPerson' },
                                { label: 'Virtual', value: 'virtual' }
                            ]} />
                        </div>

                        <small style={{ fontSize: '13px' }}>
                            *Note: Due to capacity restraints, we are only accepting 100 in-person attendees. 
                            Choosing in-person attendance does not guarantee acceptance. 
                            We will notify you if you have been selected to attend in-person.
                        </small>
                    </>
                )}

                <hr style={{ margin: '20px 0' }} />

                {/* keep numbers as placeholders for now, will figure out later */}
                <div className={styles.formGroup}>
                    <label htmlFor="where-heard" classname="form-label">Where did you hear about this event?</label>
                    <SelectButton id="where-heard" ref={whereHeard} required={false} options={[
                        { label: 'Select Option', value: '' },
                        { label: 'Instagram', value: 'instagram' },
                        { label: 'Linkedin', value: 'linkedin' },
                        { label: 'University/School Club', value: 'club' },
                        { label: 'Word of mouth (e.g. friend, colleague)', value: 'wordOfMouth' },
                        { label: 'Google Search', value: 'google' },
                        { label: 'Flyer', value: 'flyer' },
                        { label: 'Other', value: 'other'}
                    ]} />
                </div>

                <TextInput label="Please specify if you selected 'Other'" ref={otherWhereHeard} showLabel={true} required={false} />

                {userType === 'volunteer' && (
                    <>
                        <div className={styles.formGroup}>
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
                            {locationError && (
                                /* error of not selecting any options is being tracked but not shown to user*/
                                <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>{locationError}
                                </p>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label classname="form-label">What is your availability for the event?</label>
                            <div className="checkbox-group"> {[
                                { label: '  Friday', value: 'friday' },
                                { label: '  Saturday', value: 'saturday' },
                                { label: '  Sunday*', value: 'sunday' },
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
                            {locationError && (
                                <p style={{ color: 'red', fontSize: '0.9rem'}}>{locationError}</p>
                            )}
                        </div>

                        <div className={styles.formGroup}>
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
                            {locationError && (
                                <p style={{ color: 'red', fontSize: '0.9rem'}}>{locationError}</p>
                            )}
                        </div>

                        <small style={{ fontSize: '13px' }}>
                            *Note: Q^3 is tentatively scheduled for Sunday and may be subject to change. 
                            We'll provide updates as soon as they are available.
                        </small>

                    </>
                )}

                {/* These are general questions for attendees that can be changed anytime */}
                {userType === 'explorer' && (
                    <>
                        <br />
                        <TextInput label="Why quantum and art?" ref={whyQuantumArt} showLabel={true} required={false} />
                        <br />

                        <p>What's your favorite...</p>

                        <TextInput label="Song" ref={favoriteSong} />
                        <TextInput label="Movie" ref={favoriteMovie} />
                        <TextInput label="Game" ref={favoriteGame} />
                        <TextInput label="Book" ref={favoriteBook} />

                        <br />
                        <TextInput label="If you were to write a book, what would it be about?" ref={bookPrompt} showLabel={true} 
                        required={false} />
                        <br />
                        <TextInput label="Suppose you were to merge quantum and music. What would you create?" ref={artPrompt} 
                        showLabel={true} required={false} />
                        <br />
                        <TextInput label="When you think of quantum research, what's the first thing that comes to mind?" 
                        ref={researchPrompt} showLabel={true} required={false} />
                        <br />
                        <TextInput label="What do you look forward to at Q^3?" ref={q3Prompt} showLabel={true} required={false} />
                    </>
                )}

                <hr style={{ margin: '20px 0' }} />

                <h4>Emergency Contact Information</h4>

                <div className={styles.formGroup}>
                    <label htmlFor="name" className="form-label">Name</label>
                    <div className={styles.formRow}>
                        <TextInput id="emergFirstName" label="First Name" ref={emergFirstName} required={true} style={{ flex: 1 }} />
                        <TextInput id="emergLastName" label="Last Name" ref={emergLastName} required={true} style={{ flex: 1 }} />
                    </div>
                </div>

                <TextInput label="Relation" ref={emergRelation} showLabel={true} placeholder="ex: Father" required={true} />
                <TextInput label="Email" ref={emergEmail} showLabel={true} type="email" placeholder="ex: myname@example.com" required={true} />
                <TextInput label="Phone Number" ref={emergNumber} showLabel={true} placeholder="(000) 000-000" required={true} />

                {/* Implement Terms and Conditions text and option box (box can be multiple choice) */}

                <br />

                <button type="submit" className={styles.submitButton}>Sign Up</button>

                <br />
            </form>
        </div>
    );
};

export default SignUp;
