/* eslint-disable react/prop-types */
import {
  CountCard,
  CountDesc,
  CountIcon,
  CountLeft,
  CountSpan,
  CountTitle,
  CountUnit,
  CountValue,
} from "../../styles/styles";

export default function CountsCard({ item }) {
  return (
    <CountCard>
      <CountLeft>
        <CountTitle>{item.name}</CountTitle>
        <CountValue>
          1200
          <CountUnit>{item.unit}</CountUnit>
          <CountSpan positive>(+10%)</CountSpan>
        </CountValue>
        <CountDesc>{item.desc}</CountDesc>
      </CountLeft>
      <CountIcon color={item.color} bg={item.lightColor}>
        {item.icon}
      </CountIcon>
    </CountCard>
  );
}
