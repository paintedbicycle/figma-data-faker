import faker from "faker";

const data = [
      {
        name: "US Zip Code",
        category: "Postal addresses",
        identifier: "address.zipCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.zipCode();
        },
      },
      {
        name: "City Name",
        category: "Postal addresses",
        identifier: "address.city",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.city();
        },
      },
      {
        name: "City Prefix",
        category: "Postal addresses",
        identifier: "address.cityPrefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.cityPrefix();
        },
      },
      {
        name: "City Suffix",
        category: "Postal addresses",
        identifier: "address.citySuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.citySuffix();
        },
      },
      {
        name: "Street Name",
        category: "Postal addresses",
        identifier: "address.streetName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetName();
        },
      },
      {
        name: "Street Address",
        category: "Postal addresses",
        identifier: "address.streetAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetAddress();
        },
      },
      {
        name: "Street Suffix",
        category: "Postal addresses",
        identifier: "address.streetSuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetSuffix();
        },
      },
      {
        name: "Street Prefix",
        category: "Postal addresses",
        identifier: "address.streetPrefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.streetPrefix();
        },
      },
      {
        name: "Secondary Address Line",
        category: "Postal addresses",
        identifier: "address.secondaryAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.secondaryAddress();
        },
      },
      {
        name: "County",
        category: "Postal addresses",
        identifier: "address.county",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.county();
        },
      },
      {
        name: "Country",
        category: "Postal addresses",
        identifier: "address.country",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.country();
        },
      },
      {
        name: "Country Code",
        category: "Postal addresses",
        identifier: "address.countryCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.countryCode();
        },
      },
      {
        name: "State",
        category: "Postal addresses",
        identifier: "address.state",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.state();
        },
      },
      {
        name: "State Abbreviation",
        category: "Postal addresses",
        identifier: "address.stateAbbr",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.stateAbbr();
        },
      },
      {
        name: "Latitude",
        category: "Postal addresses",
        identifier: "address.latitude",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.latitude();
        },
      },
      {
        name: "Longitude",
        category: "Postal addresses",
        identifier: "address.longitude",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.longitude();
        },
      },
      {
        name: "Direction",
        category: "Postal addresses",
        identifier: "address.direction",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.direction();
        },
      },
      {
        name: "Cardinal direction",
        category: "Postal addresses",
        identifier: "address.cardinalDirection",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.cardinalDirection();
        },
      },
      {
        name: "Ordinal direction",
        category: "Postal addresses",
        identifier: "address.ordinalDirection",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.ordinalDirection();
        },
      },
      // {
      //   name: "GPS coordinate",
      //   category: "Postal addresses",
      //   identifier: "nearbyGPSCoordinate",
      //   handler: "setLayerNameAndData",
      //   script: "index.js",
      //   replace: function () {
      //     return faker.address.nearbyGPSCoordinate();
      //   },
      // },
      {
        name: "Time zone",
        category: "Postal addresses",
        identifier: "address.timeZone",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.address.timeZone();
        },
      },

      {
        name: "(Brand) Color",
        category: "Commerce",
        identifier: "commerce.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.color();
        },
      },
      {
        name: "Business Department",
        category: "Commerce",
        identifier: "commerce.department",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.department();
        },
      },
      {
        name: "Product Name",
        category: "Commerce",
        identifier: "commerce.productName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productName();
        },
      },
      {
        name: "Price",
        category: "Commerce",
        identifier: "commerce.price",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.price();
        },
      },
      {
        name: "Product Adjective",
        category: "Commerce",
        identifier: "commerce.productAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productAdjective();
        },
      },
      {
        name: "Product Material",
        category: "Commerce",
        identifier: "commerce.productMaterial",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productMaterial();
        },
      },
      {
        name: "Product",
        category: "Commerce",
        identifier: "commerce.product",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.product();
        },
      },
      {
        name: "Product Description",
        category: "Commerce",
        identifier: "commerce.productDescription",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.commerce.productDescription();
        },
      },

      // {
      //   name: "Company Suffixes",
      //   category: "Company",
      //   identifier: "company.suffixes",
      //   handler: "setLayerNameAndData",
      //   script: "index.js",
      //   replace: function () {
      //     return faker.company.suffixes();
      //   },
      // },
      {
        name: "Company Name",
        category: "Company",
        identifier: "company.companyName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.companyName();
        },
      },
      {
        name: "Company Suffix",
        category: "Company",
        identifier: "company.companySuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.companySuffix();
        },
      },
      {
        name: "Company Catchphrase",
        category: "Company",
        identifier: "company.catchPhrase",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhrase();
        },
      },
      {
        name: "Company BS Phrase",
        category: "Company",
        identifier: "company.bs",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bs();
        },
      },
      {
        name: "Catchphrase Adjective",
        category: "Company",
        identifier: "company.catchPhraseAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseAdjective();
        },
      },
      {
        name: "Catchphrase Descriptor",
        category: "Company",
        identifier: "company.catchPhraseDescriptor",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseDescriptor();
        },
      },
      {
        name: "Catchphrase Noun",
        category: "Company",
        identifier: "company.catchPhraseNoun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.catchPhraseNoun();
        },
      },
      {
        name: "BS Adjective",
        category: "Company",
        identifier: "company.bsAdjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsAdjective();
        },
      },
      {
        name: "BS Buzzword Verb",
        category: "Company",
        identifier: "company.bsBuzz",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsBuzz();
        },
      },
      {
        name: "BS Buzzword Noun",
        category: "Company",
        identifier: "company.bsNoun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.company.bsNoun();
        },
      },

      {
        name: "Database Column Name",
        category: "Database",
        identifier: "database.column",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.column();
        },
      },
      {
        name: "Database Column Type",
        category: "Database",
        identifier: "database.type",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.type();
        },
      },
      {
        name: "Database Collation",
        category: "Database",
        identifier: "database.collation",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.collation();
        },
      },
      {
        name: "Database Engine",
        category: "Database",
        identifier: "database.engine",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.database.engine();
        },
      },

      {
        name: "Soon Date (Full)",
        category: "Dates",
        identifier: "date.soon",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.soon().toDateString();
        },
      },
      {
        name: "Past Date (Full)",
        category: "Dates",
        identifier: "date.past",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.past().toDateString();
        },
      },
      {
        name: "Future Date (Full)",
        category: "Dates",
        identifier: "date.future",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.future().toDateString();
        },
      },
      {
        name: "Recent Date (Full)",
        category: "Dates",
        identifier: "date.recent",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.recent().toDateString();
        },
      },
      {
        name: "Month",
        category: "Dates",
        identifier: "date.month",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.month();
        },
      },
      {
        name: "Weekday",
        category: "Dates",
        identifier: "date.weekday",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.date.weekday();
        },
      },

      {
        name: "Account Number",
        category: "Finance",
        identifier: "finance.account",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.account();
        },
      },
      {
        name: "Account Name/Type",
        category: "Finance",
        identifier: "finance.accountName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.accountName();
        },
      },
      {
        name: "Credit Card Number",
        category: "Finance",
        identifier: "finance.mask",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.creditCardNumber();
        },
      },
      {
        name: "Credit Card CVV",
        category: "Finance",
        identifier: "finance.creditCardCVV",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.creditCardCVV();
        },
      },
      // {
      //   name: "Credit Card Last 4",
      //   category: "Finance",
      //   identifier: "finance.mask",
      //   handler: "setLayerNameAndData",
      //   script: "index.js",
      //   replace: function () {
      //     return faker.finance.mask();
      //   },
      // },
      {
        name: "Purchase Amount / Price",
        category: "Finance",
        identifier: "finance.amount",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.amount();
        },
      },
      {
        name: "Transaction Type",
        category: "Finance",
        identifier: "finance.transactionType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.transactionType();
        },
      },
      {
        name: "Currency Code",
        category: "Finance",
        identifier: "finance.currencyCode",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencyCode();
        },
      },
      {
        name: "Currency Name",
        category: "Finance",
        identifier: "finance.currencyName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencyName();
        },
      },
      {
        name: "Currency Symbol",
        category: "Finance",
        identifier: "finance.currencySymbol",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.currencySymbol();
        },
      },
      {
        name: "Bitcoin Address",
        category: "Finance",
        identifier: "finance.bitcoinAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.bitcoinAddress();
        },
      },
      {
        name: "Litecoin Address",
        category: "Finance",
        identifier: "finance.litecoinAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.litecoinAddress();
        },
      },
      {
        name: "Ethereum Address",
        category: "Finance",
        identifier: "finance.ethereumAddress",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.ethereumAddress();
        },
      },
      {
        name: "IBAN Number",
        category: "Finance",
        identifier: "finance.iban",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.iban();
        },
      },
      {
        name: "BIC Code",
        category: "Finance",
        identifier: "finance.bic",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.finance.bic();
        },
      },

      {
        name: "Git Branch Name",
        category: "Git",
        identifier: "git.branch",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.branch();
        },
      },
      {
        name: "Git Commit Entry",
        category: "Git",
        identifier: "git.commitEntry",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitEntry();
        },
      },
      {
        name: "Git Commit Message",
        category: "Git",
        identifier: "git.commitMessage",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitMessage();
        },
      },
      {
        name: "Git Commit SHA",
        category: "Git",
        identifier: "git.commitSha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.commitSha();
        },
      },
      {
        name: "Git Short SHA",
        category: "Git",
        identifier: "git.shortSha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.git.shortSha();
        },
      },

      {
        name: "Technical Abbreviation",
        category: "Technical",
        identifier: "hacker.abbreviation",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.abbreviation();
        },
      },
      {
        name: "Technical Adjective",
        category: "Technical",
        identifier: "hacker.adjective",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.adjective();
        },
      },
      {
        name: "Technical Noun",
        category: "Technical",
        identifier: "hacker.noun",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.noun();
        },
      },
      {
        name: "Technical Verb",
        category: "Technical",
        identifier: "hacker.verb",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.verb();
        },
      },
      {
        name: "Technical '-Ing' Verb",
        category: "Technical",
        identifier: "hacker.ingverb",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.ingverb();
        },
      },
      {
        name: "'Hacker' Phrase",
        category: "Technical",
        identifier: "hacker.phrase",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.hacker.phrase();
        },
      },

      {
        name: "Email Address",
        category: "Internet",
        identifier: "internet.email",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.email();
        },
      },
      {
        name: "Example.org Email Address",
        category: "Internet",
        identifier: "internet.exampleEmail",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.exampleEmail();
        },
      },
      {
        name: "Username",
        category: "Internet",
        identifier: "internet.userName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.userName();
        },
      },
      {
        name: "Internet Protocol",
        category: "Internet",
        identifier: "internet.protocol",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.protocol();
        },
      },
      {
        name: "URL",
        category: "Internet",
        identifier: "internet.url",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.url();
        },
      },
      {
        name: "Domain Name",
        category: "Internet",
        identifier: "internet.domainName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainName();
        },
      },
      {
        name: "Domain Suffix",
        category: "Internet",
        identifier: "internet.domainSuffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainSuffix();
        },
      },
      {
        name: "Domain Word",
        category: "Internet",
        identifier: "internet.domainWord",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.domainWord();
        },
      },
      {
        name: "IP Address",
        category: "Internet",
        identifier: "internet.ip",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.ip();
        },
      },
      {
        name: "IPv6 Address",
        category: "Internet",
        identifier: "internet.ipv6",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.ipv6();
        },
      },
      {
        name: "Port number",
        category: "Internet",
        identifier: "internet.port",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.port().toString();
        },
      },
      {
        name: "User Agent String",
        category: "Internet",
        identifier: "internet.userAgent",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.userAgent();
        },
      },
      {
        name: "HEX Colo(u)r Code",
        category: "Internet",
        identifier: "internet.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.color();
        },
      },
      {
        name: "MAC Address",
        category: "Internet",
        identifier: "internet.mac",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.mac();
        },
      },
      {
        name: "Sample Password",
        category: "Internet",
        identifier: "internet.password",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.internet.password();
        },
      },

      {
        name: "Lorem Word",
        category: "Lorem",
        identifier: "lorem.word",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.word();
        },
      },
      {
        name: "Lorem Words",
        category: "Lorem",
        identifier: "lorem.words",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.words();
        },
      },
      {
        name: "Lorem Sentence",
        category: "Lorem",
        identifier: "lorem.sentence",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.sentence();
        },
      },
      {
        name: "Lorem Slug",
        category: "Lorem",
        identifier: "lorem.slug",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.slug();
        },
      },
      {
        name: "Lorem Sentences",
        category: "Lorem",
        identifier: "lorem.sentences",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.sentences();
        },
      },
      {
        name: "Lorem Paragraph",
        category: "Lorem",
        identifier: "lorem.paragraph",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.paragraph();
        },
      },
      {
        name: "Lorem Paragraphs",
        category: "Lorem",
        identifier: "lorem.paragraphs",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.paragraphs();
        },
      },
      {
        name: "Lorem Text",
        category: "Lorem",
        identifier: "lorem.text",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.text();
        },
      },
      {
        name: "Lorem Lines",
        category: "Lorem",
        identifier: "lorem.lines",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.lorem.lines();
        },
      },

      {
        name: "Genre",
        category: "Music",
        identifier: "music.genre",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.music.genre();
        },
      },

      {
        name: "First Name",
        category: "Person",
        identifier: "name.firstName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.firstName();
        },
      },
      {
        name: "Last Name",
        category: "Person",
        identifier: "name.lastName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.lastName();
        },
      },
      {
        name: "Middle Name",
        category: "Person",
        identifier: "name.middleName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.middleName();
        },
      },
      {
        name: "Full Name (First Last)",
        category: "Person",
        identifier: "name.findName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.findName();
        },
      },
      {
        name: "Job Title",
        category: "Person",
        identifier: "name.jobTitle",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobTitle();
        },
      },
      {
        name: "Name Prefix",
        category: "Person",
        identifier: "name.prefix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.prefix();
        },
      },
      {
        name: "Name Suffix",
        category: "Person",
        identifier: "name.suffix",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.suffix();
        },
      },
      {
        name: "Title",
        category: "Person",
        identifier: "name.title",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.title();
        },
      },
      {
        name: "Job Descriptor Word",
        category: "Person",
        identifier: "name.jobDescriptor",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobDescriptor();
        },
      },
      {
        name: "Job Area",
        category: "Person",
        identifier: "name.jobArea",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobArea();
        },
      },
      {
        name: "Job Type",
        category: "Person",
        identifier: "name.jobType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.name.jobType();
        },
      },

      {
        name: "Phone Number",
        category: "Phone",
        identifier: "phone.phoneNumber",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneNumber();
        },
      },
      {
        name: "North American Phone Number",
        category: "Phone",
        identifier: "phone.phoneNumberFormat",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneNumberFormat();
        },
      },
      {
        name: "Phone Format Placeholder",
        category: "Phone",
        identifier: "phone.phoneFormats",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.phone.phoneFormats();
        },
      },

      {
        name: "Random Number",
        category: "Random",
        identifier: "random.number",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.number().toString();
        },
      },
      {
        name: "Float",
        category: "Random",
        identifier: "random.number",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.float().toString();
        },
      },
      {
        name: "Array Element",
        category: "Random",
        identifier: "random.arrayElement",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.arrayElement().toString();
        },
      },
      {
        name: "arrayElements",
        category: "Random",
        identifier: "random.arrayElements",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.arrayElements().toString();
        },
      },
      {
        name: "objectElement",
        category: "Random",
        identifier: "random.objectElement",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.objectElement().toString();
        },
      },
      {
        name: "UUID",
        category: "Random",
        identifier: "random.uuid",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.uuid();
        },
      },
      {
        name: "Boolean",
        category: "Random",
        identifier: "random.boolean",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.boolean().toString();
        },
      },
      {
        name: "Random Word",
        category: "Random",
        identifier: "random.word",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.word();
        },
      },
      {
        name: "Random Words",
        category: "Random",
        identifier: "random.words",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.words();
        },
      },
      {
        name: "Language Locale",
        category: "Random",
        identifier: "random.locale",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.locale();
        },
      },
      {
        name: "Random Aalpha Character",
        category: "Random",
        identifier: "random.alpha",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.alpha();
        },
      },
      {
        name: "Random AlphaNum Character",
        category: "Random",
        identifier: "random.alphaNumeric",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.alphaNumeric();
        },
      },
      {
        name: "Random hexaDecimal Character",
        category: "Random",
        identifier: "random.hexaDecimal",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.random.hexaDecimal();
        },
      },

      {
        name: "Random Filename",
        category: "Computer system",
        identifier: "system.fileName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileName();
        },
      },
      {
        name: "Common Filename",
        category: "Computer system",
        identifier: "system.commonFileName",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileName();
        },
      },
      {
        name: "MIME Type",
        category: "Computer system",
        identifier: "system.mimeType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.mimeType();
        },
      },
      {
        name: "File Type",
        category: "Computer system",
        identifier: "system.fileType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileType();
        },
      },
      {
        name: "Common File Type",
        category: "Computer system",
        identifier: "system.commonFileType",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileType();
        },
      },
      {
        name: "File Extension",
        category: "Computer system",
        identifier: "system.fileExt",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.fileExt();
        },
      },
      {
        name: "Common File Extension",
        category: "Computer system",
        identifier: "system.commonFileExt",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.commonFileExt();
        },
      },
      {
        name: "Directory Path",
        category: "Computer system",
        identifier: "system.directoryPath",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.directoryPath();
        },
      },
      {
        name: "File Path",
        category: "Computer system",
        identifier: "system.filePath",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.filePath();
        },
      },
      {
        name: "Semver",
        category: "Computer system",
        identifier: "system.semver",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.system.semver();
        },
      },

      {
        name: "Vehicle (Full Name)",
        category: "Vehicle",
        identifier: "vehicle.vehicle",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vehicle();
        },
      },
      {
        name: "Vehicle Manufacturer",
        category: "Vehicle",
        identifier: "vehicle.manufacturer",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.manufacturer();
        },
      },
      {
        name: "Vehicle Model",
        category: "Vehicle",
        identifier: "vehicle.model",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.model();
        },
      },
      {
        name: "Vehicle Type",
        category: "Vehicle",
        identifier: "vehicle.type",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.type();
        },
      },
      {
        name: "Vehicle Fuel",
        category: "Vehicle",
        identifier: "vehicle.fuel",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.fuel();
        },
      },
      {
        name: "Vehicle VIN",
        category: "Vehicle",
        identifier: "vehicle.vin",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vin();
        },
      },
      {
        name: "Vehicle Color",
        category: "Vehicle",
        identifier: "vehicle.color",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.color();
        },
      },
      {
        name: "Vehicle Registration Number",
        category: "Vehicle",
        identifier: "vehicle.vrm",
        handler: "setLayerNameAndData",
        script: "index.js",
        replace: function () {
          return faker.vehicle.vrm();
        },
      }
];

export default data;
 