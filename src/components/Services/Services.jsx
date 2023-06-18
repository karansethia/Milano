import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce transaction costs on national and international
            payments saving more for you and your business
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            We help reduce transaction costs on national and international
            payments saving more for you and your business
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Instant Transactions</ServicesH2>
          <ServicesP>
            We help reduce transaction costs on national and international
            payments saving more for you and your business
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
