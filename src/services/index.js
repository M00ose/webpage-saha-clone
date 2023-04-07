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

export const getEntrepreneurs = async () => {
  const query = gql`
    {
      entrepreneurs {
        name
        origin
        coverPhoto {
          url
          height
          width
        }
        description {
          html
        }
        publishedAt
        slug
      }
    }
  `;

  return await graphcms.request(query);
};
export const getEntrepreneur = async (slug) => {
  const query = gql`
    query Entrepreneur($slug: String!) {
      post(where: { slug: $slug }) {
        name
        origin
        coverPhoto {
          url
          height
          width
        }
        slug
        datePublished
        description {
          html
        }
      }
    }
  `;

  return await graphcms.request(query, { slug });
};

export const getEntrepreneurSlugList = async () => {
  const query = gql`
    {
      entrepreneurs {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};
