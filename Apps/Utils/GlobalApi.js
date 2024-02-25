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
// 2,13
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

const getBusiness = async () => {
  const query = gql`
    query getBusiness {
      businesses {
        id
        name
        email
        contactPerson
        address
        about
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (category) => {
  const query =
    gql`
    query getBusiness {
      businesses(where: { category: { name: "` +
    category +
    `" } }) {
        id
        name
        email
        contactPerson
        address
        about
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query, { category });
  return result;
};

export default {
  getSlider,
  getCategories,
  getBusiness,
  getBusinessById,
};
