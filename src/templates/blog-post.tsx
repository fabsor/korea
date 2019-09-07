import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image"
import { PostDate } from "../components/base";
import styled from "styled-components";

const PostTitle = styled.h1``;

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
    max-width: ${(props) => props.theme.maxWidth + 96}px;
    background: ${(props) => props.theme.contentBackground};
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 1rem;
    p:first-of-type {
      font-size: 1.3em;
      line-height: 1.3em;
    }
    ${(props) => props.theme.media.medium`
      margin: 0 auto;
      margin-top: -100px;
      padding: 2rem 6rem;
   `}
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
                <ArticleHeader>
                <PostDate>{post.frontmatter.date}</PostDate>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                </ArticleHeader>
                { post.frontmatter.image ?
                <>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <Main dangerouslySetInnerHTML={{ __html: post.html }} />
                </>
                : null }
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
