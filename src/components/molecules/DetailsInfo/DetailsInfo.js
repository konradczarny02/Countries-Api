import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { InfoParagraph } from 'components/organisms/Details/Details.styles';
import { Wrapper, GeoInfo, FormalInfo } from 'components/molecules/DetailsInfo/DetailsInfo.styles';

const DetailsInfo = ({ details }) => {
  return (
    <Wrapper>
      <Title style={{ fontSize: '22px' }}>{details.name.common}</Title>
      <GeoInfo>
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
      </GeoInfo>
      <FormalInfo>
        <InfoParagraph>
          Top Level Domain: <span>{details.tld.map((domain) => domain)}</span>
        </InfoParagraph>
        <InfoParagraph>
          Currencies: <span>{details.name.common}</span>
        </InfoParagraph>
        <InfoParagraph>
          Languages <span>{details.name.common}</span>
        </InfoParagraph>
      </FormalInfo>
    </Wrapper>
  );
};

export default DetailsInfo;
