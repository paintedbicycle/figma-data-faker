import faker from "faker";

const data = {
  address: {
    name: "Postal addresses",
    data: [
      {
        name: "US Zip Code",
        identifier: "address.zipCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.zipCode();
        },
      },
      {
        name: "City Name",
        identifier: "address.city",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.city();
        },
      },
      {
        name: "City Prefix",
        identifier: "address.cityPrefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.cityPrefix();
        },
      },
      {
        name: "City Suffix",
        identifier: "address.citySuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.citySuffix();
        },
      },
      {
        name: "Street Name",
        identifier: "address.streetName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetName();
        },
      },
      {
        name: "Street Address",
        identifier: "address.streetAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetAddress();
        },
      },
      {
        name: "Street Suffix",
        identifier: "address.streetSuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetSuffix();
        },
      },
      {
        name: "Street Prefix",
        identifier: "address.streetPrefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetPrefix();
        },
      },
      {
        name: "Secondary Address Line",
        identifier: "address.secondaryAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.secondaryAddress();
        },
      },
      {
        name: "County",
        identifier: "address.county",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.county();
        },
      },
      {
        name: "Country",
        identifier: "address.country",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.country();
        },
      },
      {
        name: "Country Code",
        identifier: "address.countryCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.countryCode();
        },
      },
      {
        name: "State",
        identifier: "address.state",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.state();
        },
      },
      {
        name: "State Abbreviation",
        identifier: "address.stateAbbr",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.stateAbbr();
        },
      },
      {
        name: "Latitude",
        identifier: "address.latitude",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.latitude();
        },
      },
      {
        name: "Longitude",
        identifier: "address.longitude",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.longitude();
        },
      },
      {
        name: "Direction",
        identifier: "address.direction",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.direction();
        },
      },
      {
        name: "Cardinal direction",
        identifier: "address.cardinalDirection",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.cardinalDirection();
        },
      },
      {
        name: "Ordinal direction",
        identifier: "address.ordinalDirection",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.ordinalDirection();
        },
      },
      // {
      //   name: "GPS coordinate",
      //   identifier: "nearbyGPSCoordinate",
      // handler: "setLayerNameAndData",
      // script: "index.js",
      //   replace: function () {
      //     return faker.address.nearbyGPSCoordinate();
      //   },
      // },
      {
        name: "Time zone",
        identifier: "address.timeZone",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.timeZone();
        },
      },
    ],
  },

  commerce: {
    name: "Commerce",
    data: [
      {
        name: "(Brand) Color",
        identifier: "commerce.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.color();
        },
      },
      {
        name: "Business Department",
        identifier: "commerce.department",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.department();
        },
      },
      {
        name: "Product Name",
        identifier: "commerce.productName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productName();
        },
      },
      {
        name: "Price",
        identifier: "commerce.price",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.price();
        },
      },
      {
        name: "Product Adjective",
        identifier: "commerce.productAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productAdjective();
        },
      },
      {
        name: "Product Material",
        identifier: "commerce.productMaterial",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productMaterial();
        },
      },
      {
        name: "Product",
        identifier: "commerce.product",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.product();
        },
      },
      {
        name: "Product Description",
        identifier: "commerce.productDescription",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productDescription();
        },
      },
    ],
  },
  company: {
    name: "Company",
    data: [
      // {
      //   name: "Company Suffixes",
      //   identifier: "company.suffixes",
      //   handler: "setLayerNameAndData",
      //   script: "index.js",
      //   replace: function () {
      //     return faker.company.suffixes();
      //   },
      // },
      {
        name: "Company Name",
        identifier: "company.companyName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.companyName();
        },
      },
      {
        name: "Company Suffix",
        identifier: "company.companySuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.companySuffix();
        },
      },
      {
        name: "Company Catchphrase",
        identifier: "company.catchPhrase",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhrase();
        },
      },
      {
        name: "Company BS Phrase",
        identifier: "company.bs",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bs();
        },
      },
      {
        name: "Catchphrase Adjective",
        identifier: "company.catchPhraseAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseAdjective();
        },
      },
      {
        name: "Catchphrase Descriptor",
        identifier: "company.catchPhraseDescriptor",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseDescriptor();
        },
      },
      {
        name: "Catchphrase Noun",
        identifier: "company.catchPhraseNoun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseNoun();
        },
      },
      {
        name: "BS Adjective",
        identifier: "company.bsAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsAdjective();
        },
      },
      {
        name: "BS Buzzword Verb",
        identifier: "company.bsBuzz",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsBuzz();
        },
      },
      {
        name: "BS Buzzword Noun",
        identifier: "company.bsNoun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsNoun();
        },
      },
    ],
  },
  database: {
    name: "Database",
    data: [
      {
        name: "Database Column Name",
        identifier: "database.column",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.column();
        },
      },
      {
        name: "Database Column Type",
        identifier: "database.type",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.type();
        },
      },
      {
        name: "Database Collation",
        identifier: "database.collation",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.collation();
        },
      },
      {
        name: "Database Engine",
        identifier: "database.engine",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.engine();
        },
      },
    ],
  },
  date: {
    name: "Dates",
    data: [
      {
        name: "Soon Date (Full)",
        identifier: "date.soon",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.soon().toDateString();
        },
      },
      {
        name: "Past Date (Full)",
        identifier: "date.past",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.past().toDateString();
        },
      },
      {
        name: "Future Date (Full)",
        identifier: "date.future",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.future().toDateString();
        },
      },
      {
        name: "Recent Date (Full)",
        identifier: "date.recent",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.recent().toDateString();
        },
      },
      {
        name: "Month",
        identifier: "date.month",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.month();
        },
      },
      {
        name: "Weekday",
        identifier: "date.weekday",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.weekday();
        },
      },
    ],
  },
  finance: {
    name: "Finance",
    data: [
      {
        name: "Account Number",
        identifier: "finance.account",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.account();
        },
      },
      {
        name: "Account Name/Type",
        identifier: "finance.accountName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.accountName();
        },
      },
      {
        name: "Credit Card Number",
        identifier: "finance.mask",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.creditCardNumber();
        },
      },
      {
        name: "Credit Card CVV",
        identifier: "finance.creditCardCVV",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.creditCardCVV();
        },
      },
      // {
      //   name: "Credit Card Last 4",
      //   identifier: "finance.mask",
      //   handler: "setLayerNameAndData",
      //   script: "index.js",
      //   replace: function () {
      //     return faker.finance.mask();
      //   },
      // },
      {
        name: "Purchase Amount / Price",
        identifier: "finance.amount",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.amount();
        },
      },
      {
        name: "Transaction Type",
        identifier: "finance.transactionType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.transactionType();
        },
      },
      {
        name: "Currency Code",
        identifier: "finance.currencyCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencyCode();
        },
      },
      {
        name: "Currency Name",
        identifier: "finance.currencyName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencyName();
        },
      },
      {
        name: "Currency Symbol",
        identifier: "finance.currencySymbol",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencySymbol();
        },
      },
      {
        name: "Bitcoin Address",
        identifier: "finance.bitcoinAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.bitcoinAddress();
        },
      },
      {
        name: "Litecoin Address",
        identifier: "finance.litecoinAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.litecoinAddress();
        },
      },
      {
        name: "Ethereum Address",
        identifier: "finance.ethereumAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.ethereumAddress();
        },
      },
      {
        name: "IBAN Number",
        identifier: "finance.iban",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.iban();
        },
      },
      {
        name: "BIC Code",
        identifier: "finance.bic",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.bic();
        },
      },
    ],
  },

  git: {
    name: "Git",
    data: [
      {
        name: "Git Branch Name",
        identifier: "git.branch",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.branch();
        },
      },
      {
        name: "Git Commit Entry",
        identifier: "git.commitEntry",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitEntry();
        },
      },
      {
        name: "Git Commit Message",
        identifier: "git.commitMessage",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitMessage();
        },
      },
      {
        name: "Git Commit SHA",
        identifier: "git.commitSha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitSha();
        },
      },
      {
        name: "Git Short SHA",
        identifier: "git.shortSha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.shortSha();
        },
      },
    ]
  },

  hacker: {
    name: "Technical",
    data: [
      {
        name: "Technical Abbreviation",
        identifier: "hacker.abbreviation",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.abbreviation();
        },
      },
      {
        name: "Technical Adjective",
        identifier: "hacker.adjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.adjective();
        },
      },
      {
        name: "Technical Noun",
        identifier: "hacker.noun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.noun();
        },
      },
      {
        name: "Technical Verb",
        identifier: "hacker.verb",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.verb();
        },
      },
      {
        name: "Technical '-Ing' Verb",
        identifier: "hacker.ingverb",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.ingverb();
        },
      },
      {
        name: "'Hacker' Phrase",
        identifier: "hacker.phrase",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.phrase();
        },
      },
    ],
  },

  internet: {
    name: "Internet",
    data: [
      {
        name: "Email Address",
        identifier: "internet.email",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.email();
        },
      },
      {
        name: "Example.org Email Address",
        identifier: "internet.exampleEmail",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.exampleEmail();
        },
      },
      {
        name: "Username",
        identifier: "internet.userName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.userName();
        },
      },
      {
        name: "Internet Protocol",
        identifier: "internet.protocol",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.protocol();
        },
      },
      {
        name: "URL",
        identifier: "internet.url",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.url();
        },
      },
      {
        name: "Domain Name",
        identifier: "internet.domainName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainName();
        },
      },
      {
        name: "Domain Suffix",
        identifier: "internet.domainSuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainSuffix();
        },
      },
      {
        name: "Domain Word",
        identifier: "internet.domainWord",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainWord();
        },
      },
      {
        name: "IP Address",
        identifier: "internet.ip",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.ip();
        },
      },
      {
        name: "IPv6 Address",
        identifier: "internet.ipv6",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.ipv6();
        },
      },
      {
        name: "Port number",
        identifier: "internet.port",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.port().toString();
        },
      },
      {
        name: "User Agent String",
        identifier: "internet.userAgent",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.userAgent();
        },
      },
      {
        name: "HEX Colo(u)r Code",
        identifier: "internet.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.color();
        },
      },
      {
        name: "MAC Address",
        identifier: "internet.mac",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.mac();
        },
      },
      {
        name: "Sample Password",
        identifier: "internet.password",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.password();
        },
      },
    ],
  },

  lorem: {
    name: "Lorem",
    data: [
      {
        name: "Lorem Word",
        identifier: "lorem.word",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.word();
        },
      },
      {
        name: "Lorem Words",
        identifier: "lorem.words",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.words();
        },
      },
      {
        name: "Lorem Sentence",
        identifier: "lorem.sentence",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.sentence();
        },
      },
      {
        name: "Lorem Slug",
        identifier: "lorem.slug",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.slug();
        },
      },
      {
        name: "Lorem Sentences",
        identifier: "lorem.sentences",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.sentences();
        },
      },
      {
        name: "Lorem Paragraph",
        identifier: "lorem.paragraph",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.paragraph();
        },
      },
      {
        name: "Lorem Paragraphs",
        identifier: "lorem.paragraphs",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.paragraphs();
        },
      },
      {
        name: "Lorem Text",
        identifier: "lorem.text",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.text();
        },
      },
      {
        name: "Lorem Lines",
        identifier: "lorem.lines",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.lines();
        },
      },
    ],
  },
  music: {
    name: "Music",
    data: [
      {
        name: "Genre",
        identifier: "music.genre",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.music.genre();
        },
      },
    ]
  },
  name: {
    name: "Person",
    data: [
      {
        name: "First Name",
        identifier: "name.firstName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.firstName();
        },
      },
      {
        name: "Last Name",
        identifier: "name.lastName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.lastName();
        },
      },
      {
        name: "Middle Name",
        identifier: "name.middleName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.middleName();
        },
      },
      {
        name: "Full Name (First Last)",
        identifier: "name.findName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.findName();
        },
      },
      {
        name: "Job Title",
        identifier: "name.jobTitle",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobTitle();
        },
      },
      {
        name: "Name Prefix",
        identifier: "name.prefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.prefix();
        },
      },
      {
        name: "Name Suffix",
        identifier: "name.suffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.suffix();
        },
      },
      {
        name: "Title",
        identifier: "name.title",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.title();
        },
      },
      {
        name: "Job Descriptor Word",
        identifier: "name.jobDescriptor",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobDescriptor();
        },
      },
      {
        name: "Job Area",
        identifier: "name.jobArea",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobArea();
        },
      },
      {
        name: "Job Type",
        identifier: "name.jobType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobType();
        },
      },
    ],
  },

  phone: {
    name: "Phone",
    data: [
      {
        name: "Phone Number",
        identifier: "phone.phoneNumber",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneNumber();
        },
      },
      {
        name: "North American Phone Number",
        identifier: "phone.phoneNumberFormat",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneNumberFormat();
        },
      },
      {
        name: "Phone Format Placeholder",
        identifier: "phone.phoneFormats",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneFormats();
        },
      },
    ],
  },

  random: {
    name: "Random",
    data: [
      {
        name: "Random Number",
        identifier: "random.number",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.number().toString();
        },
      },
      {
        name: "Float",
        identifier: "random.number",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.float().toString();
        },
      },
      {
        name: "Array Element",
        identifier: "random.arrayElement",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.arrayElement().toString();
        },
      },
      {
        name: "arrayElements",
        identifier: "random.arrayElements",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.arrayElements().toString();
        },
      },
      {
        name: "objectElement",
        identifier: "random.objectElement",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.objectElement().toString();
        },
      },
      {
        name: "UUID",
        identifier: "random.uuid",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.uuid();
        },
      },
      {
        name: "Boolean",
        identifier: "random.boolean",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.boolean().toString();
        },
      },
      {
        name: "Random Word",
        identifier: "random.word",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.word();
        },
      },
      {
        name: "Random Words",
        identifier: "random.words",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.words();
        },
      },
      {
        name: "Language Locale",
        identifier: "random.locale",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.locale();
        },
      },
      {
        name: "Random Aalpha Character",
        identifier: "random.alpha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.alpha();
        },
      },
      {
        name: "Random AlphaNum Character",
        identifier: "random.alphaNumeric",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.alphaNumeric();
        },
      },
      {
        name: "Random hexaDecimal Character",
        identifier: "random.hexaDecimal",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.hexaDecimal();
        },
      }
    ],
  },

  system: {
    name: "Computer system",
    data: [
      {
        name: "Random Filename",
        identifier: "system.fileName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileName();
        },
      },
      {
        name: "Common Filename",
        identifier: "system.commonFileName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileName();
        },
      },
      {
        name: "MIME Type",
        identifier: "system.mimeType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.mimeType();
        },
      },
      {
        name: "File Type",
        identifier: "system.fileType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileType();
        },
      },
      {
        name: "Common File Type",
        identifier: "system.commonFileType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileType();
        },
      },
      {
        name: "File Extension",
        identifier: "system.fileExt",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileExt();
        },
      },
      {
        name: "Common File Extension",
        identifier: "system.commonFileExt",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileExt();
        },
      },
      {
        name: "Directory Path",
        identifier: "system.directoryPath",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.directoryPath();
        },
      },
      {
        name: "File Path",
        identifier: "system.filePath",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.filePath();
        },
      },
      {
        name: "Semver",
        identifier: "system.semver",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.semver();
        },
      },
    ],
  },

  vehicle: {
    name: "Vehicle",
    data: [
      {
        name: "Vehicle (Full Name)",
        identifier: "vehicle.vehicle",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vehicle();
        },
      },
      {
        name: "Vehicle Manufacturer",
        identifier: "vehicle.manufacturer",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.manufacturer();
        },
      },
      {
        name: "Vehicle Model",
        identifier: "vehicle.model",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.model();
        },
      },
      {
        name: "Vehicle Type",
        identifier: "vehicle.type",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.type();
        },
      },
      {
        name: "Vehicle Fuel",
        identifier: "vehicle.fuel",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.fuel();
        },
      },
      {
        name: "Vehicle VIN",
        identifier: "vehicle.vin",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vin();
        },
      },
      {
        name: "Vehicle Color",
        identifier: "vehicle.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.color();
        },
      },
      {
        name: "Vehicle Registration Number",
        identifier: "vehicle.vrm",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vrm();
        },
      },
    ]
  }
};

export default data;
