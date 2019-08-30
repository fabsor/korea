import { Link } from "gatsby"
import styled from "styled-components";
import * as React from "react"

const HeaderWrapper = styled.header`
    background: ${props => props.theme.colors.primary};
    margin-bottom: 1.1rem;
    > div {
        margin: 0 auto;
        maxWidth: 960;
        padding: 1.15rem 1rem;
    }
`;

interface IHeaderProps {
    siteTitle?: string;
}
const Header = (props: IHeaderProps) => (
    <HeaderWrapper>
        <div
            style={{
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {props.siteTitle}
                </Link>
            </h1>
        </div>
    </HeaderWrapper>
)

export default Header
