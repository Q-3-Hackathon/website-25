import React, { useRef, useState} from 'react';
import { FIRESTORE_DB } from '../../firebase/FirebaseConfig';
import SelectButton from '../../components/SelectButton';
import TextInput from '../../components/TextInput';
import BubbleSelector from '../../components/BubbleSelector';
import { collection, addDoc } from 'firebase/firestore';
import styles from './SignUp.module.css';
import { schoolNames } from '../../assets/schools';
import CheckboxSelector from '../../components/CheckboxSelector';

function SignUp() {
    const firstName = useRef('');
    const lastName = useRef('');
    const phoneNumber = useRef('');
    const email = useRef('');
    const phoneNum = useRef('');
    const institution = useRef('');
    const role = useRef('');
    const roleOther = useRef('');
    const howHeard = useRef('');
    const howHeardOther = useRef('');

    // volunteer
    const availability = useRef({});
    const shifts = useRef({});
    const location = useRef({});

    // explorer
    const major = useRef('');
    const attendance = useRef('');
    const whyQuantumArt = useRef('');
    const favoriteSong = useRef('');
    const favoriteMovie = useRef('');
    const favoriteMuseum = useRef('');
    // const artPrompt = useRef('');
    // const ethicsPrompt = useRef('');
    const bookPrompt = useRef('');
    const mergePrompt = useRef('');
    const researchPrompt = useRef('');
    const q3Prompt = useRef('');

    // emergency contact information
    const emergencyContactFirstName = useRef('');
    const emergencyContactLastName = useRef('');
    const emergencyContactPhoneNumber = useRef('');
    const emergencyContactEmail = useRef('');
    const emergencyContactRelationship = useRef('');

    const canSubmit = useRef(true);

    const urlParams = new URLSearchParams(window.location.search);
    let userTypeParam = urlParams.get('userType');
    if (userTypeParam !== 'volunteer' && userTypeParam !== 'explorer') {
        userTypeParam = 'volunteer';
        urlParams.set('userType', userTypeParam);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    }
    const [userType, setUserType] = React.useState(urlParams.get('userType') || 'volunteer');

    const [showOtherRoleInput, setShowOtherRoleInput] = React.useState(false);
    const [showOtherHowHeardInput, setShowOtherHowHeardInput] = React.useState(false);
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
            phoneNumber: phoneNumber.current.value.replace(/[^0-9]/g, ''),
            email: email.current.value,
            phoneNum: phoneNum.current.value,
            institution: institution.current.value,
            role: showOtherRoleInput ? roleOther.current.value : role.current.value,
            howHeard: showOtherHowHeardInput ? howHeardOther.current.value : howHeard.current.value,
            emergencyContactFirstName: emergencyContactFirstName.current.value,
            emergencyContactLastName: emergencyContactLastName.current.value,
            emergencyContactPhoneNumber: emergencyContactPhoneNumber.current.value.replace(/[^0-9]/g, ''),
            emergencyContactEmail: emergencyContactEmail.current.value,
            emergencyContactRelationship: emergencyContactRelationship.current.value,
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
            data.favoriteMuseum = favoriteMuseum.current.value;
            data.bookPrompt = bookPrompt.current.value;
            data.mergePrompt = mergePrompt.current.value;
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

                <div className={styles.formRow}>
                    <TextInput label="First Name" ref={firstName} placeholder="John" />
                    <TextInput label="Last Name" ref={lastName} placeholder="Doe" />
                </div>

                <TextInput label="Phone Number" ref={phoneNumber} type="tel" pattern="\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}" placeholder="(123) 456-7890" />

                <TextInput label="Email" ref={email} type="email" placeholder="john.doe@umd.edu" />

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
                    { label: 'Other', value: 'other' },
                ]} onChange={() => { setShowOtherRoleInput(role.current.value === 'other'); }} />

                {showOtherRoleInput && <TextInput label="Please specify your role..." ref={roleOther} showLabel={false} placeholder="e.g. Artist, Researcher, etc." />}

                {userType === 'explorer' &&
                    <TextInput label="Major" ref={major} placeholder="e.g. Computer Science, Physics, etc." />}

                <hr style={{ margin: '20px 0' }} />

                <SelectButton label="How did you hear about us?" ref={howHeard} labelType="prompt" options={[
                    { label: 'Select Option', value: '' },
                    { label: 'Social Media', value: 'socialMedia' },
                    { label: 'Friend/Colleague', value: 'friend' },
                    { label: 'Email Newsletter', value: 'emailNewsletter' },
                    { label: 'Website', value: 'website' },
                    { label: 'Other', value: 'other' },
                ]} onChange={() => { setShowOtherHowHeardInput(howHeard.current.value === 'other'); }} />
                {showOtherHowHeardInput && <TextInput label="Please specify how you heard about us..." showLabel={false} ref={howHeardOther} labelType="title" />}

                <hr style={{ margin: '20px 0' }} />

                {userType === 'volunteer' && (
                    <>
                        <CheckboxSelector label="What is your availability for the event?" ref={availability} options={[
                            { label: 'Friday Night', value: 'friday' },
                            { label: 'Saturday', value: 'saturday' },
                            { label: 'Sunday*', value: 'sunday' },
                        ]} />

                        <div>
                            <p style={{ fontSize: 'small' }}>
                                *Q^3 is tentatively scheduled for Sunday and may be subject to change. We'll provide updates as soon as they are available.
                            </p>
                        </div>

                        <CheckboxSelector label="I am available for the following shifts..." ref={shifts} options={[
                            { label: '4:00–6:00 PM (Friday)', value: '16-18-fri' },
                            { label: '9:00–11:00 AM (Saturday)', value: '09-11-sat' },
                            { label: '11:00 AM–1:00 PM (Saturday)', value: '11-13-sat' },
                            { label: '1:00–3:00 PM (Saturday)', value: '13-15-sat' },
                            { label: '3:00–7:00 PM (Saturday)', value: '15-19-sat' },
                        ]} />
                        <CheckboxSelector label="Where would you like to volunteer?" ref={location} options={[
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
                        <SelectButton ref={attendance} options={[
                            { label: 'Select Option', value: '' },
                            { label: 'In-Person*', value: 'inPerson' },
                            { label: 'Virtually', value: 'virtual' },
                        ]} showLabel={true} label="I would like to attend..." labelType="prompt" />

                        <div>
                            <p style={{ fontSize: 'small' }}>
                                *Due to capacity constraints, we are only accepting 100 in-person applicants. Choosing in-person attendance does not guarantee acceptance. We will notify you if you have been selected to attend in-person.
                            </p>
                        </div>

                        <hr style={{ margin: '20px 0' }} />

                        <TextInput label="Why quantum and art?" ref={why} showLabel={true} labelType="prompt" placeholder="I am interested in quantum because..." />

                        <TextInput label="My favorite song is..." ref={favoriteSong} showLabel={true} labelType="prompt" placeholder="e.g. Bohemian Rhapsody" />

                        <TextInput label="My favorite movie is..." ref={favoriteMovie} showLabel={true} labelType="prompt" placeholder="e.g. Inception" />

                        <TextInput label="My favorite museum is..." ref={favoriteMuseum} showLabel={true} labelType="prompt" placeholder="e.g. The Louvre" />

                        {/* <TextInput label="A musician approaches you and asks you for a crazy idea on combining quantum and music. What would you say?" ref={artPrompt} showLabel={true} placeholder="A quantum keyboard..." labelType="prompt" />
                        <TextInput label="What if the musician said he wanted to use that idea to brainwash the world. What will you do to stop him?" ref={ethicsPrompt} showLabel={true} placeholder="You mustn't..." labelType="prompt" /> */}

                        <TextInput label="If you were to write a book, what would it be about?" ref={bookPrompt} showLabel={true} labelType="prompt" placeholder="My pet dog..." />
                        <TextInput label="Suppose you were to merge quantum and music. What would you create?" ref={mergePrompt} showLabel={true} labelType="prompt" placeholder="A quantum keyboard..." />
                        <TextInput label="When you think of quantum research, what's the first thing that comes to mind?" ref={researchPrompt} showLabel={true} labelType="prompt" placeholder="Quantum computers..." />
                        <TextInput label="What do you look forward to at Q^3?" ref={q3Prompt} showLabel={true} labelType="prompt" placeholder="Lots of fun..." />
                    </>
                )}

                <hr style={{ margin: '20px 0' }} />

                <h2 style={{ fontSize: 'medium', textAlign: 'center' }}>Emergency Contact Information</h2>
                <div className={styles.formRow}>
                    <TextInput label="First Name" ref={emergencyContactFirstName} placeholder="Jane" />
                    <TextInput label="Last Name" ref={emergencyContactLastName} placeholder="Doe" />
                </div>
                <TextInput label="Phone Number" ref={emergencyContactPhoneNumber} type="tel" pattern="\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}" placeholder="(123) 456-7890" />
                <TextInput label="Email" ref={emergencyContactEmail} type="email" placeholder="jane.doe@umd.edu" />
                <TextInput label="Relationship" ref={emergencyContactRelationship} placeholder="e.g. Parent, Guardian, etc." />

                <br />

                <button type="submit" className={styles.submitButton}>Sign Up</button>

                <br />
            </form>
        </div>
    );
};

export default SignUp;
