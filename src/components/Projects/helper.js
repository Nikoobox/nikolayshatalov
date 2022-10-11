const DATA = [
  {
    id: "635f42f8-fd32-4105-97ba-3f0570a33c20",
    externalId: null,
    integrationType: "NA",
    subsidiaryId: "a5a268c9-1ac8-4d86-8058-25d8d8c8325c",
    subsidiaryName: null,
    carrierId: "1300eda7-3051-47cc-be60-4c5cb6802af2",
    commonPlanDetails: {
      carrierWebsite: "test.com",
      isGeneralAgent: false,
      generalAgentName: "",
      carrierPlanName: "some name",
      displayPlanName: "",
      policyNumber: "",
      description: "",
      phoneNumber1: "",
      phoneNumber1Label: "",
      phoneNumber2: "",
      phoneNumber2Label: "",
      phoneNumber3: "",
      phoneNumber3Label: "",
      phoneNumber4: "",
      phoneNumber4Label: "",
      phoneNumber5: "",
      phoneNumber5Label: "",
      planNetworkExternalMaps: [],
      effectiveDate: "2022-06-08T00:00:00",
      endDate: null,
    },
    carrier: {
      id: "1300eda7-3051-47cc-be60-4c5cb6802af2",
      name: "Cigna",
      carrierNetworkName: "Open Access Plus",
    },
  },
  {
    id: "80f90635-9e8e-4783-be60-60e80eeb7aac",
    externalId: null,
    integrationType: "NA",
    subsidiaryId: "a5a268c9-1ac8-4d86-8058-25d8d8c8325c",
    subsidiaryName: null,
    carrierId: "1300eda7-3051-47cc-be60-4c5cb6802af2",
    commonPlanDetails: {
      carrierWebsite: "www.cigna.com",
      isGeneralAgent: false,
      generalAgentName: "",
      carrierPlanName: "Basic Term Life",
      displayPlanName: "Basic Term Life",
      policyNumber: "123456",
      description:
        "Below is a summary of the plan features. Please refer to the full plan documents for more details.",
      phoneNumber1: "",
      phoneNumber1Label: "",
      phoneNumber2: "",
      phoneNumber2Label: "",
      phoneNumber3: "",
      phoneNumber3Label: "",
      phoneNumber4: "",
      phoneNumber4Label: "",
      phoneNumber5: "",
      phoneNumber5Label: "",
      planNetworkExternalMaps: [],
      effectiveDate: "2021-01-01T00:00:00",
      endDate: "2021-12-31T00:00:00",
    },
    carrier: {
      id: "1300eda7-3051-47cc-be60-4c5cb6802af2",
      name: "Cigna",
      carrierNetworkName: "Open Access Plus",
    },
  },
];

const helperFunction = () => {
  const flattenHelper = (obj) =>
    Object.keys(obj).reduce(
      (acc, cur) =>
        typeof obj[cur] === "object" && obj[cur]
          ? { ...acc, ...flattenHelper(obj[cur]) }
          : { ...acc, [cur]: obj[cur] },
      {}
    );
  const newData = DATA.map((planData) => flattenHelper(planData));
  return newData;
};

export default helperFunction;
