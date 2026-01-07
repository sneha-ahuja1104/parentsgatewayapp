export const mockSignup = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        parentId: 1,
        ...data,
      });
    }, 1000);
  });
};

export const mockLogin = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        parent: {
          id: 1,
          name: "Lokesh",
          email,
          childName: "Sneha",
          class: "Grade 3",
        },
      });
    }, 1000);
  });
};
