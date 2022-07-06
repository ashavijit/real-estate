import React from 'react';
import styled from 'styled-components';

const SectionC = styled.div`
  padding:120px 0;
  @media(min-width:768px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    img{
      height:100%;
    }
  }
  
  .left{
    background-color: #00000cfa;
    padding:10px;
    
    h4{
      color: #126894;
      margin:0px;
      font-size: 25px;
    }
    .about{
      @media(min-width:768px){
        padding: 20px;
        width: 360px;
       margin:auto;
      }
      @media(min-width:1440px){
       margin:auto;
      }
    }

  }
    }
    p{
      color:#b7c2f1;
    };
  }
  .right{
    img{
      width:100%;
    }
  @media(min-width:768px){
    display:grid;
    grid-template-columns:repeat(2,auto);
  }


  
`;


const HomeSectionC=()=>(
  <SectionC>
    <div className="left">
      <div className="about">
        <h4>Why Choose Us</h4>
        <p>
        We are convinced that delivering a completely 
        satisfying home sellingand buying experience 
        requires proactiveness and an ability to maintain 
        solid communications throughout the transaction process.
        Our knowledge, experience, expertise and resources set us 
        apart allowing us to achieve results that dont just meet, 
        but exceed our clients expectations. It is our commitment to
         provide you with exceptional service from a team of highly skilled,
          uniquely talented individuals with high integrity. 
				</p>
      </div>

      <div className="about">
        <h4>Legal Notice</h4>
        <p>
         We have a verified Licence to Sell and Buy Real Estate in India.
          We are a licensed real estate agent and we are authorized to sell and buy real estate in India.
				</p>
      </div>

      <div className="about">
        <h4>Our Properties</h4>
        <p>
         We have a wide range of properties in the
          market. We have a wide range of properties in the
          across the World. You can Choose as well as you can buy
          as you want.
				</p>
      </div>

    </div>
    <div className="right">
      <img src={require('../../assets/about-img.jpg')} alt="about image"  />
    </div>


  </SectionC>
)

export default HomeSectionC;
