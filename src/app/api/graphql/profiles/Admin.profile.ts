import mercury from "@mercury-js/core";

const rules = [
  {
    modelName: "User",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "Account",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },

    fieldLevelAccess: true,
    fields: {
      name: {
        read: false,
      },
    },
  },
  {
    modelName: "Todo",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    }
  }
];

export const AdminProfile = mercury.access.createProfile("Admin", rules);
