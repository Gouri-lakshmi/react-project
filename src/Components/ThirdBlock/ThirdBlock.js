
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle, faCircleChevronLeft, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
import './ThirdBlock.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ThirdBlock = () => {
    const steps = [
        {
            label: 'Start',
        },
        {
            label: 'File',
        },
        {
            label: 'Data',
        },
        {
            label: 'Message',
        },
        {
            label: 'Info',

        },
        {
            label: 'End',

        },
    ];
    const stepsdata = [
        {
            label: 'Data',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            label: 'File',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            label: 'Market',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const [activeStep, setActiveStep] = React.useState(2);;

    return (
        <div className="container">
            <div className="box small">
                <Link to="/">
                <div className='flex-container'>
                    <FontAwesomeIcon className="icon" icon={faCircleChevronLeft} />
                    <button className="back-button"> Back to home</button>
                </div>
                </Link>
                <div className="data-container">
                    <h5>Given Information</h5>
                    <p className='lorem'>
                        <h4>Your search</h4>
                        Lorem Ipsum available </p>
                    <h4>Recents</h4>
                    <div className='dotted-boxes'>
                        <div className="dotted-box">
                            <div className="top-content">
                                <p className='days'>Text  </p>
                                <p className="in-progress-text"><FontAwesomeIcon icon={faSpinner} /> In Progress</p>
                            </div>
                            <h6>Dummy Text Data</h6>
                            <p className='time'>10 minutes ago</p>
                        </div>
                        <div className="dotted-box">
                            <div className="top-content">
                                <p className='days'>Deeds</p>
                                <p className="completed-text"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
                            </div>
                            <h6>Dummy Text Data</h6>
                            <p className='time'>10 minutes ago</p>
                        </div>
                        <div className="dotted-box">
                            <div className="top-content">
                                <p className='days'>Contract </p>
                                <p className="failed-text"><FontAwesomeIcon icon={faTimesCircle} /> Failed</p>
                            </div>
                            <h6>Dummy Text Data</h6>
                            <p className='time'>10 minutes ago</p>
                        </div>
                        <div className="dotted-box">
                            <div className="top-content">
                                <p className='days'>Data</p>
                                <p className="completed-text"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
                            </div>
                            <h6>Dummy Text Data</h6>
                            <p className='time'>10 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box large">
                <div>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>Case Flow</p>
                    <p style={{color:"blue"}}>Select the document for drafting</p>
                </div>
                <ul class="data-list">
                <div class="step">
                <FontAwesomeIcon icon={faCircle} className='dot-icon' /> 
                 <span class="step-label">Data</span>
                        </div>
                    <li>
                        
                        <div class="line"></div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </li>
                    <div class="step">
                    <FontAwesomeIcon icon={faCircle} className='dot-icon' /> 
                            <span class="step-label">File</span>
                        </div>
                    <li>
                       
                        <div class="line"></div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </li>
                    
                        <div class="step">
                        <FontAwesomeIcon icon={faCircle} className='dot-icon' /> 
                            <span class="step-label">Market</span>
                        </div>
                        <div class="line"></div>
                        <div class="data-box">
                            <p>Legal Notice</p>
                            <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    
                </ul>

            </div>
            <div className="box small">
                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel>{step.label}</StepLabel>

                            </Step>
                        ))}
                    </Stepper>

                </Box>
            </div>
        </div>
    )
}

export default ThirdBlock