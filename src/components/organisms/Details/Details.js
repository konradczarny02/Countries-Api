import React, { useState } from 'react';
import {
  Wrapper,
  ContentWrapper,
  BorderCountry,
  BorderCountriesWrapper,
  InfoWrapper,
} from 'components/organisms/Details/Details.styles';
import ReturnButton from 'components/atoms/ReturnButton/ReturnButton';
import { Title } from 'components/atoms/Title/Title';
import { useNavigate } from 'react-router-dom';
import DetailsInfo from 'components/molecules/DetailsInfo/DetailsInfo';

const Details = ({ details }) => {
  let navigate = useNavigate();
  const handleReturnToHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <ReturnButton handleReturnToHome={handleReturnToHome} />
        <img src={details.flags.png} />
        <InfoWrapper>
          <DetailsInfo details={details} />
          <BorderCountriesWrapper>
            <Title>Border Countries:</Title>
            {details.borders ? details.borders.map((borderCountry) => <BorderCountry>{borderCountry}</BorderCountry>) : null}
          </BorderCountriesWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Details;
