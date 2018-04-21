import React, { Component } from 'react';
import styled from 'styled-components';
import {Link }from 'react-router-dom';
//import Globe from 'react-icons/lib/fa/paper-plane-o';
import FaAlignJustify from 'react-icons/lib/md/dehaze';
import Close from 'react-icons/lib/md/close';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

import {Wrapper, Menu, Logo,StyledLink,DropDown, DropDownSpan,  NavDiv, ForMobile, Div, Span1, HeaderMob, LoginButton} from './header.style';




class Header extends Component{
  constructor(){ 
    super();
        this.state={
              Show:false, Hide:false, NewDiv:false
        }
  };
  render(){
	return(
    <div> 
		<Wrapper>
    <Link to="/"><Logo><img src={require('../NewFront/image/iconlogo.png')} style={{height:'120px', width:'200px',marginTop:'-10px', marginBottom:'-10px'}}/></Logo></Link>
			<Menu>
        <StyledLink to="/Features">Features</StyledLink>
	      <StyledLink to="/Priceing" >Pricing</StyledLink>
        <StyledLink to="/FAQ" >FAQ's</StyledLink>
        <StyledLink to="/Login">LOGIN</StyledLink>
				<StyledLink to="/SignUp" borderBack>SIGN UP</StyledLink>

			</Menu>
		</Wrapper>

            <ForMobile>
              <HeaderMob>
              <Link to="/">  <img src={require('./image/iconlogo.png')} style={{height:'130%', paddingLeft:'1em', width:'40%'}}/></Link>

              {this.state.Show?"":
                  <button onClick={()=>{this.setState({Show:!this.state.Show, Hide:!this.state.Hide, NewDiv:true })}} style={{border:'none', background:'#008000', color:'#ffffff', fontSize:'34px', paddingRight:'.6em'}}><FaAlignJustify/></button>
              }

              {!this.state.Hide?"":
                  <button onClick={()=>{this.setState({Show:!this.state.Show, Hide:!this.state.Hide, NewDiv:false })}} style={{border:'none', background:'#008000', color:'#ffffff', fontSize:'34px', paddingRight:'.6em'}}><Close/></button>
              }

              </HeaderMob>

              {!this.state.NewDiv?"":
              <NavDiv>
                <Div direction>

                <Span1 onClick={()=>this.setState({DropDown:!this.state.DropDown, HomeDown1:!this.state.HomeDown1, HomeDown:!this.state.HomeDown})}>Features  
                                          {this.state.HomeDown1?"":
                                            <span  style={{paddingLeft:'.5em', paddingTop:'.6em'}}><FaAngleDown/></span>
                                            }
                                            
                                            {!this.state.HomeDown?"":
                                            <span  style={{paddingLeft:'.5em', paddingTop:'.6em'}}><FaAngleUp/></span>
                                            }  </Span1>
                        {!this.state.DropDown?"":
                        <DropDown>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}  top><Link to="/Features" style={{textDecoration:'none', color:'#fff'}} >Overview</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/QuestionBank" style={{textDecoration:'none', color:'#fff'}} >Question Bank</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/CandidateManagement" style={{textDecoration:'none', color:'#fff'}} >Candidate Management</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/TestManagement" style={{textDecoration:'none', color:'#fff'}} >Test Management</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/ReportManagement" style={{textDecoration:'none', color:'#fff'}} >Report Management</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/MobileApp" style={{textDecoration:'none', color:'#fff'}} >Mobile App</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/WhiteLabeled" style={{textDecoration:'none', color:'#fff'}} >White Labeled</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/SMSIntegration" style={{textDecoration:'none', color:'#fff'}} >SMS Integration</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})}><Link to="/Features/Security" style={{textDecoration:'none', color:'#fff'}} >Security</Link></DropDownSpan>
                                  <DropDownSpan onClick={()=>this.setState({NewDiv:false})} paddingBottom><Link to="/Features/Support" style={{textDecoration:'none', color:'#fff'}} >Support</Link></DropDownSpan>
                        </DropDown>
                        }
                        

                </Div>
                
                <Div><Link to="/Priceing" style={{textDecoration:'none',paddingTop:'1em', paddingBottom:'1em'}} ><Span1>Pricing</Span1></Link></Div>
                <Div><Link to="/Faq" style={{textDecoration:'none', paddingTop:'1em', paddingBottom:'1em'}} ><Span1>FAQ's</Span1></Link></Div>
                <Div height><LoginButton><Link to="/Login" style={{textDecoration:'none', color:'#fff'}} >LOGIN</Link></LoginButton></Div>
                <Div height><LoginButton><Link to="/SignUp" style={{textDecoration:'none', color:'#fff'}} >SIGN UP</Link></LoginButton></Div>
              </NavDiv>
              }


        </ForMobile>

</div>
    
		);
  }
}
export default Header;