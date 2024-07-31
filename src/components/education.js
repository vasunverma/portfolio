import React from 'react';
import { Heading } from "@chakra-ui/react";
import '../stylesheets/education.css';

export const Education = () => {
    return (
        <div class="educationSection">
            <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">Where I've Studied</Heading>
            <div className="timeline">
                <div className="container">
                    <div className="year">
                        <h2 class="yy">Aug 2022 - May 2024</h2>
                    </div>
                    <div className="circle"></div>
                    <div className="degree">
                        <p class="clg">Master in Computer Science<br />
                        <strong>Texas A&M University, College Station</strong><br />
                        GPA - 3.9 out of 4</p>
                    </div>
                </div>
                <div className="container">
                    <div className="year">
                        <p class="clg">BEng. in Electronics and Computer<br />
                        <strong>Thapar Institue of Engineering and Technology, Patiala</strong><br />
                        GPA - 9.6 out of 10</p>
                    </div>
                    <div className="circle"></div>
                    <div className="degree">
                        <h2 class="yy">Aug 2016 - July 2020</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};
