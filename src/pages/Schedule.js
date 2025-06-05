import '../styles/Schedule.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
function Schedule() {
  return (
    <div>

    {/*Tab Headings*/}
    <Tabs>
    <TabList>
      <Tab style={{listStyle: 'none'}}>
        <div style={{ marginTop: '10px', marginLeft: '30px', width: '650px', height: '120px', borderStyle: 'solid', borderRadius: '10px', borderColor: 'white', background: 'linear-gradient(270deg, #cbdeeb, #5ec1e5)', boxShadow: ' 5px 5px 5px  #cbdeeb'}}>
          <h1 style={{marginTop: '20px', color: 'white', textShadow: '2px 2px rgb(215, 241, 248)'}}>UMD Schedule</h1>
        </div>
       
      </Tab>
      <Tab style={{listStyle: 'none'}}>
      <div style={{marginTop: '-120px', marginLeft: '690px', width: '670px', height: '120px', borderStyle: 'solid', borderColor: 'white', borderRadius: '10px', background: 'linear-gradient(270deg, #cbdeeb, #5ec1e5)',boxShadow: ' 5px 5px 5px  #cbdeeb'}}>
            <h1 style={{marginTop: '20px',  textShadow: '2px 2px rgb(232, 238, 239)'}}>USC Schedule</h1>
      </div>

      </Tab>
    </TabList>

    {/*UMD Schedule*/}
    <TabPanel>
      <h2 style={{textAlign: 'center', margin: '10px', textDecoration: 'underline'}}>UMD Schedule</h2>
      <h4 style={{backgroundColor: '#CBDEEB'}}> 
      {/*Friday */}
      <h3 style={{ fontFamily: 'Poppins', marginLeft: '200px'}}>Friday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '199px', marginTop: '-5px',marginBottom: '10px'}}>September 12</h4>
      <div class="flex-container" style={{marginLeft: '50px'}}>
       <div class="flex-item white" style={{marginTop: '50px'}}>
       <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Welcome Dinner Reception</h5>
       <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter', fontWeight: 'normal'}}>and Registration</h5>
       <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Exhibition: Quantum Choreobotics</h5>
       <h5 style={{marginTop: '-60px', marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>4 - 6 PM</h5>
       <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
       <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
      </div>
      </div>
    {/*Saturday */}
    <h3 style={{fontFamily: 'Poppins', marginLeft: '680px', marginTop: '-1367px'}}>Saturday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '680px', marginTop: '-5px',marginBottom: '10px'}}>September 13</h4>
      <div class="flex-container" style={{marginLeft: '510px'}}>
         <div class="flex-item white" style={{marginTop: '50px'}}>
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Breakfast</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>9 - 10 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Opening Remarks</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum and Art</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>- Victoria Kumaran</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>9:30 - 10 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Keynote 2</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Prof. Nicole Yunger Halpern</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>& Burce Modvic</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>10:10 - 11 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Workshop 1</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum Comics </h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Using Illustrator</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>11:10 - 12:10 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Lunch</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>12:10 - 1 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Keynote 3</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>1:10 - 2:10 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Workshop 2</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum Chip Rendering </h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Using Blender</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>2:20 - 3:20 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Networking Break</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>3:20 - 4 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Workshop 3</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Animations Using </h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Manim / After Effects</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>4:10 - 5:10 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum Intuition Demo</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>5:10 - 5:45 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Closing Remarks</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>5:50 - 6:15 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Stamp Student</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Union</h5>
         </div>
      </div>
      </h4>
      {/*Sunday*/}
      <h3 style={{fontFamily: 'Poppins', marginLeft: '1125px', marginTop: '-1367px'}}>Sunday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '1125px', marginTop: '-5px',marginBottom: '10px'}}>September 14</h4>
      <div class="flex-container" style={{marginLeft: '970px', marginBottom: '20px'}}></div>
      </TabPanel>
    {/*USC Schedule*/}
    <TabPanel>
    <h2 style={{textAlign: 'center', margin: '10px', textDecoration: 'underline'}}>USC Schedule</h2>
    <h4 style={{backgroundColor: '#CBDEEB'}}> 
      {/*Friday */}
      <h3 style={{fontFamily: 'Poppins', marginLeft: '200px'}}>Friday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '199px', marginTop: '-5px',marginBottom: '10px'}}>September 12</h4>
      <div class="flex-container" style={{marginLeft: '50px'}}>
       <div class="flex-item white" style={{marginTop: '50px'}}>
       <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Welcome Reception</h5>
       <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter', fontWeight: 'normal'}}>and Registration</h5>
       <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>{"‎ "}</h5>
       <h5 style={{marginTop: '-60px', marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>5 - 8 PM</h5>
       <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
       <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
      </div>
      </div>
    {/*Saturday */}
    <h3 style={{fontFamily: 'Poppins', marginLeft: '680px', marginTop: '-1367px'}}>Saturday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '680px', marginTop: '-5px',marginBottom: '10px'}}>September 13</h4>
      <div class="flex-container" style={{marginLeft: '510px'}}>
         <div class="flex-item white" style={{marginTop: '50px'}}>
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Breakfast</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>9 - 10 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Opening Remarks</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>{"‎ "}</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>{"‎ "}</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>9:45 - 10 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Lecture about</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Implications of Policy in</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Emerging Tech Fields</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>10 - 11 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Networking</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Break </h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎ </h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>11:10 - 11:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Technical Quantum Talk</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>11:30 - 12:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Lunch Break</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>12:30 - 1:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Competition</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>1:30 - 3 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Networking Break</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>3 - 3:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Competition/ </h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Workshops</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>4:10 - 5:10 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Closing Remarks, Group Photo</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>TBD</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Dinner Reception</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>6 - 8 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
      </div>
      </h4>
      {/*Sunday*/}
      <h3 style={{fontFamily: 'Poppins', marginLeft: '1125px', marginTop: '-1367px'}}>Sunday,</h3>
      <h4 style={{fontFamily: 'Poppins',marginLeft: '1125px', marginTop: '-5px',marginBottom: '10px'}}>September 14</h4>
      <div class="flex-container" style={{marginLeft: '970px', marginBottom: '20px'}}>

      <div class="flex-item white" style={{marginTop: '50px'}}>
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Breakfast</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>9 - 10 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Computing</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Lecture</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>10 - 11 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Networking Break</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>10 - 11:30 AM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Competition</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎ </h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>11:30 - 12:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Lunch Break</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>12:30 - 1:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum Competition</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>1:30 - 3 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Networking</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Break</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>‎</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>3 - 3:30 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Q^3 Quantum Panel</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>3:30 - 5 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white" >
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Quantum Competition</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Final Judging and</h5>
          <h5 style={{marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Announcements</h5>
          <h5 style={{ marginTop: '-60px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>5 - 6 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Closing Remarks, Group Photo</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>TBD</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>
         <div class="flex-item white">
          <h5 style={{marginTop: '20px',marginLeft: '15px' ,  fontFamily: 'Inter' , fontWeight: 'normal'}}>Dinner Reception</h5>
          <h5 style={{marginTop: '-21px',marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'bold'}}>6 - 8 PM</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>MCB 101/102</h5>
          <h5 style={{ marginLeft: '280px' ,  fontFamily: 'Inter', fontWeight: 'lighter'}}>Area</h5>
         </div>


      </div>




    </TabPanel>
  </Tabs>

     
    </div>
  );
}

export default Schedule;