import React, { useState } from 'react'
import './Questions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faFileAlt, faFileImage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Question = ({files=[]}) => {
    const getFileIcon = (file) => {
        const fileType = file.type;
        if (fileType.includes('image')) {
          return faFileImage;
        } else if (fileType.includes('pdf')) {
          return faFilePdf;
        } else {
          return faFileAlt;
        }
      };
      const [activeSection, setActiveSection] = useState(0);
      const sectionContents = [
        {
            title: 'Case Desc',
            content: 'Content for Section 1',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        },
        {
            title: 'Act & Laws',
            content: 'Content for Section 2',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        },
        {
            title: 'Judgement',
            content: 'Content for Section 3',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        },
        {
            title: 'Templates',
            content: 'Content for Section 4',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        },
        {
            title: 'Questions',
            // content: 'Content for Section 5',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        },
        {
            title: 'Support',
            content: 'Content for Section 5',
            moreContent: [
                {
                    question: 'What is Lorem Ipsum?',
                    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                },
                {
                    question: 'Where does it come from?',
                    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
                },
                {
                    question: 'Why do we use it?',
                    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                }
                
            ]
        }
    ];

    return (
        <div className="container">
            <div className="box small">
            <Link to="/">
                <div className='flex-container'>
                    <FontAwesomeIcon className="icon" icon={faCircleChevronLeft} />
                    <button className="back-button"> Back to home</button>
                </div>
                </Link>
                <div className="information-container">
                    <h5>Given Information</h5>
                    <p>
                        <h4>Text Passage</h4>
                        There are many variations of passages of Lorem Ipsum available, by injected humour,
                        or randomised words which don't look even slightly believable. </p>
                </div>
                <div>
                    <h4>Uploads</h4>
                    {files.length > 0 && (
                        <div className="file-list-container">
                            <h6 style={{fontSize:'15px',fontWeight:'400'}}>
                                Uploaded files <span className="file-count">{files.length}/5</span>
                            </h6>
                            <div className="file-blocks">
                                {files.map((file, index) => (
                                    <div key={index} className="file-block">
                                        <FontAwesomeIcon icon={getFileIcon(file)} className="file-icon" />
                                        <p>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="box large">
                <div className="section-buttons">
                    {sectionContents.map((section, index) => (
                        <button
                            key={index}
                            className={`section-button ${activeSection === index ? 'active' : ''}`}
                            onClick={() => setActiveSection(index)}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
                <div className="section-content">
                    <h3>{sectionContents[activeSection].title}</h3>
                    {/* <p>{sectionContents[activeSection].content}</p> */}
                    {sectionContents[activeSection].moreContent && (
                        <div className="more-questions">
                            {sectionContents[activeSection].moreContent.map((item, idx) => (
                                <div key={idx}>
                                      <h4>{`${idx + 1}. ${item.question}`}</h4>
                                    <p>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Question