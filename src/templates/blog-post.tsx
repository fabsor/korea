import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const PostTitle = styled.h1`
  margin-bottom: 0.1em;
`;

const ArticleHeader = styled.header`
    margin-top: 20px;
    text-align: center;
    padding: 1rem;
    ${(props) => props.theme.media.medium`
padding: 0;
margin-top: 60px;
`}
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: ${(props) => props.theme.maxWidth}px;
    margin: 0 auto;
    margin-bottom: 40px;
    background: #fff;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06),1px 3px 8px rgba(39,44,49,.03);
    transition: all .5s ease;    
    border-radius: 7px;
`;

const PostInfo = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const PostDate = styled.time`
    font-size: .8em;
    color: ${(props) => props.theme.colors.accent};
    margin-right: 10px;
`;

const PostAuthor = styled.div`
    font-size: .8em;
    color: #444;
    font-weight: bold;
`;


interface IProps {
    data: {
        markdownRemark: any;
    }
}

export default (props: IProps) => {
    const post = props.data.markdownRemark;
    return (
        <Layout>
            <article>
                <Main>
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    <PostInfo>
                        <PostDate>{post.frontmatter.date}</PostDate>
                        <PostAuthor>{post.frontmatter.author}</PostAuthor>
                    </PostInfo>
                    <section dangerouslySetInnerHTML={{ __html: post.html }}></section>                
                </Main>
            </article>            
        </Layout>
    )
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt
            frontmatter {
                title
                author
                date(formatString: "Y-MM-DD")
            }
        }
    }
`;
