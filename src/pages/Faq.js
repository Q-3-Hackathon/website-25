import { useState, useRef } from "react";
import "../styles/Faq.css";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const answerRefs = useRef([]);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Who can attend?",
      answer: `For both UMD & USC, virtual participation is available to all! However, for in-person participation, anyone can attend the UMD side but we are 
        capacity restricted to 100 participants max. In-person participation at USC is only available to USC students.`,
    },
    {
      question: "Is Q<sup>3</sup> a traditional hackathon?",
      answer: `Yes and no. The USC side will be a traditional 24-hour hackathon on September 12-14. The challenges for USC will be more technical sponsored quantum 
        computing challenges. The UMD side is a non-traditional, fully virtual, 4-6 week hackathon focused on creating art (animations, music, etc) to help teach 
        quantum to the general public. The challenges for the UMD side will open on September 12 and close October 12.`,
    },
    {
      question: "Where can I find the Quantum x Art challenges?",
      answer: `You can find these challenges and submit your project on the DoraHacks site here [link dorahacks].`,
    },
    {
      question: "Will there be prizes?",
      answer: `Yes! There will be cash prizes and even opportunities to get hired!`,
    },
    {
      question: "How many people per team?",
      answer: `We suggest teams of 2-5 people.`,
    },
    {
      question:
        "For the Quantum x Art challenges, why is the team required to have at least one artist?",
      answer: `There is no Quantum x Art without the art! Artists will challenge scientists to communicate complex quantum topics in a
         manner that is understandable by someone without a strong scientific background. Teams without at least one artist will be disqualified.`,
    },
    {
      question: "When will projects be judged?",
      answer: `USC projects will be judged on Sunday, September 14 and winners will be announced later that evening. UMD winners will be 
        announced at the Quantum Career Leap Nexus on October 29.`,
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              dangerouslySetInnerHTML={{ __html: item.question }}
            />
            <div
              className={`faq-answer-wrapper ${
                openQuestion === index ? "open" : ""
              }`}
              style={{
                height:
                  openQuestion === index
                    ? answerRefs.current[index]?.scrollHeight + "px"
                    : "0px",
              }}
              ref={(el) => (answerRefs.current[index] = el)}
            >
              <p
                className="faq-answer"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;