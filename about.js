import React, {Component} from 'react';
import styled from 'styled-components';
import {FaCheck} from 'react-icons/lib/fa';
import {Main, Span, Blank, Text, About, Blank1, Blank2, Blank3, Span1, Content, Image, Vision, Blank4, Blank5, 
    Blank6, Policy, Span2, Span3, HeaderDiv, Img,  Span4, Span5, Vision1, List, Tarm, Condation, Blankdiv} from './about.style'
import Header from './header';
import Footer from './Footer';




class Contect extends Component{
    render(){
        return(
       <div style={{display:'flex', flexDirection:'column'}}>
            <HeaderDiv> <Header/></HeaderDiv>
                        <Main>
                                <Text>
                                    <Span>ABOUT US</Span>
                                    <Blank></Blank>
                                </Text>

                                <About>
                                        <Blank1></Blank1>
                                        <Content>
                                                <Span1>
                                                    Go4edu is an online examination system developed by SGM Technologies by Facilitating knowledge 
                                                        enrichment and skills enhancement, we assist Academic Institutes, Corporate and Governments in 
                                                        creating an environment that fosters a community of continuous learning and improvement their training 
                                                        and learning outcomes through technology.<br/> Our solution has all the features to conduct all types of 
                                                        assessments across verticals and is flexible to customize to address any specific process. Go4edu 
                                                        examination solutions is to enable organizations/institutes to save cost, time and improve efficiency 
                                                        by conducting online assessment across segments such as Education Institutes, Government bodies and 
                                                        Corporate organizations for admissions, recruitments, regulatory and employee assessments. We deliver 
                                                        our services with seamless redundancies and quality standards.<br/>Go4edu offers everything you need to 
                                                        create tests or run a quiz, design as per your requirement, assign and generate result quickly for 
                                                        your candidates. You can take tests on a daily/weekly basis and analyze learning the best way. We 
                                                        take all the pain out of exam management by handling the messy stuff like user profile and test 
                                                        delivery for them automatically. Whether you have a small number or a hundred and more wherever and 
                                                        whenever you want to do.
                                                </Span1>
                                        </Content>
                                        <Blank2></Blank2>
                                        <Image>
                                            <Img src={require('./image/image.png')} alt="image" /> 
                                        </Image>
                                        <Blank3></Blank3>
                                </About>

                                <Vision>
                                    <Blank4></Blank4>
                                    <Policy>
                                        <Span2><span>QUALITY POLICY </span></Span2>
                                        <Span3><span>SGM Technologies is committed to meet and exceed Customer expectations by providing high quality 
                                            Technology enabled product and services. The company will provide its services efficiently and effectively at 
                                            the highest level of Quality, Integrity and Security. We will insure that statutory and regulatory requirements 
                                            relevant to our products, services and security are adhered to at all times. SGM Technologies strives to achieve 
                                            these goals through continues development and implement of innovative, safe and environment friendly technology 
                                            and to ensure an environment of continues improvement through our Quality Management System. We will do this by 
                                            seeking regular feedback from our customers, by internal and external auditing, performance monitoring, corrective
                                            and preventive measures, encouraging staff involvement, Management reviews and adherence to formalized Quality 
                                            Management System.</span>
                                        </Span3>
                                    </Policy>
                                    <Blank5></Blank5>
                                    <Vision1>
                                        <Span4><span>VISION</span></Span4>
                                        <Span5><span>Our Vision is to develop in a constant manner and grow as a major IT software development and service 
                                            provider to become a leading performer, in providing quality Software Development solutions in the competitive 
                                            global marketplace. Our professional, flexible and integrated process reflects in what we do. Fortunately, we 
                                            have been able to bring together a talented crew of professionals shaped and molded by their collective 
                                            experiences in the educational sectors, corporate, Govt. and all of which possess outstanding talent. The synergy 
                                            of what Interface Software Services does comes from a blend of passion for success and the skill to help 
                                            accelerate your organization. </span>
                                        </Span5>
                                    </Vision1>
                                    <Blank6></Blank6>
                                </Vision>
                                
                                <List>
                                    <Tarm></Tarm>
                                    <Condation>
                                                <ul style={{listStyle:'none', fontSize:'14px', fontFamily:'Roboto, sans-serif'}}><span style={{fontSize:'18px', fontFamily:'Roboto, sans-serif'}}>We will maintain our promises by:</span>
                                                    <li style={{paddingLeft:20, paddingTop:6}}><FaCheck size="15px" />Serve Professionally</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Understand Customer’s expectations or requirements.</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Customer Satisfactions</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Plan methodically</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Perform effectively</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Team work culture</li>
                                                    <li style={{paddingLeft:20, paddingTop:2}}><FaCheck size="15px"/>Review and enhance our performance</li>
                                                </ul>
                                    </Condation>
                                    <Blankdiv></Blankdiv>
                                
                                </List>

                                <Footer/>

                        </Main>
                </div>
        
        );
    }
}

export default Contect;