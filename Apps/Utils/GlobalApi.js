import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clt0z8rzl125207we3kvpyrrs/master";

const getSlider = async () => {
  const query = gql`
    query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategories,
};
