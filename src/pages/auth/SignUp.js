import React, { useRef } from 'react';
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
    const institution = useRef('');
    const role = useRef('');

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

    const canSubmit = useRef(true);

    const urlParams = new URLSearchParams(window.location.search);
    let userTypeParam = urlParams.get('userType');
    if (userTypeParam !== 'volunteer' && userTypeParam !== 'explorer') {
        userTypeParam = 'volunteer';
        urlParams.set('userType', userTypeParam);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    }
    const [userType, setUserType] = React.useState(urlParams.get('userType') || 'volunteer');

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
            institution: institution.current.value,
            role: role.current.value,
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

                <div className={styles.formRow}>
                    <TextInput label="First Name" ref={firstName} />
                    <TextInput label="Last Name" ref={lastName} />
                </div>

                <TextInput label="Email" ref={email} type="email" />
                {/* <TextInput label="Institution" ref={institution} /> */}
                <SelectButton label="Institution" ref={institution} options={[
                    { label: 'Select Institution', value: '' },
                    ...schoolNames.map((school) => ({ label: school, value: school })),
                ]} />
                
                <SelectButton label="Role" ref={role} options={[
                    { label: 'Select Role', value: '' },
                    { label: 'High School Student', value: 'hsStudent' },
                    { label: 'Undergraduate Student', value: 'undergraduateStudent' },
                    { label: 'Graduate Student', value: 'graduateStudent' },
                    { label: 'Professional', value: 'professional' },
                    { label: 'Professor', value: 'professor' },
                ]} />

                {userType === 'explorer' &&
                    <TextInput label="Major" ref={major} />}

                <hr style={{ margin: '20px 0' }} />

                {userType === 'volunteer' && (
                    <>
                        <SelectButton label="Availability" ref={availability} options={[
                            { label: 'What is your availability for the event?', value: '' },
                            { label: 'Friday Night', value: 'friday' },
                            { label: 'Saturday', value: 'saturday' },
                            { label: 'Sunday', value: 'sunday' },
                        ]} />
                        <TextInput label="I am available for the following shifts..." ref={shifts} />
                        <SelectButton label="Location" ref={location} options={[
                            { label: 'Where would you like to volunteer?', value: '' },
                            { label: 'Registration', value: 'registration' },
                            { label: 'Set Up', value: 'setup' },
                            { label: 'Virtual Moderator', value: 'virtualModerator' },
                            { label: 'Exhibitions', value: 'exhibitions' },
                            { label: 'Workshops', value: 'workshops' },
                        ]} />
                    </>
                )}

                {userType === 'explorer' && (
                    <>
                        <SelectButton label="Attendance" ref={attendance} options={[
                            { label: 'I would like to attend...', value: '' },
                            { label: 'In-Person', value: 'inPerson' },
                            { label: 'Virtual', value: 'virtual' },
                        ]} />
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

                <br />

                <button type="submit" className={styles.submitButton}>Sign Up</button>

                <br />
            </form>
        </div>
    );
};

export default SignUp;
