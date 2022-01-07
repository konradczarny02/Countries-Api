import React, { useState } from 'react';
import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
  BorderCountry,
  InfoParagraph,
  BorderCountriesWrapper,
} from 'components/organisms/Details/Details.styles';
import ReturnButton from 'components/atoms/ReturnButton/ReturnButton';
import { Title } from 'components/atoms/Title/Title';
import { useNavigate } from 'react-router-dom';

const Details = ({ details }) => {
  let navigate = useNavigate();
  const handleReturnToHome = () => {
    navigate('/');
  };
  {
    console.log(details);
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <ReturnButton handleReturnToHome={handleReturnToHome} />
        <img src={details.flags.png} />
        <Title style={{ fontSize: '22px' }}>{details.name.common}</Title>
        <InfoParagraph>
          Population: <span>{details.population}</span>
        </InfoParagraph>
        <InfoParagraph>
          Region: <span>{details.region}</span>
        </InfoParagraph>
        <InfoParagraph>
          Sub Region: <span>{details.subregion}</span>
        </InfoParagraph>
        <InfoParagraph>
          Capital: <span>{details.capital}</span>
        </InfoParagraph>
        <br />
        <InfoParagraph>
          Top Level Domain: <span>{details.tld.map((domain) => domain)}</span>
        </InfoParagraph>
        <InfoParagraph>
          Currencies: <span>{details.name.common}</span>
        </InfoParagraph>
        <InfoParagraph>
          Languages <span>{details.name.common}</span>
        </InfoParagraph>
        <br />
        <Title>Border Countries:</Title>
        <BorderCountriesWrapper>
          {details.borders ? details.borders.map((borderCountry) => <BorderCountry>{borderCountry}</BorderCountry>) : null}
        </BorderCountriesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Details;
