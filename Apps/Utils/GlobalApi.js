import {gql, request} from "graphql-request";

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt0z8rzl125207we3kvpyrrs/master";


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

//3.56

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
    const query = gql`
    query getBusiness {
      businesses(where: { category: { name: "` + category + `" } }) {
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
    const result = await request(MASTER_URL, query, {category});
    return result;
};

const createBooking = async (data) => {
  const mutationQuery = gql`mutation createBooking {
  createBooking(
    data: {bookingStatus: Orderd,
     businesses: {connect: {id: "`+data.businessId+`"}},
     date: "`+data.date+`",
     time: "`+data.time+`",
     userEmail: "`+data.userEmail+`",
     userName: "`+data.userName+`",}
  ) {
    id
  }
  publishManyBookings
}`;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const getUserBooking=async(userEmail)=>{
    const query=gql`query GetUserBooking {
  bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
    time
    userEmail
    userName
    bookingStatus
    date
    id
    businesses {
      id
      images {
        url
      }
      name
      address
      contactPerson
      email
      about
    }
  }
}`;
    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getSlider, getCategories, getBusiness, getBusinessById, createBooking,getUserBooking
};
