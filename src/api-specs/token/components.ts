export const components = {
  schemas: {
    tokenComponent: {
      type: 'object',
      title: 'Checkout Request',
      description: 'Sample Checkout Request',
      properties: {
        VendorCode: { type: 'string' },
        PartnerCode: { type: 'string' },
      },
    },
  },
};
