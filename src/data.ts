export const singleMemberPlans = [
  { age: '18–64', R5000: 'R39', R10000: 'R67', R15000: 'R91', R20000: 'R114', R30000: 'R157' },
  { age: '65–74', R5000: 'R83', R10000: 'R91', R15000: 'R122', R20000: 'R158', R30000: 'R221' },
  { age: '75–84', R5000: '-', R10000: 'R97', R15000: 'R132', R20000: 'R171', R30000: 'R240' },
  { age: '85+', R5000: 'R230', R10000: 'R448', R15000: 'R668', R20000: 'R886', R30000: 'R1325' },
];

export const memberAndChildrenPlans = [
  { age: '18–64', R5000: 'R42', R10000: 'R70', R15000: 'R97', R20000: 'R126', R30000: 'R185' },
  { age: '65–74', R5000: 'R83', R10000: 'R163', R15000: 'R226', R20000: 'R289', R30000: 'R441' },
  { age: '75–84', R5000: 'R122', R10000: 'R234', R15000: 'R346', R20000: 'R459', R30000: 'R683' },
];

export const memberAndSpousePlans = [
  { age: '18–64', R5000: 'R51', R10000: 'R90', R15000: 'R130', R20000: 'R171', R30000: 'R251' },
  { age: '65–74', R5000: 'R140', R10000: 'R269', R15000: 'R399', R20000: 'R529', R30000: 'R788' },
  { age: '75–84', R5000: 'R234', R10000: 'R459', R15000: 'R683', R20000: 'R909', R30000: 'R1358' },
];

export const familyPlans = [
  { age: '18–64', R5000: 'R58', R10000: 'R104', R15000: 'R151', R20000: 'R198', R30000: 'R291' },
  { age: '65–74', R5000: '-', R10000: 'R122', R15000: 'R174', R20000: 'R223', R30000: 'R322' },
  { age: '75–84', R5000: '-', R10000: 'R132', R15000: 'R188', R20000: 'R242', R30000: 'R350' },
];

export const extendedFamilyPlans = {
  memberPlus5: [
    { age: '18–64', premium: 'R577' },
    { age: '65–74', premium: 'R718' },
    { age: '75–84', premium: 'R760' },
  ],
  memberPlus7: [
    { age: '18–64', premium: 'R643' },
    { age: '65–74', premium: 'R760' },
    { age: '75–84', premium: 'R849' },
  ],
  memberPlus9: [
    { age: '18–64', premium: 'R703' },
    { age: '65–74', premium: 'R849' },
    { age: '75–84', premium: 'R948' },
  ],
  memberPlus13: [
    { age: '18–64', premium: 'R1210' },
    { age: '65–74', premium: 'R1469' },
    { age: '75–84', premium: 'R1599' },
  ]
};

export const childBenefits = [
  { age: 'Birth to 11 months', percentage: '12.5%' },
  { age: '1 to 5 years', percentage: '25%' },
  { age: '6 to 13 years', percentage: '50%' },
  { age: '14 to 21 years', percentage: '100%' },
];
