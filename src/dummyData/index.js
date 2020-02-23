

export const finalResult = {
  finalScore: {
    vezels: {
      color: "red",
      result: "100.00",
      advice: { type: "supplement", content: "mucoaid" },
      icons: "heart"
    },
    proteine: {
      color: "orange",
      result: "NaN",
      advice: { type: "food_advice", content: "Eieren, vis, eiwitrijk vlees" },
      icons: "heart"
    },
    lysine: {
      color: "red",
      result: "100.00",
      advice: { type: "supplement", content: "green power" },
      icons: "brain"
    },
    methionine: {
      color: "red",
      result: "100.00",
      advice: { type: "supplement", content: "green power" },
      icons: "heart"
    },
    tryptofaan: {
      color: "red",
      result: "100.00",
      advice: { type: "supplement", content: "L-Tryptophan 500mg" },
      icons: "heart"
    },

    products: [
      {
        companyname: "ssup",
        description: "• Verlicht bij spastisch colon en prikkelbare darm",
        id: 30,
        index: 4,
        name: "Prima Flora Balance",
        pic: "http://redcarrotsdev.be/dev/florabox.jpg",
        price: 33,
        supplement_id: "6",
        updated_at: null,
      },
      {
        id: 42,
        name: "Green Power ",
        description: "\u2022 Bevat alle 8 aminozuren",
        price: 43,
        supplement_id: "4",
        companyname: "ssup",
        index: 16,
        pic: "http://redcarrotsdev.be/dev/greenpowerbox.jpg",
        created_at: null,
        updated_at: null
      },
      {
        id: 41,
        name: "L-Tryptophan 500mg",
        description:
          "\u2022 Combineer met vitamine B booster voor een goede opname",
        price: 27,
        supplement_id: "5",
        companyname: "ssup",
        index: 15,
        pic: "http://redcarrotsdev.be/dev/tryptobox.jpg",
        created_at: null,
        updated_at: null
      },
      {
        id: 30,
        name: "Prima Flora Balance",
        description: "\u2022 Verlicht bij spastisch colon en prikkelbare darm",
        price: 33,
        supplement_id: "6",
        companyname: "ssup",
        index: 4,
        pic: "http://redcarrotsdev.be/dev/florabox.jpg",
        created_at: null,
        updated_at: null
      },
      null
    ]
  },
  medicationTaken: {
    "1": {
      brand_name: "rifinah",
      advice: "Vitamine B3, B6, D",
      supplement: ["D forte", "B Booster"],
      product: [
        {
          id: 32,
          name: "D Forte",
          description: "\u2022 Ondersteunt het immuunsysteem",
          price: 27,
          supplement_id: "12",
          companyname: "ssup",
          index: 6,
          pic: "http://redcarrotsdev.be/dev/dfortebox.jpg",
          created_at: null,
          updated_at: null
        },
        {
          id: 33,
          name: "B Booster",
          description: "\u2022 Ondersteunt het energieniveau",
          price: 32,
          supplement_id: "13",
          companyname: "ssup",
          index: 7,
          pic: "http://redcarrotsdev.be/dev/boosterbox.jpg",
          created_at: null,
          updated_at: null
        }
      ]
    }
  },
  demographics: {
    age: {years: 1, advice: null, food_advice: null},
    bmi: {index: 34, advice: null, supplement: "Burn Power"}
  },
  lifestyleQuestions: [
    {
      id: 1,
      points: 0,
      supplement: "Vezels",
      lifestyle_advice:
        "IF X14 is 2 or 3: Je hebt aangegeven regelmatig alcohol te drinken. Alcohol drinken heeft een impact op de absorbtie van voedingsstoffen. Voornamelijk vitamine B wordt minder goed opgenomen.",
      question_id: 384,
      result: "none",
      created_at: null,
      updated_at: null,
      name: "Groenten en fruit",
      question: {
        id: 384,
        text: "Hoeveel porties groenten en fruit eet je per dag?",
        question_nr: 606,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 4,
        moreisbetter: 1,
        extra_info: null,
        created_at: "-0001-11-30 00:00:00",
        updated_at: "-0001-11-30 00:00:00",
        lifestyle: 1,
        specific_template: 1,
        index: 1
      },
      score: "0.00"
    },
    {
      id: 2,
      points: 4,
      supplement: "Ferro Forte",
      lifestyle_advice:
        "IF X14 is 2 or 3: Je hebt aangegeven regelmatig alcohol te drinken. Alcohol drinken heeft een impact op de absorbtie van voedingsstoffen. Voornamelijk vitamine B wordt minder goed opgenomen.",
      question_id: 383,
      result: "Ferro Forte",
      created_at: null,
      updated_at: null,
      name: "vlees",
      question: {
        id: 383,
        text: "Hoeveel keer per week staat er vlees op het menu?",
        question_nr: 605,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 4,
        moreisbetter: 1,
        extra_info: null,
        created_at: "-0001-11-30 00:00:00",
        updated_at: "-0001-11-30 00:00:00",
        lifestyle: 1,
        specific_template: 1
      },
      score: "100.00"
    },
    {
      id: 3,
      points: 3,
      supplement: "ohmega",
      lifestyle_advice:
        "IF X14 is 2 or 3: Je hebt aangegeven regelmatig alcohol te drinken. Alcohol drinken heeft een impact op de absorbtie van voedingsstoffen. Voornamelijk vitamine B wordt minder goed opgenomen.",
      question_id: 382,
      result: "ohmega",
      created_at: null,
      updated_at: null,
      name: "vis",
      question: {
        id: 382,
        text: "Hoeveel keer per week eet je vis?",
        question_nr: 604,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 4,
        moreisbetter: 1,
        extra_info: null,
        created_at: "-0001-11-30 00:00:00",
        updated_at: "-0001-11-30 00:00:00",
        lifestyle: 1,
        specific_template: 1,
        index: 11
      },
      score: "75.00"
    },
    {
      id: 4,
      points: 4,
      supplement: "Vit C",
      lifestyle_advice:"IF X14 is 2 or 3: Je hebt aangegeven regelmatig alcohol te drinken. Alcohol drinken heeft een impact op de absorbtie van voedingsstoffen. Voornamelijk vitamine B wordt minder goed opgenomen.",
      question_id: 712,
      result: "Vit C",
      created_at: null,
      updated_at: null,
      name: "roken",
      question: {
        id: 712,
        text: "Rook je?",
        question_nr: 632,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 2,
        questiontypes_name: "boolean",
        points: 0,
        moreisbetter: 0,
        extra_info: null,
        created_at: "-0001-11-30 00:00:00",
        updated_at: "-0001-11-30 00:00:00",
        lifestyle: 1,
        specific_template: 1,
        index: 14
      },
      score: "100.00"
    },
    {
      id: 5,
      points: 4,
      supplement: "B Booster",
      lifestyle_advice:"IF X14 is 2 or 3: Je hebt aangegeven regelmatig alcohol te drinken. Alcohol drinken heeft een impact op de absorbtie van voedingsstoffen. Voornamelijk vitamine B wordt minder goed opgenomen.",
      question_id: 381,
      result: "B Booster",
      created_at: null,
      updated_at: null,
      name: "alcohol",
      question: {
        id: 381,
        text: "Hoeveel alcohol drink je per week (eerlijk zijn!)?",
        question_nr: 603,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 0,
        moreisbetter: 0,
        extra_info: null,
        created_at: "-0001-11-30 00:00:00",
        updated_at: "-0001-11-30 00:00:00",
        lifestyle: 1,
        specific_template: 1,
        index: 19
      },
      score: "100.00",

      product:{
        companyname: "ssup",
        created_at: null,
        description: "• Met spirulina.",
        id: 31,
        index: 5,
        name: "MucoAid",
        pic: "http://redcarrotsdev.be/dev/mucobox.jpg",
        price: 40,
        supplement_id: "2",
        updated_at: null,
      }

    },
    {
      id: 7,
      points: 3,
      supplement: null,
      lifestyle_advice: null,
      question_id: 786,
      result: null,
      created_at: null,
      updated_at: null,
      name: "sport",
      question: {
        id: 786,
        text: "Hoe vaak per week doe je aan sport",
        question_nr: 768,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 4,
        moreisbetter: 1,
        extra_info: null,
        created_at: null,
        updated_at: null,
        lifestyle: 1,
        specific_template: 1,
        index: 10
      },
      score: "75.00"
    },
    {
      id: 8,
      points: 0,
      supplement: null,
      lifestyle_advice: null,
      question_id: 790,
      result: "none",
      created_at: null,
      updated_at: null,
      name: "water",
      question: {
        id: 790,
        text: "Hoeveel glazen water drink je per dag",
        question_nr: 801,
        persistable: 0,
        condition_sex: "none",
        condition_bmi: 0,
        questiontypes_id: 1,
        questiontypes_name: "quantity",
        points: 4,
        moreisbetter: 1,
        extra_info: null,
        created_at: null,
        updated_at: null,
        lifestyle: 1,
        specific_template: 1,
        index: 5
      },
      score: "0.00"
    }
  ],
  env: "dev"
};
