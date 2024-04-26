import {
  DashboardContainer,
  DashboardTitle,
  FlexWrap,
  Wrapper,
} from "../styles/styles";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Wrapper>
        <DashboardTitle>Dashboard</DashboardTitle>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard key={item} item={item} />
          ))}
        </FlexWrap>
      </Wrapper>
    </DashboardContainer>
  );
}
