import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL_NAME } from 'helpers/API';
import Header from 'components/organisms/Header/Header';
import Details from 'components/organisms/Details/Details';
import { Wrapper } from 'views/CountriesDashboard.styles';
import { Wrapper as LoadingWrapper } from 'components/organisms/Details/Details.styles';

const CountryDetails = ({ changeTheme }) => {
  const [countryDetails, setCountryDetails] = useState([]);
  let params = useParams();
  useEffect(() => {
    fetch(API_URL_NAME + params.name + '?fullText=true')
      .then((res) => res.json())
      .then((data) => setCountryDetails(data[0]));
    return () => {
      setCountryDetails([]);
    };
  }, [params.name]);
  return (
    <Wrapper>
      <Header changeTheme={changeTheme} />
      {countryDetails.name ? (
        <Details details={countryDetails} />
      ) : (
        <LoadingWrapper>
          <h2>Loading...</h2>
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};

export default CountryDetails;
