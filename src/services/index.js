import { gql, GraphQLClient } from "graphql-request";

require("dotenv").config();

const graphqlAPI = process.env.GRAPHQL_API_KEY;
const graphcms = new GraphQLClient(graphqlAPI);

export const getPosts = async () => {
  const query = gql`
    {
      posts {
        id
        title
        datePublished
        slug
        content {
          html
        }
      }
    }
  `;

  return await graphcms.request(query);
};

export const getPost = async (slug) => {
  const query = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        datePublished
        content {
          html
        }
      }
    }
  `;

  return await graphcms.request(query, { slug });
};

export const getSlugList = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};
