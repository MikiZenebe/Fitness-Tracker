import {
  DashboardContainer,
  DashboardTitle,
  FlexWrap,
  Wrapper,
} from "../styles/styles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Wrapper>
        <DashboardTitle>Dashboard</DashboardTitle>
        <FlexWrap>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </FlexWrap>
      </Wrapper>
    </DashboardContainer>
  );
}
