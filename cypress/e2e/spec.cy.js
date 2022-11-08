const apiUrl = "http://localhost:34567";

const token = "";

const productObject = {
  name: "iPhone 10",
  slug: "iphone-10",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  ],
  brand: "Apple",
  category: "smartphones",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  stock: 94,
  reviews: [
    {
      name: "Gayle Krajcik",
      comment:
        "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
      rating: 1,
      _id: "6331a4d20682855e6eb1bbac",
      createdAt: "2022-09-26T13:10:42.761Z",
      updatedAt: "2022-09-26T13:10:42.761Z",
    },
  ],
  discountPercentage: 12.96,
};

const updateProductObject = {
  name: "iPhone 11",
  slug: "iphone-11",
  brand: "Apple",
  category: "smartphones",
  description: "An apple mobile which is nothing like apple",
};

const signinObject = {
  email: "aaa@example.com",
  password: "123456",
};

const signupObject = {
  email: "eee@example.com",
  password: "b234asd",
  name: "aaa",
  isAdmin: false,
};

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});

describe("My First Test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});

describe("API Testing Demo", () => {
  it("Get all products", () => {
    cy.request("GET", `${apiUrl}/api/products`);
  });
});

describe("API Testing Demo", () => {
  it("Get all products categories", () => {
    cy.request("GET", `${apiUrl}/api/products/categories`);
  });
});

describe("API Testing Demo", () => {
  it("Get one product with Id", () => {
    cy.request("GET", `${apiUrl}/api/products/63698bfaf673db3451ec2a4f`);
  });
});

describe("API Testing Demo", () => {
  it("Search product", () => {
    cy.request(
      "GET",
      `${apiUrl}/api/products/search?category=all&query=all&price=all&rating=all&order=newest&page=29`
    );
  });
});

describe("API Testing Demo", () => {
  it("Get one product with name", () => {
    cy.request("GET", `${apiUrl}/api/products/slug/macbook-pro`);
  });
});

describe("API Testing Demo", () => {
  it("Get one product with name", () => {
    cy.request("GET", `${apiUrl}/api/products/slug/macbook-pro`);
  });
});

describe("API Testing Demo", () => {
  it("test signup", () => {
    cy.request("POST", `${apiUrl}/api/users/signup`, {
      email: "aaa@example.com",
      password: "123456",
      name: "aaa",
      isAdmin: false,
    })
      .its("body")
      .as("currentUser");
  });
});

describe("API Testing Demo", () => {
  it("test signin", () => {
    cy.request("POST", `${apiUrl}/api/users/signin`, {
      email: "aaa@example.com",
      password: "123456",
    })
      .its("body")
      .as("currentUser");
  });
});

describe("API Testing Demo", () => {
  it("test update product", () => {
    cy.request("PUT", `${apiUrl}/api/products/63698bfaf673db3451ec2a36`, {
      name: "iPhone 11",
      slug: "iphone-11",
      brand: "Apple",
      category: "smartphones",
      description: "An apple mobile which is nothing like apple",
    })
      .its("body")
      .as("currentUser");
  });
});
