import * as React from "react"
import styled from "styled-components";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Post = styled.article`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06),1px 3px 8px rgba(39,44,49,.03);
    transition: all .5s ease;    
    border-radius: 7px;
    ${(props) => props.theme.media.small`
      max-height: 400px;
      flex-direction: row;
    `};
    ${(props) => props.theme.media.large`
      margin-left: auto;
      margin-right: auto;
    `}

`;

const Image = styled.div`
    margin-right: 30px;
    flex: 2;
    img {
      margin-bottom: 0;
    }
`;

const Content = styled.section`
    max-width: ${(props) => props.theme.maxWidth}px;
    margin: auto;
`;

const PostContent = styled.div`
    flex: 1;
    padding: 10px;
    h2 a {
      color: #000;
    }
`;

const PostTitle = styled.h2`
  margin-bottom: .1em;   
`

const PostDate = styled.time`
  font-size: .8em;
  color: ${(props) => props.theme.colors.accent};
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
        { node.frontmatter.image ?
          <Image>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid}  />
          </Image>
        : null }
            <PostContent>
                <PostTitle>
                    <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                    </Link>
                </PostTitle>
                <PostDate>{node.frontmatter.date}</PostDate>
                <p>{node.excerpt}</p>
            </PostContent>
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
                        date(formatString: "Y-MM-DD")
                        image {
                            childImageSharp {
                                fluid(maxHeight: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }                    
                    }
                    fields {
                        slug
                    }               
                    excerpt
                }
            }
        }
    }
`
