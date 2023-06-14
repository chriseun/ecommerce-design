import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


import { mobileLarge } from "../responsive"

const Container = styled.div`

`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  margin: 20px;
  ${mobileLarge({ width: "0 20px", display: "flex", flexDirection: "column" })}
`

const FilterText =styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobileLarge({ marginRight: 0 })}
`

//styled.select is dropdown option
const Select =styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobileLarge({ margin: "10px 0" })}
`
const Option =styled.option`

`


const ProductList = () => {
  return (
      <Container>
        <Announcement />
        <Navbar />
        <Title>

        </Title>
        <FilterContainer>
          <Filter>
            <FilterText>
              Filter Products:
          </FilterText>
            <Select>
              {/* disabled is cannot be selected, selected is default when loading page */}
              <Option disabled selected>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>Size</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>
              Sort Products:
            </FilterText>
              <Select>
              <Option selected>Newest</Option>
              <Option>Price (Lowest)</Option>
              <Option>Price (Highest)</Option>
              </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
  );
}

export default ProductList;
