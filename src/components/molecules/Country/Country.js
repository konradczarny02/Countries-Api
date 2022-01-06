import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, Description } from 'components/molecules/Country/Country.styles';

const Country = ({ countryData }) => {
  return (
    <Wrapper key={countryData.name.common}>
      {console.log(countryData)}
      <img src={countryData.flags.png} />
      <Description>
        <Title>{countryData.name.common}</Title>
        <p>
          Population: <span>{countryData.population}</span>
        </p>
        <p>
          Region: <span>{countryData.region}</span>
        </p>
        <p>
          Capital: <span>{countryData.capital}</span>
        </p>
      </Description>
    </Wrapper>
  );
};

export default Country;
