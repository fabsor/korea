import styled from "styled-components";

export const PostDate = styled.time`
    font-size: .8em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.accent};
`;
