import * as React from "react"
import styled from "styled-components";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Post = styled.article`
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

const Image = styled.div`
    flex: 2;
    img {
      margin-bottom: 0;
    }
`;

const Content = styled.section`
    margin: auto;
`;

const PostContent = styled.div`
    flex: 1;
    background: #fff;
    width: 100%;
    margin: 0 auto;
    h2 a {
    color: #000;
    }
    figcaption {
      font-size: .9em;
      color: #555;
    }
`;

const PostTitle = styled.h2`
    font-size: ${(props) => props.theme.h1};
    margin-bottom: .1em;   
`

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

interface IIndexProps {
    data: {
        allMarkdownRemark: any;
    }
}

export default (props: IIndexProps) => (
    <Layout>
        <SEO title="Index" description="This is a description" />
        <Content>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
                <Post key={node.id}>
                    <PostContent>
                        <PostTitle>
                            {node.frontmatter.title}
                        </PostTitle>
                        <PostInfo>
                            <PostDate>{node.frontmatter.date}</PostDate>
                            <PostAuthor>{node.frontmatter.author}</PostAuthor>
                        </PostInfo>
                        <section dangerouslySetInnerHTML={{ __html: node.html }}></section>
                    </PostContent>
                    { node.frontmatter.image ?
                      <Image>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid}  />
                      </Image>
                      : null }
                </Post>
            ))}
        </Content>
    </Layout>
);

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        author
                        date(formatString: "Y-MM-DD")
                    }
                    fields {
                        slug
                    } 
                    html
                }
            }
        }
    }
`
