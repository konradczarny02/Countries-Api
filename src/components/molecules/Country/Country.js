import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, Description } from 'components/molecules/Country/Country.styles';

const Country = ({ countryData: { name, flags, population, region, capital } }) => {
  let navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate('details/' + name.common)}>
      <img src={flags.png} alt={name.common + ' flag'} />
      <Description>
        <Title>{name.common}</Title>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </Description>
    </Wrapper>
  );
};

export default Country;
