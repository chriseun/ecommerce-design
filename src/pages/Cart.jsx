import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";


const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : 'transparent'};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts= styled.div`

`

const TopText= styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Summary = styled.div`
  flex: 1;
`

const Product = styled.div`

`
const ProductDetails = styled.div`

`

const PriceDetails = styled.div`

`

const Image = styled.img`

`

const Details = styled.div`

`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`

`

const ProductSize = styled.div`

`

const PriceDetail = styled.div`

`


const Cart = () => {
  return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>
            YOUR CART
          </Title>
          <Top>
            <TopButton>
              CONTINUE SHOPPING
            </TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">
              CHECKOUT NOW
            </TopButton>

          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <Image src=" "/>
                  <Details>
                    <ProductName>
                      <b>Product: </b> 2015 Converse Limited Edition
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> 234235
                    </ProductId>
                    <ProductColor />
                    <ProductSize>
                      <b>Size: </b> Large
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <PriceDetail>
                    price
                  </PriceDetail>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              Summary
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
  );
}

export default Cart;
