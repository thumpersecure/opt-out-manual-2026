const SITE_DATA = {
  quickStart: [
    'Find your profile on the site (search your name + city/state).',
    'Copy the exact profile URL.',
    'Use the site\'s opt-out page and submit removal.',
    'Confirm via email/phone if required.',
    'Re-check in 24-72 hours and repeat if multiple listings appear.'
  ],
  beforeYouBegin: [
    'Use a fresh browser tab (incognito/private helps).',
    'Have your email ready (some sites require confirmation).',
    'Keep a notes file with: site + profile URL + date submitted.',
    'If you\'re listed multiple times, you usually must remove each listing separately.'
  ],
  proTips: [
    'Search smarter: try "First Last" + city and also just phone number.',
    'Clear cookies or use private mode if the site loops or blocks.',
    'Set a reminder to re-check in 7-14 days (some sites republish).',
    'Screenshot confirmations for your records.'
  ],
  emailTemplate: {
    subject: 'Request for Removal of Personal Information',
    body: 'Hello,\n\nPlease remove my personal information from your site.\n\nRecord/Profile URL: <PASTE URL>\nName: <YOUR NAME>\nLocation: <CITY, STATE>\n\nThank you,\n<YOUR NAME>'
  },
  mainSites: [
    {
      id: 'addresses-com',
      name: 'Addresses.com',
      domain: 'addresses.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.addresses.com/optout',
      note: '',
      steps: [
        'Visit addresses.com/optout',
        'Search for your record using your name and location',
        'Select your record from the search results',
        'Follow the prompts to request removal',
        'Enter your email address if requested',
        'Confirm the request via email if required',
        'Check back in a few days to ensure it\'s removed'
      ]
    },
    {
      id: 'been-verified',
      name: 'BeenVerified',
      domain: 'beenverified.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.beenverified.com/app/optout/search',
      note: '',
      steps: [
        'Visit the BeenVerified opt-out page',
        'Search for your record by name and location',
        'Select the matching listing',
        'Submit the opt-out request',
        'Check your email for confirmation',
        'Confirm the request if prompted',
        'Removal can take several days'
      ]
    },
    {
      id: 'check-people',
      name: 'CheckPeople',
      domain: 'checkpeople.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.checkpeople.com/opt-out',
      note: '',
      steps: [
        'Visit checkpeople.com/opt-out',
        'Search for your record using your name',
        'Select your record from the results',
        'Click the opt-out/remove link',
        'Enter your email address',
        'Confirm the request via email if required',
        'Wait for removal confirmation'
      ]
    },
    {
      id: 'coco-finder',
      name: 'CocoFinder',
      domain: 'cocofinder.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://cocofinder.com/optOut',
      note: '',
      steps: [
        'Visit cocofinder.com/optOut',
        'Search for your listing',
        'Select your record',
        'Submit the opt-out request',
        'Confirm via email if prompted',
        'Check back later to verify removal'
      ]
    },
    {
      id: 'fast-people-search',
      name: 'FastPeopleSearch',
      domain: 'fastpeoplesearch.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.fastpeoplesearch.com/removal',
      note: '',
      steps: [
        'Find your record on fastpeoplesearch.com',
        'Copy the URL of your record',
        'Go to fastpeoplesearch.com/removal',
        'Paste the record URL into the removal form',
        'Complete any verification steps',
        'Submit the removal request',
        'Check back in 24-72 hours to confirm removal'
      ]
    },
    {
      id: 'family-tree-now',
      name: 'FamilyTreeNow',
      domain: 'familytreenow.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.familytreenow.com/optout',
      note: '',
      steps: [
        'Find your listing on familytreenow.com',
        'Copy the URL of your listing',
        'Visit familytreenow.com/optout',
        'Paste the URL into the opt-out form',
        'Complete the CAPTCHA',
        'Submit the opt-out request',
        'Check back in 24-48 hours'
      ]
    },
    {
      id: 'go-lookup',
      name: 'GoLookup',
      domain: 'golookup.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://golookup.com/remove-my-info',
      note: '',
      steps: [
        'Search for your record on golookup.com',
        'Copy the URL of your listing',
        'Visit golookup.com/remove-my-info',
        'Paste the URL and fill in the form',
        'Enter your email address if required',
        'Submit the request',
        'Confirm via email if prompted',
        'Check back later to confirm removal'
      ]
    },
    {
      id: 'id-crawl',
      name: 'ID Crawl',
      domain: 'idcrawl.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.idcrawl.com/optout',
      note: '',
      steps: [
        'Find your record on idcrawl.com',
        'Copy the URL of your listing',
        'Visit idcrawl.com/optout',
        'Fill out the opt-out form with your details and the listing URL',
        'Submit the opt-out request',
        'Confirm via email if prompted',
        'Check back to ensure removal'
      ]
    },
    {
      id: 'instant-checkmate',
      name: 'Instant Checkmate',
      domain: 'instantcheckmate.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.instantcheckmate.com/opt-out/',
      note: '',
      steps: [
        'Visit the Instant Checkmate opt-out page',
        'Search for your record',
        'Select your listing',
        'Submit the opt-out request',
        'Confirm via email if required',
        'Wait for removal to process'
      ]
    },
    {
      id: 'intelius',
      name: 'Intelius',
      domain: 'intelius.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.intelius.com/opt-out/',
      note: '',
      steps: [
        'Visit intelius.com/opt-out',
        'Search for your listing',
        'Select your record',
        'Provide the required information',
        'Submit the opt-out request',
        'Confirm via email if prompted',
        'Check back later to ensure removal'
      ]
    },
    {
      id: 'my-life',
      name: 'MyLife',
      domain: 'mylife.com',
      difficulty: 'medium',
      time: '10-20 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.mylife.com/opt-out',
      note: '',
      steps: [
        'Find your profile on mylife.com',
        'Copy the URL of your profile',
        'Go to mylife.com/opt-out',
        'Submit the opt-out request with your details',
        'Confirm via email if required',
        'Check back later to verify removal'
      ]
    },
    {
      id: 'nuwber',
      name: 'Nuwber',
      domain: 'nuwber.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://nuwber.com/removal/link',
      note: '',
      steps: [
        'Find your record on nuwber.com',
        'Copy the URL of your record',
        'Visit nuwber.com/removal/link',
        'Paste your record link into the form',
        'Enter your email if required',
        'Submit the request',
        'Confirm via email if prompted',
        'Re-check later to confirm removal'
      ]
    },
    {
      id: 'official-usa',
      name: 'OfficialUSA',
      domain: 'officialusa.com',
      difficulty: 'medium',
      time: '10-20 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.officialusa.com/remove',
      note: '',
      steps: [
        'Locate your listing on officialusa.com',
        'Copy the URL of your listing',
        'Visit officialusa.com/remove',
        'Follow the instructions to submit a removal request',
        'You may need to email them directly',
        'Include your name address and the listing URL',
        'Request removal of your information',
        'Check back to verify removal'
      ]
    },
    {
      id: 'peek-you',
      name: 'PeekYou',
      domain: 'peekyou.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.peekyou.com/about/contact/optout',
      note: '',
      steps: [
        'Visit peekyou.com/about/contact/optout',
        'Search for your profile on PeekYou',
        'Copy your profile URL',
        'Paste the URL into the opt-out form',
        'Submit the request',
        'Check back later to confirm removal'
      ]
    },
    {
      id: 'people-looker',
      name: 'PeopleLooker',
      domain: 'peoplelooker.com',
      difficulty: 'medium',
      time: '10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.peoplelooker.com/opt-out',
      note: '',
      steps: [
        'Visit peoplelooker.com/opt-out',
        'Search for your record',
        'Select your listing',
        'Submit the opt-out request',
        'Confirm via email if required',
        'Verify removal later'
      ]
    },
    {
      id: 'people-search-now',
      name: 'PeopleSearchNow',
      domain: 'peoplesearchnow.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://peoplesearchnow.com/opt-out',
      note: '',
      steps: [
        'Search for your record on peoplesearchnow.com',
        'Copy the URL of your listing',
        'Go to peoplesearchnow.com/opt-out',
        'Paste the URL and submit the request',
        'Confirm via email if prompted',
        'Check back to confirm removal'
      ]
    },
    {
      id: 'public-records-now',
      name: 'PublicRecordsNow',
      domain: 'publicrecordsnow.com',
      difficulty: 'medium',
      time: '10-20 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.publicrecordsnow.com/optout',
      note: '',
      steps: [
        'Find your record on publicrecordsnow.com',
        'Copy the URL of the listing',
        'Visit publicrecordsnow.com/optout',
        'Submit the opt-out request with your listing URL',
        'Confirm via email if required',
        'Wait for removal to process'
      ]
    },
    {
      id: 'radaris',
      name: 'Radaris',
      domain: 'radaris.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://radaris.com/page/how-to-remove',
      note: '',
      steps: [
        'Go to radaris.com and find your record',
        'Copy the URL of your record',
        'Visit the Radaris removal instructions page',
        'Follow the opt-out instructions provided',
        'You may need to submit a form and confirm via email',
        'Check back later to ensure the record is removed'
      ]
    },
    {
      id: 'search-people-free',
      name: 'SearchPeopleFree',
      domain: 'searchpeoplefree.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.searchpeoplefree.com/opt-out',
      note: '',
      steps: [
        'Find your listing on searchpeoplefree.com',
        'Copy the URL of your listing',
        'Go to searchpeoplefree.com/opt-out',
        'Paste your listing URL into the opt-out form',
        'Complete any CAPTCHA',
        'Submit the request',
        'Check back later to confirm removal'
      ]
    },
    {
      id: 'social-catfish',
      name: 'Social Catfish',
      domain: 'socialcatfish.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://socialcatfish.com/opt-out/',
      note: 'Social Catfish is primarily used for romance scam detection but also hosts profiles. You can request removal via their opt-out form.',
      steps: [
        'Find your listing on Social Catfish (if applicable)',
        'Go to socialcatfish.com/opt-out',
        'Fill out the opt-out form',
        'Submit the opt-out request',
        'Check your email for confirmation',
        'Complete any verification steps'
      ]
    },
    {
      id: 'spokeo',
      name: 'Spokeo',
      domain: 'spokeo.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.spokeo.com/optout',
      note: 'Spokeo may have multiple listings for you. You need to opt out of each one separately.',
      steps: [
        'Go to Spokeo.com and search for your name to find your listing',
        'Copy the URL of your profile page',
        'Visit the opt-out page at spokeo.com/optout',
        'Paste your profile URL into the form',
        'Enter your email address',
        'Complete the CAPTCHA verification',
        'Click Remove This Listing',
        'Check your email for a confirmation link',
        'Click the confirmation link to complete the removal',
        'Your listing should be removed within 24-48 hours'
      ]
    },
    {
      id: 'spy-fly',
      name: 'SpyFly',
      domain: 'spyfly.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.spyfly.com/optout',
      note: '',
      steps: [
        'Visit spyfly.com and find your listing',
        'Copy the URL of the profile/report page',
        'Go to spyfly.com/optout',
        'Fill in the form with your details and listing URL',
        'Submit the opt-out request',
        'Confirm via email if prompted',
        'Check back later to verify removal'
      ]
    },
    {
      id: 'thats-them',
      name: 'That\'s Them',
      domain: 'thatsthem.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://thatsthem.com/opt-out',
      note: '',
      steps: [
        'Search for your listing on thatsthem.com',
        'Copy the URL of your listing',
        'Visit thatsthem.com/opt-out',
        'Paste the URL and submit the request',
        'Complete any CAPTCHA verification',
        'Verify removal later'
      ]
    },
    {
      id: 'true-people-search',
      name: 'TruePeopleSearch',
      domain: 'truepeoplesearch.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.truepeoplesearch.com/removal',
      note: '',
      steps: [
        'Find your record on truepeoplesearch.com',
        'Copy the URL of your record',
        'Go to truepeoplesearch.com/removal',
        'Paste the record URL into the removal form',
        'Complete the CAPTCHA',
        'Submit the removal request',
        'Check back later to confirm removal'
      ]
    },
    {
      id: 'truth-finder',
      name: 'TruthFinder',
      domain: 'truthfinder.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.truthfinder.com/opt-out/',
      note: '',
      steps: [
        'Visit truthfinder.com/opt-out',
        'Search for your record',
        'Select your listing',
        'Submit the opt-out request',
        'Confirm via email if required',
        'Verify removal later'
      ]
    },
    {
      id: 'us-identify',
      name: 'US Identify',
      domain: 'usidentify.com',
      difficulty: 'medium',
      time: '10-20 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.usidentify.com/optout',
      note: '',
      steps: [
        'Find your listing on usidentify.com',
        'Copy the URL of your listing',
        'Visit usidentify.com/optout',
        'Fill out the opt-out form',
        'Submit the request',
        'Confirm via email if prompted',
        'Check back to verify removal'
      ]
    },
    {
      id: 'us-phonebook',
      name: 'US Phonebook',
      domain: 'usphonebook.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.usphonebook.com/opt-out',
      note: '',
      steps: [
        'Find your listing on usphonebook.com',
        'Copy the URL of your listing',
        'Go to usphonebook.com/opt-out',
        'Paste the URL into the opt-out form',
        'Complete CAPTCHA if required',
        'Submit the request',
        'Check back later to confirm removal'
      ]
    },
    {
      id: 'us-search',
      name: 'US Search',
      domain: 'ussearch.com',
      difficulty: 'medium',
      time: '10-15 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://www.ussearch.com/consumer/optout',
      note: '',
      steps: [
        'Visit ussearch.com/consumer/optout',
        'Search for your listing',
        'Select your record',
        'Submit the opt-out request',
        'Confirm via email if required',
        'Verify removal later'
      ]
    },
    {
      id: 'voter-records',
      name: 'VoterRecords',
      domain: 'voterrecords.com',
      difficulty: 'medium',
      time: '10-20 min',
      needsEmail: true,
      needsId: false,
      optOutUrl: 'https://voterrecords.com/contact',
      note: '',
      steps: [
        'Find your record on voterrecords.com',
        'Copy the URL of your record',
        'Go to voterrecords.com/contact',
        'Fill out the contact form requesting removal',
        'Include the URL of your record and your name',
        'Submit the request',
        'Wait for a response or confirmation',
        'Check back later to see if it\'s removed'
      ]
    },
    {
      id: 'whitepages',
      name: 'Whitepages',
      domain: 'whitepages.com',
      difficulty: 'easy',
      time: '5-10 min',
      needsEmail: false,
      needsId: false,
      optOutUrl: 'https://www.whitepages.com/suppression_requests',
      note: 'Whitepages requires phone verification. Make sure you have access to the phone number listed.',
      steps: [
        'Find your listing on Whitepages.com',
        'Copy the URL of your profile page',
        'Go to whitepages.com/suppression_requests',
        'Paste your profile URL',
        'Enter your phone number for verification',
        'You will receive an automated call with a verification code',
        'Enter the verification code on the website',
        'Confirm the removal request',
        'Removal typically takes 24 hours'
      ]
    }
  ],
  additionalSites: [
    {
      id: '411',
      name: '411',
      domain: '411.com',
      optOutUrl: 'https://www.whitepages.com/suppression-requests',
      method: 'Online form',
      notes: 'Owned by Whitepages. Use the Whitepages suppression request. Phone verification required via automated call with PIN.',
      priority: false
    },
    {
      id: '411-info',
      name: '411 Info',
      domain: '411.info',
      optOutUrl: 'https://411.info/manage/',
      method: 'Online form',
      notes: 'Online removal tool. Search for your listing and follow prompts to remove.',
      priority: false
    },
    {
      id: 'absolute-people-search',
      name: 'Absolute People Search',
      domain: 'absolutepeoplesearch.com',
      optOutUrl: 'https://absolutepeoplesearch.com/public.php?funct=optout',
      method: 'Online form + Email',
      notes: 'Submit the online opt-out form and confirm via email.',
      priority: false
    },
    {
      id: 'acxiom',
      name: 'Acxiom',
      domain: 'acxiom.com',
      optOutUrl: 'https://isapps.acxiom.com/optout/optout.aspx',
      method: 'Online form',
      notes: 'HIGH PRIORITY. Major data broker that feeds many smaller sites. Online form completes the process. Also email: consumeradvo@acxiom.com',
      priority: true
    },
    {
      id: 'address-search',
      name: 'Address Search',
      domain: 'addresssearch.com',
      optOutUrl: 'https://addresssearch.com/remove-info.php',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'advanced-background-checks',
      name: 'Advanced Background Checks',
      domain: 'advancedbackgroundchecks.com',
      optOutUrl: 'https://www.advancedbackgroundchecks.com/removal',
      method: 'Online form',
      notes: 'Online removal tool. Search your name, select record, submit removal.',
      priority: false
    },
    {
      id: 'all-area-codes',
      name: 'All Area Codes',
      domain: 'allareacodes.com',
      optOutUrl: 'https://www.allareacodes.com/remove_name.htm',
      method: 'Online form',
      notes: 'Online removal tool for phone number listings.',
      priority: false
    },
    {
      id: 'all-people',
      name: 'All People',
      domain: 'allpeople.com',
      optOutUrl: 'Embedded on profile page',
      method: 'Online (on-site)',
      notes: 'Find your profile, click Edit List, then choose Remove Listing.',
      priority: false
    },
    {
      id: 'america-phonebook',
      name: 'America Phonebook',
      domain: 'americaphonebook.com',
      optOutUrl: 'http://www.americaphonebook.com/contact.php',
      method: 'Contact form / Email',
      notes: 'Use the contact form to request removal. Email: lookupuk@gmail.com',
      priority: false
    },
    {
      id: 'ancestry',
      name: 'Ancestry',
      domain: 'ancestry.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Send removal request to support@ancestry.com and customersolutions@ancestry.com. Specify exactly what information you want removed.',
      priority: false
    },
    {
      id: 'anywho',
      name: 'Anywho',
      domain: 'anywho.com',
      optOutUrl: 'None (embedded)',
      method: 'On-site removal',
      notes: 'Find your profile and select Remove Listing directly on the page.',
      priority: false
    },
    {
      id: 'apollo',
      name: 'Apollo',
      domain: 'apollo.io',
      optOutUrl: 'https://www.apollo.io/privacy-policy/remove/',
      method: 'Online form',
      notes: 'Business/professional data broker. Online removal form completes the process.',
      priority: false
    },
    {
      id: 'archives',
      name: 'Archives',
      domain: 'archives.com',
      optOutUrl: 'https://archives.com/optout',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'arrest-facts',
      name: 'Arrest Facts',
      domain: 'arrestfacts.com',
      optOutUrl: 'Embedded on record page',
      method: 'On-site removal',
      notes: 'Click Information Control on any record and follow the removal instructions.',
      priority: false
    },
    {
      id: 'background-alert',
      name: 'Background Alert',
      domain: 'backgroundalert.com',
      optOutUrl: 'https://www.backgroundalert.com/optout/',
      method: 'Online form',
      notes: 'Online removal tool completes the process.',
      priority: false
    },
    {
      id: 'background-check',
      name: 'Background Check',
      domain: 'backgroundcheck.run',
      optOutUrl: 'https://backgroundcheck.run/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool. Search and submit removal.',
      priority: false
    },
    {
      id: 'background-checkers',
      name: 'Background Checkers',
      domain: 'backgroundcheckers.net',
      optOutUrl: 'https://www.backgroundcheckers.net/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool. Search by name and submit.',
      priority: false
    },
    {
      id: 'batch-dialer',
      name: 'BatchDialer',
      domain: 'batchdialer.com',
      optOutUrl: 'https://batchdialer.com/personal-information',
      method: 'Online form',
      notes: 'Real estate lead service. Online removal form.',
      priority: false
    },
    {
      id: 'batch-leads',
      name: 'BatchLeads',
      domain: 'batchleads.io',
      optOutUrl: 'https://batchleads.io/personal-information',
      method: 'Online form',
      notes: 'Real estate lead service. Online removal form.',
      priority: false
    },
    {
      id: 'batch-skip-tracing',
      name: 'BatchSkipTracing',
      domain: 'batchskiptracing.com',
      optOutUrl: 'https://batchskiptracing.com/personal-information',
      method: 'Online form',
      notes: 'Skip-tracing service. Online removal form.',
      priority: false
    },
    {
      id: 'block-shopper',
      name: 'BlockShopper',
      domain: 'blockshopper.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email scarlett@blockshopper.com. Must cite special circumstances. Expect resistance.',
      priority: false
    },
    {
      id: 'buzzfile',
      name: 'Buzzfile',
      domain: 'buzzfile.com',
      optOutUrl: 'http://www.buzzfile.com/Company/Remove',
      method: 'Online form',
      notes: 'Business directory. Online removal tool.',
      priority: false
    },
    {
      id: 'call-truth',
      name: 'Call Truth',
      domain: 'calltruth.com',
      optOutUrl: 'https://www.calltruth.com/opt_out.php',
      method: 'Online form',
      notes: 'Phone lookup service. Online opt-out form.',
      priority: false
    },
    {
      id: 'caller-smart',
      name: 'Caller Smart',
      domain: 'callersmart.com',
      optOutUrl: 'https://www.callersmart.com/opt-out',
      method: 'Online form or Email',
      notes: 'Online form or email submission.',
      priority: false
    },
    {
      id: 'callyo',
      name: 'Callyo',
      domain: 'callyo.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email callyo.support@motorolasolutions.com demanding removal.',
      priority: false
    },
    {
      id: 'cars-owners',
      name: 'Cars Owners',
      domain: 'carsowners.net',
      optOutUrl: 'None (contact form)',
      method: 'Online contact form',
      notes: 'Vehicle records site. Submit removal through https://carsowners.net/feedback',
      priority: false
    },
    {
      id: 'catalog-choice',
      name: 'Catalog Choice',
      domain: 'catalogchoice.org',
      optOutUrl: 'None',
      method: 'Email',
      notes: 'Junk mail opt-out service. Email support@catalogchoice.org for removal.',
      priority: false
    },
    {
      id: 'cell-revealer',
      name: 'Cell Revealer',
      domain: 'cellrevealer.com',
      optOutUrl: 'Embedded on results page',
      method: 'On-site removal',
      notes: 'Click the removal link next to your entry. Email: support@cellrevealer.com',
      priority: false
    },
    {
      id: 'centeda',
      name: 'Centeda',
      domain: 'centeda.com',
      optOutUrl: 'https://centeda.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool completes the process.',
      priority: false
    },
    {
      id: 'check-secrets',
      name: 'Check Secrets',
      domain: 'checksecrets.com',
      optOutUrl: 'https://www.checksecrets.com/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool. Search by name and submit.',
      priority: false
    },
    {
      id: 'checkr',
      name: 'Checkr',
      domain: 'checkr.com',
      optOutUrl: 'https://candidate.checkr.com/privacy/delete',
      method: 'Online form',
      notes: 'Employment background check service. Online deletion request form.',
      priority: false
    },
    {
      id: 'city-data',
      name: 'City-Data',
      domain: 'city-data.com',
      optOutUrl: 'https://www.city-data.com/privacy-form.php?w=usget',
      method: 'Online form',
      notes: 'Community/demographics site. Online removal form. Also email: legal@city-data.com',
      priority: false
    },
    {
      id: 'clustr-maps',
      name: 'Clustr Maps',
      domain: 'clustrmaps.com',
      optOutUrl: 'https://clustrmaps.com/bl/opt-out',
      method: 'Online form',
      notes: 'People mapping service. Online opt-out form.',
      priority: false
    },
    {
      id: 'confidential-phone-lookup',
      name: 'Confidential Phone Lookup',
      domain: 'confidentialphonelookup.com',
      optOutUrl: 'Embedded on results page',
      method: 'On-site removal',
      notes: 'Highlight your entry and click Do Not Display.',
      priority: false
    },
    {
      id: 'connected-investors',
      name: 'Connected Investors',
      domain: 'connectedinvestors.com',
      optOutUrl: 'https://connectedinvestors.com/content/do-not-sell',
      method: 'Online form',
      notes: 'Real estate investor platform. Online Do Not Sell form.',
      priority: false
    },
    {
      id: 'contact-out',
      name: 'Contact Out',
      domain: 'contactout.com',
      optOutUrl: 'https://contactout.com/optout',
      method: 'Online form or Email',
      notes: 'Professional contact finder. Online form or email support@contactout.com.',
      priority: false
    },
    {
      id: 'corporation-wiki',
      name: 'Corporation Wiki',
      domain: 'corporationwiki.com',
      optOutUrl: 'https://www.corporationwiki.com/profiles/public',
      method: 'Online form',
      notes: 'Business/officer records. Online removal tool. Email: admin@corporationwiki.com',
      priority: false
    },
    {
      id: 'councilon',
      name: 'Councilon',
      domain: 'councilon.com',
      optOutUrl: 'https://councilon.com/ex/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool completes the process.',
      priority: false
    },
    {
      id: 'cyber-background-checks',
      name: 'Cyber Background Checks',
      domain: 'cyberbackgroundchecks.com',
      optOutUrl: 'https://www.cyberbackgroundchecks.com/removal',
      method: 'Online form or Email',
      notes: 'Online removal tool or email through contact page.',
      priority: false
    },
    {
      id: 'data-axle',
      name: 'Data Axle',
      domain: 'data-axle.com',
      optOutUrl: 'https://www.data-axle.com/do-not-sell-my-data/',
      method: 'Online form',
      notes: 'HIGH PRIORITY. Major data aggregator (formerly InfoUSA/Infogroup). Feeds data to many directories. Also email: privacyteam@data-axle.com',
      priority: true
    },
    {
      id: 'data-chk',
      name: 'DataChk',
      domain: 'datacheckinc.com',
      optOutUrl: 'None (contact form)',
      method: 'Email',
      notes: 'Submit through https://www.datacheckinc.com/contact/. Removal covers several subsidiaries.',
      priority: false
    },
    {
      id: 'data-veria',
      name: 'DataVeria',
      domain: 'dataveria.com',
      optOutUrl: 'https://dataveria.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool completes the process.',
      priority: false
    },
    {
      id: 'delve-point',
      name: 'DelvePoint',
      domain: 'delvepoint.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Send removal request to customerservice@delvepoint.com.',
      priority: false
    },
    {
      id: 'dex-knows',
      name: 'DexKnows',
      domain: 'dexknows.com',
      optOutUrl: 'https://tinyurl.com/dexknowscom',
      method: 'Online form',
      notes: 'Owned by Thryv. Same process removes from SuperPages, Real Yellow Pages, and Yellow Pages.',
      priority: false
    },
    {
      id: 'direct-mail',
      name: 'DirectMail',
      domain: 'directmail.com',
      optOutUrl: 'https://www.directmail.com/mail_preference/',
      method: 'Online form',
      notes: 'Direct mail opt-out. Also email: donotmaillist@directmail.com',
      priority: false
    },
    {
      id: 'dma-choice',
      name: 'DMA Choice',
      domain: 'dmachoice.org',
      optOutUrl: 'https://www.ims-dm.com/cgi/dncc.php',
      method: 'Online form',
      notes: 'Direct Marketing Association. Opt out of direct mail, telemarketing, and email marketing.',
      priority: false
    },
    {
      id: 'epsilon',
      name: 'Epsilon',
      domain: 'epsilon.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'HIGH PRIORITY. Major marketing data company. Send Removal as subject to: optout@epsilon.com, abacusoptout@epsilon.com, dataoptout1@epsilon.com, contactus@shoppers-voice.com',
      priority: true
    },
    {
      id: 'fama',
      name: 'Fama',
      domain: 'fama.io',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Social media screening company. Email privacy@fama.io with removal request.',
      priority: false
    },
    {
      id: 'family-search',
      name: 'FamilySearch',
      domain: 'familysearch.org',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Genealogy site. Email DataPrivacyOfficer@ldschurch.org with removal request.',
      priority: false
    },
    {
      id: 'fast-people-search-io',
      name: 'FastPeopleSearch.io',
      domain: 'fastpeoplesearch.io',
      optOutUrl: 'https://fastpeoplesearch.io/remove-my-info',
      method: 'Online form',
      notes: 'Requires Gmail account. Separate from FastPeopleSearch.com. Removal within 24 hours.',
      priority: false
    },
    {
      id: 'fax-vin',
      name: 'Fax VIN',
      domain: 'faxvin.com',
      optOutUrl: 'None (contact form)',
      method: 'Online contact form',
      notes: 'Vehicle history site. Submit through https://www.faxvin.com/company/contact',
      priority: false
    },
    {
      id: 'find-people-search',
      name: 'Find People Search',
      domain: 'findpeoplesearch.com',
      optOutUrl: 'https://findpeoplesearch.com/customerservice/',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'free-background-checks',
      name: 'Free Background Checks',
      domain: 'freebackgroundcheck.us',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email privacy@infopay.com with removal details.',
      priority: false
    },
    {
      id: 'free-people-directory',
      name: 'Free People Directory',
      domain: 'freepeopledirectory.com',
      optOutUrl: 'https://www.freepeopledirectory.com/optout',
      method: 'Online form',
      notes: 'Online removal tool. Also opt out of Spokeo.',
      priority: false
    },
    {
      id: 'free-phone-tracer',
      name: 'Free Phone Tracer',
      domain: 'freephonetracer.com',
      optOutUrl: 'https://www.beenverified.com/app/optout/search',
      method: 'Online form',
      notes: 'Owned by BeenVerified. Use BeenVerified opt-out.',
      priority: false
    },
    {
      id: 'glad-i-know',
      name: 'Glad I Know',
      domain: 'gladiknow.com',
      optOutUrl: 'https://gladiknow.com/opt-out',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'grey-pages',
      name: 'Grey Pages',
      domain: 'grey-pages.com',
      optOutUrl: 'https://www.grey-pages.com/removal',
      method: 'Online form',
      notes: 'Online removal tool completes the process.',
      priority: false
    },
    {
      id: 'haines-and-company',
      name: 'Haines & Company',
      domain: 'haines.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Directory publisher. Send name and address to criscros@haines.com, info@haines.com, custserv@haines.com.',
      priority: false
    },
    {
      id: 'hpcc-usa',
      name: 'HPCC-USA',
      domain: 'hpcc-usa.org',
      optOutUrl: 'https://www.hpcc-usa.org/research/change-listing.html',
      method: 'Online form',
      notes: 'Online removal/change listing tool.',
      priority: false
    },
    {
      id: 'id-caller',
      name: 'IDCaller',
      domain: 'idcaller.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email support@IDCaller.com to request deletion. Response within 30 days.',
      priority: false
    },
    {
      id: 'id-true',
      name: 'ID True',
      domain: 'idtrue.com',
      optOutUrl: 'https://www.idtrue.com/optout/',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'infopay',
      name: 'Infopay',
      domain: 'infopay.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Submit request to privacy@infopay.com. Operates several subsidiary sites.',
      priority: false
    },
    {
      id: 'infospace',
      name: 'Infospace',
      domain: 'infospace.com',
      optOutUrl: 'https://infospace.intelius.com/optout.php',
      method: 'Online form',
      notes: 'Uses Intelius data. Online removal tool.',
      priority: false
    },
    {
      id: 'infotracer',
      name: 'Infotracer',
      domain: 'infotracer.com',
      optOutUrl: 'https://infotracer.com/optout',
      method: 'Online form',
      notes: 'HIGH PRIORITY. Major data aggregator. Alternative: https://members.infotracer.com/removeMyData',
      priority: true
    },
    {
      id: 'irb-search',
      name: 'IRBSearch',
      domain: 'irbsearch.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Professional investigation tool. Email customercare@irbsearch.com.',
      priority: false
    },
    {
      id: 'lexis-nexis',
      name: 'LexisNexis/Accurint',
      domain: 'lexisnexis.com',
      optOutUrl: 'https://optout.lexisnexis.com',
      method: 'Online form',
      notes: 'HIGH PRIORITY. Massive data aggregator. Also opt out of direct marketing at: https://www.lexisnexis.com/privacy/directmarketingopt-out.aspx. Email: privacy.information.mgr@lexisnexis.com',
      priority: true
    },
    {
      id: 'locate-family',
      name: 'Locate Family',
      domain: 'locatefamily.com',
      optOutUrl: 'https://www.locatefamily.com/removal2.html',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      domain: 'mastercard.us',
      optOutUrl: 'https://www.mastercard.us/en-us/vision/corp-responsibility/commitment-to-privacy/privacy/data-analytics-opt-out.html',
      method: 'Online form',
      notes: 'Opt out of data analytics and email marketing.',
      priority: false
    },
    {
      id: 'melissa-data',
      name: 'Melissa Data',
      domain: 'melissadata.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Address verification company. Email paul.nelson@melissa.com or brett.mcwhorter@melissa.com.',
      priority: false
    },
    {
      id: 'meritpages',
      name: 'Meritpages',
      domain: 'meritpages.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Academic achievement site. Email help@meritpages.com.',
      priority: false
    },
    {
      id: 'mugshot-look',
      name: 'MugshotLook',
      domain: 'mugshotlook.com',
      optOutUrl: 'https://www.mugshotlook.com/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool. Search by name and submit.',
      priority: false
    },
    {
      id: 'my-heritage',
      name: 'MyHeritage',
      domain: 'myheritage.com',
      optOutUrl: 'https://faq.myheritage.com/en/article/how-do-i-delete-my-account-on-myheritage',
      method: 'Online + Email',
      notes: 'Genealogy site. Follow account deletion instructions or email support@myheritage.com.',
      priority: false
    },
    {
      id: 'national-cellular-directory',
      name: 'National Cellular Directory',
      domain: 'nationalcellulardirectory.com',
      optOutUrl: 'https://www.nationalcellulardirectory.com/optout/',
      method: 'Online form',
      notes: 'Cell phone directory. Online opt-out form.',
      priority: false
    },
    {
      id: 'neighbor-report',
      name: 'Neighbor Report',
      domain: 'neighbor.report',
      optOutUrl: 'https://neighbor.report/remove',
      method: 'Online form',
      notes: 'Address/neighbor info. Online removal tool. Email: help@neighbor.report',
      priority: false
    },
    {
      id: 'new-england-facts',
      name: 'NewEnglandFacts',
      domain: 'newenglandfacts.com',
      optOutUrl: 'https://newenglandfacts.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'number-guru',
      name: 'Number Guru',
      domain: 'numberguru.com',
      optOutUrl: 'https://www.beenverified.com/app/optout/search',
      method: 'Online form',
      notes: 'Owned by BeenVerified. Use BeenVerified opt-out.',
      priority: false
    },
    {
      id: 'ok-caller',
      name: 'OK Caller',
      domain: 'okcaller.com',
      optOutUrl: 'Embedded on results page',
      method: 'On-site removal',
      notes: 'Click any Opt-out or Unlist option in results.',
      priority: false
    },
    {
      id: 'old-friends',
      name: 'Old Friends',
      domain: 'old-friends.co',
      optOutUrl: 'Embedded (hover on name)',
      method: 'On-site removal',
      notes: 'Hover over your name for removal option. Email: support@old-friends.co',
      priority: false
    },
    {
      id: 'old-phone-book',
      name: 'Old Phone Book',
      domain: 'oldphonebook.com',
      optOutUrl: 'Embedded on results page',
      method: 'On-site + Email',
      notes: 'Click removal link below results. Email: lookupuk@gmail.com',
      priority: false
    },
    {
      id: 'open-corporates',
      name: 'Open Corporates',
      domain: 'opencorporates.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Corporate records. Email data.protection@opencorporates.com.',
      priority: false
    },
    {
      id: 'our-states',
      name: 'OurStates',
      domain: 'ourstates.org',
      optOutUrl: 'https://ourstates.org/opt-out',
      method: 'Online form',
      notes: 'Use caution - some users report scam-like behavior.',
      priority: false
    },
    {
      id: 'ownerly',
      name: 'Ownerly',
      domain: 'ownerly.com',
      optOutUrl: 'https://www.beenverified.com/app/optout/search',
      method: 'Online form',
      notes: 'Owned by BeenVerified. Use BeenVerified opt-out.',
      priority: false
    },
    {
      id: 'peep-lookup',
      name: 'Peep Lookup',
      domain: 'peeplookup.com',
      optOutUrl: 'https://www.peeplookup.com/opt_out',
      method: 'Online form',
      notes: 'Online removal tool. Follow prompts.',
      priority: false
    },
    {
      id: 'people-by-name',
      name: 'People By Name',
      domain: 'peoplebyname.com',
      optOutUrl: 'https://www.peoplebyname.com/remove.php',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'people-by-phone',
      name: 'People By Phone',
      domain: 'peoplebyphone.com',
      optOutUrl: 'https://www.peoplebyphone.com/remove-my-number/',
      method: 'Online form',
      notes: 'Phone number directory. Online removal tool.',
      priority: false
    },
    {
      id: 'people-data-labs',
      name: 'People Data Labs',
      domain: 'peopledatalabs.com',
      optOutUrl: 'https://www.peopledatalabs.com/opt-out-form',
      method: 'Online form',
      notes: 'Business data enrichment. Email: privacy@peopledatalabs.com',
      priority: false
    },
    {
      id: 'people-finder',
      name: 'People Finder',
      domain: 'peoplefinder.com',
      optOutUrl: 'https://peoplefinder.com/optout.php',
      method: 'Online form + Email',
      notes: 'Uses Intelius data. Online removal with email verification.',
      priority: false
    },
    {
      id: 'people-finders',
      name: 'People Finders',
      domain: 'peoplefinders.com',
      optOutUrl: 'https://www.peoplefinders.com/opt-out#IT',
      method: 'Online form',
      notes: 'Also handles removals for Quick People Trace and USA Trace.',
      priority: false
    },
    {
      id: 'people-search-123',
      name: 'People Search 123',
      domain: 'peoplesearch123.com',
      optOutUrl: 'https://www.peoplesearch123.com/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool. Search by name and submit.',
      priority: false
    },
    {
      id: 'people-search-expert',
      name: 'People Search Expert',
      domain: 'peoplesearchexpert.com',
      optOutUrl: 'Embedded on result page',
      method: 'On-site removal',
      notes: 'Email: support@peoplesearchexpert.com',
      priority: false
    },
    {
      id: 'people-searcher',
      name: 'People Searcher',
      domain: 'peoplesearcher.com',
      optOutUrl: 'https://www.peoplesearcher.com/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool. Search by name and submit.',
      priority: false
    },
    {
      id: 'people-smart',
      name: 'People Smart',
      domain: 'peoplesmart.com',
      optOutUrl: 'https://www.peoplesmart.com/app/optout/search',
      method: 'Online form',
      notes: 'Owned by BeenVerified.',
      priority: false
    },
    {
      id: 'people-trace-uk',
      name: 'People Trace UK',
      domain: 'peopletraceuk.com',
      optOutUrl: 'https://www.peopletraceuk.com/RequestRecordRemoval.asp',
      method: 'Online form',
      notes: 'UK-based people search.',
      priority: false
    },
    {
      id: 'people-whiz',
      name: 'People Whiz',
      domain: 'peoplewhiz.com',
      optOutUrl: 'https://www.peoplewhiz.com/remove-my-info',
      method: 'Online form + Email',
      notes: 'Online form plus email confirmation.',
      priority: false
    },
    {
      id: 'people-search-org',
      name: 'People-Search',
      domain: 'people-search.org',
      optOutUrl: 'Embedded on site',
      method: 'On-site removal',
      notes: 'Email: info@people-search.org',
      priority: false
    },
    {
      id: 'people-background-check',
      name: 'PeopleBackgroundCheck',
      domain: 'people-background-check.com',
      optOutUrl: 'https://people-background-check.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'persopo',
      name: 'Persopo',
      domain: 'persopo.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email support@persopo.com. Covers several subsidiaries.',
      priority: false
    },
    {
      id: 'phone-owner',
      name: 'Phone Owner',
      domain: 'phoneowner.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email customer-service@phoneowner.com.',
      priority: false
    },
    {
      id: 'phonebooks',
      name: 'Phonebooks',
      domain: 'phonebooks.com',
      optOutUrl: 'Embedded on results page',
      method: 'On-site removal',
      notes: 'Find Request That This Person Be Removed in bottom right of results.',
      priority: false
    },
    {
      id: 'pipl',
      name: 'Pipl',
      domain: 'pipl.com',
      optOutUrl: 'https://pipl.com/personal-information-removal-request',
      method: 'Online form + Email',
      notes: 'Professional identity search. Email: support@pipl.com',
      priority: false
    },
    {
      id: 'plaid',
      name: 'Plaid',
      domain: 'plaid.com',
      optOutUrl: 'https://plaid.com/legal/data-protection-request-form/',
      method: 'Online form + Email',
      notes: 'Financial data service. Email: privacy@plaid.com',
      priority: false
    },
    {
      id: 'private-records',
      name: 'Private Records',
      domain: 'privaterecords.net',
      optOutUrl: 'https://www.privaterecords.net/optOut/name/landing',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'pro-people-search',
      name: 'Pro People Search',
      domain: 'propeoplesearch.com',
      optOutUrl: 'https://propeoplesearch.com/optout',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'property-shark',
      name: 'Property Shark',
      domain: 'propertyshark.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email support@propertyshark.com.',
      priority: false
    },
    {
      id: 'pub360',
      name: 'Pub360',
      domain: 'pub360.com',
      optOutUrl: 'https://pub360.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'public-data-usa',
      name: 'Public Data USA',
      domain: 'publicdatausa.com',
      optOutUrl: 'https://publicdatausa.com/remove.php',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'public-info-services',
      name: 'Public Info Services',
      domain: 'publicinfoservices.com',
      optOutUrl: 'https://www.publicinfoservices.com/help-center/remove-me-from-website',
      method: 'Online form',
      notes: 'Email: support@publicinfoservices.com',
      priority: false
    },
    {
      id: 'public-records-search',
      name: 'Public Records Search',
      domain: 'publicrecords.com',
      optOutUrl: 'Use Intelius opt-out',
      method: 'Online form',
      notes: 'Owned by Intelius.',
      priority: false
    },
    {
      id: 'publishers-clearing-house',
      name: 'Publishers Clearing House',
      domain: 'pch.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email privacychoices@pchmail.com.',
      priority: false
    },
    {
      id: 'quick-people-trace',
      name: 'Quick People Trace',
      domain: 'quickpeopletrace.com',
      optOutUrl: 'https://www.peoplefinders.com/opt-out#IT',
      method: 'Online form + Email',
      notes: 'Uses PeopleFinders data.',
      priority: false
    },
    {
      id: 'real-people-search',
      name: 'RealPeopleSearch',
      domain: 'realpeoplesearch.com',
      optOutUrl: 'https://realpeoplesearch.com',
      method: 'Online form',
      notes: 'Requires Gmail account. Find profile, copy URL, click Remove My Info.',
      priority: false
    },
    {
      id: 'rehold',
      name: 'Rehold',
      domain: 'rehold.com',
      optOutUrl: 'Embedded on profile page',
      method: 'On-site removal',
      notes: 'Click Information Control on right side. Email: customer-support@rehold.com',
      priority: false
    },
    {
      id: 'retail-me-not',
      name: 'RetailMeNot/Redplum',
      domain: 'retailmenot.com',
      optOutUrl: 'None (contact form)',
      method: 'Online contact form',
      notes: 'Request removal through help.retailmenot.com',
      priority: false
    },
    {
      id: 'reveal-name',
      name: 'Reveal Name',
      domain: 'revealname.com',
      optOutUrl: 'https://www.revealname.com/opt_out',
      method: 'Online form',
      notes: 'Must know the full URL of your profile.',
      priority: false
    },
    {
      id: 'reveal-phone-owner',
      name: 'Reveal Phone Owner',
      domain: 'revealphoneowner.com',
      optOutUrl: 'https://www.revealphoneowner.com/data-removal',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'reverse-phone-lookup',
      name: 'Reverse Phone Lookup',
      domain: 'reversephonelookup.com',
      optOutUrl: 'Use Intelius opt-out',
      method: 'Online form',
      notes: 'Owned by Intelius.',
      priority: false
    },
    {
      id: 'sales-spider',
      name: 'Sales Spider',
      domain: 'salespider.com',
      optOutUrl: 'http://salespidermedia.com/opt-out-and-information-removal.php',
      method: 'Online form',
      notes: 'Business directory. Select Delete this profile.',
      priority: false
    },
    {
      id: 'search-bug',
      name: 'Search Bug',
      domain: 'searchbug.com',
      optOutUrl: 'https://www.searchbug.com/peoplefinder/how-to-remove.aspx',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'search-quarry',
      name: 'Search Quary',
      domain: 'searchquarry.com',
      optOutUrl: 'https://members.searchquarry.com/removeMyData/',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'selfie-systems',
      name: 'Selfie Systems',
      domain: 'selfie.systems',
      optOutUrl: 'https://www.spokeo.com/optout',
      method: 'Online form',
      notes: 'Owned by Spokeo.',
      priority: false
    },
    {
      id: 'smart-background-checks',
      name: 'Smart Background Checks',
      domain: 'smartbackgroundchecks.com',
      optOutUrl: 'https://www.smartbackgroundchecks.com/optout',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'spy-dialer',
      name: 'Spy Dialer',
      domain: 'spydialer.com',
      optOutUrl: 'https://www.spydialer.com/optout.aspx',
      method: 'Online form',
      notes: 'Reverse phone lookup.',
      priority: false
    },
    {
      id: 'spytox',
      name: 'Spytox',
      domain: 'spytox.com',
      optOutUrl: 'https://www.spytox.com/opt_out',
      method: 'Online form + Email',
      notes: 'Email: hello@spytox.com',
      priority: false
    },
    {
      id: 'state-records',
      name: 'State Records',
      domain: 'staterecords.org',
      optOutUrl: 'https://infotracer.com/optout/',
      method: 'Online form',
      notes: 'Uses Infotracer data.',
      priority: false
    },
    {
      id: 'super-pages',
      name: 'Super Pages',
      domain: 'superpages.com',
      optOutUrl: 'https://tinyurl.com/dexknowscom',
      method: 'Online form',
      notes: 'Owned by Thryv. Same removal as DexKnows.',
      priority: false
    },
    {
      id: 'sync-me',
      name: 'Sync Me',
      domain: 'sync.me',
      optOutUrl: 'https://sync.me/optout/',
      method: 'Online form',
      notes: 'Caller ID app. Submit phone number to remove.',
      priority: false
    },
    {
      id: 'telephone-directories',
      name: 'Telephone Directories',
      domain: 'telephonedirectories.us',
      optOutUrl: 'https://www.telephonedirectories.us/Edit_Records',
      method: 'Online form',
      notes: 'Online removal/edit tool.',
      priority: false
    },
    {
      id: 'tenn-help',
      name: 'Tenn Help',
      domain: 'tennhelp.com',
      optOutUrl: 'https://www.tennhelp.com/public-resources/change-listing.html',
      method: 'Online form',
      notes: 'Online removal/change listing tool.',
      priority: false
    },
    {
      id: 'the-real-yellow-pages',
      name: 'The Real Yellow Pages',
      domain: 'therealyellowpages.com',
      optOutUrl: 'https://tinyurl.com/dexknowscom',
      method: 'Online form',
      notes: 'Owned by Thryv. Same removal as DexKnows.',
      priority: false
    },
    {
      id: 'thomson-reuters',
      name: 'Thomson Reuters/Westlaw/CLEAR',
      domain: 'thomsonreuters.com',
      optOutUrl: 'https://privacyportal-cdn.onetrust.com/dsarwebform/dbf5ae8a-0a6a-4f4b-b527-7f94d0de6bbc/5dc91c0f-f1b7-4b6e-9d42-76043adaf72d.html',
      method: 'Online form',
      notes: 'Major legal/professional data provider. Email: privacy.issues@thomsonreuters.com',
      priority: false
    },
    {
      id: 'tlo-transunion',
      name: 'TLO (TransUnion)',
      domain: 'tlo.com',
      optOutUrl: 'https://service.transunion.com/dss/ccpa_optout.page',
      method: 'Online form + Email',
      notes: 'Professional skip-tracing. Also email CustomerSupport@TLO.com and TLOxp@transunion.com.',
      priority: false
    },
    {
      id: 'true-caller',
      name: 'True Caller',
      domain: 'truecaller.com',
      optOutUrl: 'https://www.truecaller.com/unlisting',
      method: 'Online form',
      notes: 'Caller ID app. Enter phone number to remove.',
      priority: false
    },
    {
      id: 'true-people-search-net',
      name: 'TruePeopleSearch.net',
      domain: 'truepeoplesearch.net',
      optOutUrl: 'https://truepeoplesearch.net/remove-my-info',
      method: 'Email',
      notes: 'Separate from TruePeopleSearch.com. Email support@truepeoplesearch.net',
      priority: false
    },
    {
      id: 'ufind',
      name: 'UFind',
      domain: 'ufind.name',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email support@ufind.name.',
      priority: false
    },
    {
      id: 'united-states-phonebook',
      name: 'United States Phonebook',
      domain: 'unitedstatesphonebook.com',
      optOutUrl: 'http://www.unitedstatesphonebook.com/contact.php',
      method: 'Email',
      notes: 'Email paulmfield@gmail.com or lookupuk@gmail.com.',
      priority: false
    },
    {
      id: 'unmask',
      name: 'Unmask',
      domain: 'unmask.com',
      optOutUrl: 'https://unmask.com/opt-out',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'usa-official',
      name: 'USA Official',
      domain: 'usa-official.com',
      optOutUrl: 'https://usa-official.com/remove.php',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'usa-people-search',
      name: 'USA People Search',
      domain: 'usa-people-search.com',
      optOutUrl: 'https://www.usa-people-search.com/manage/',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'usa-trace',
      name: 'USA Trace',
      domain: 'usatrace.com',
      optOutUrl: 'https://www.peoplefinders.com/opt-out#IT',
      method: 'Online form',
      notes: 'Uses PeopleFinders data.',
      priority: false
    },
    {
      id: 'valid-number',
      name: 'Valid Number',
      domain: 'validnumber.com',
      optOutUrl: 'None (contact form)',
      method: 'Online contact form',
      notes: 'Submit through https://validnumber.com/doc/contact/',
      priority: false
    },
    {
      id: 'valpak-cox',
      name: 'Valpak/Cox',
      domain: 'valpak.com',
      optOutUrl: 'https://www.valpak.com/coupons/show/mailinglistsuppression',
      method: 'Online form',
      notes: 'Direct mail opt-out.',
      priority: false
    },
    {
      id: 'vehicle-history',
      name: 'Vehicle History',
      domain: 'vehiclehistory.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email support@vehiclehistory.com.',
      priority: false
    },
    {
      id: 'verecor',
      name: 'Verecor',
      domain: 'verecor.com',
      optOutUrl: 'https://findrec.com/page/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'vericora',
      name: 'Vericora',
      domain: 'vericora.com',
      optOutUrl: 'https://vericora.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'veriforia',
      name: 'Veriforia',
      domain: 'veriforia.com',
      optOutUrl: 'https://veriforia.com/ng/control/privacy',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'veripages',
      name: 'Veripages',
      domain: 'veripages.com',
      optOutUrl: 'https://veripages.com/page/contact',
      method: 'Online form or Email',
      notes: 'Click Control Profile on listing or email removal@veripages.com.',
      priority: false
    },
    {
      id: 'visa',
      name: 'Visa',
      domain: 'visa.com',
      optOutUrl: 'https://marketingreportoptout.visa.com/OPTOUT/request.do',
      method: 'Online form',
      notes: 'Opt out of Visa marketing data reports.',
      priority: false
    },
    {
      id: 'whooster',
      name: 'Whooster',
      domain: 'whooster.com',
      optOutUrl: 'None (email only)',
      method: 'Email',
      notes: 'Email privacy@whooster.com.',
      priority: false
    },
    {
      id: 'whoseno',
      name: 'Whoseno',
      domain: 'whoseno.com',
      optOutUrl: 'None (contact form)',
      method: 'Online contact form',
      notes: 'Submit through the contact form with removal details.',
      priority: false
    },
    {
      id: 'wyty',
      name: 'WYTY',
      domain: 'wyty.com',
      optOutUrl: 'https://www.wyty.com/remove/',
      method: 'Online form',
      notes: 'Online removal tool.',
      priority: false
    },
    {
      id: 'yasni',
      name: 'Yasni',
      domain: 'yasni.com',
      optOutUrl: 'None',
      method: 'No opt-out',
      notes: 'No direct removal. Remove from original sources and Yasni will refresh.',
      priority: false
    },
    {
      id: 'yellow-book',
      name: 'Yellow Book',
      domain: 'yellowbook.com',
      optOutUrl: 'https://www.beenverified.com/app/optout/search',
      method: 'Online form',
      notes: 'Owned by BeenVerified.',
      priority: false
    },
    {
      id: 'yellow-pages',
      name: 'Yellow Pages',
      domain: 'yellowpages.com',
      optOutUrl: 'https://tinyurl.com/dexknowscom',
      method: 'Online form',
      notes: 'Owned by Thryv. Same removal as DexKnows.',
      priority: false
    },
    {
      id: 'zabasearch',
      name: 'Zabasearch',
      domain: 'zabasearch.com',
      optOutUrl: 'None (fax only)',
      method: 'Fax',
      notes: 'Fax to 425-974-6194. Email: response@zabasearch.com',
      priority: false
    },
    {
      id: 'zoom-info',
      name: 'ZoomInfo',
      domain: 'zoominfo.com',
      optOutUrl: 'https://www.zoominfo.com/about-zoominfo/privacy-manage-profile',
      method: 'Online form + Email',
      notes: 'Business/professional data. Email: privacy@zoominfo.com',
      priority: false
    }
  ],
  dataBrokerSites: [
    {
      id: '33-mile-radius',
      name: '33MileRadius',
      website: '33mileradius.com',
      category: 'MKT',
      optOutMethod: 'Email privacy@33mileradius.com',
      processingTime: 'Varies',
      notes: 'Direct mail targeting company.',
      priority: false
    },
    {
      id: '6sense',
      name: '6sense',
      website: '6sense.com',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'B2B predictive intelligence.',
      priority: false
    },
    {
      id: 'acbj',
      name: 'ACBJ (American City Business Journals)',
      website: 'acbj.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business news publisher.',
      priority: false
    },
    {
      id: 'accenture',
      name: 'Accenture',
      website: 'accenture.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consulting firm with data services.',
      priority: false
    },
    {
      id: 'accu-data',
      name: 'AccuData',
      website: 'accudata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: '45 days',
      notes: 'Marketing data provider.',
      priority: false
    },
    {
      id: 'ach-coop',
      name: 'ACH Coop',
      website: 'achcoop.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Financial data cooperative.',
      priority: false
    },
    {
      id: 'acuant',
      name: 'Acuant',
      website: 'acuant.com',
      category: 'ID',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity verification company.',
      priority: false
    },
    {
      id: 'ad-adapted',
      name: 'AdAdapted',
      website: 'adadapted.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising platform.',
      priority: false
    },
    {
      id: 'ad-direct',
      name: 'AdDirect',
      website: 'addirectinc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing.',
      priority: false
    },
    {
      id: 'agr-marketing-solutions',
      name: 'AGR Marketing Solutions',
      website: 'agrmarketingsolutions.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Agricultural marketing data.',
      priority: false
    },
    {
      id: 'alphonso',
      name: 'Alphonso',
      website: 'alphonso.tv',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'TV data and advertising.',
      priority: false
    },
    {
      id: 'amplemarket',
      name: 'Amplemarket',
      website: 'amplemarket.com',
      category: 'B2B',
      optOutMethod: 'Email privacy@amplemarket.com',
      processingTime: 'Varies',
      notes: 'Sales engagement platform.',
      priority: false
    },
    {
      id: 'anchor-computer',
      name: 'Anchor Computer',
      website: 'anchorcomputer.com',
      category: 'MKT',
      optOutMethod: 'Online form or Email',
      processingTime: 'Varies',
      notes: 'Direct mail data.',
      priority: false
    },
    {
      id: 'andrews-wharton',
      name: 'Andrews Wharton',
      website: 'andrewswharton.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data-driven marketing.',
      priority: false
    },
    {
      id: 'ap-news',
      name: 'AP News',
      website: 'apnews.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'News organization.',
      priority: false
    },
    {
      id: 'apollo-interactive',
      name: 'ApolloInteractive',
      website: 'apollointeractive.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Digital advertising.',
      priority: false
    },
    {
      id: 'aristotle',
      name: 'Aristotle',
      website: 'aristotle.com',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Political data and compliance.',
      priority: false
    },
    {
      id: 'arity',
      name: 'Arity',
      website: 'arity.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Driving/mobility data (Allstate subsidiary).',
      priority: false
    },
    {
      id: 'at-data',
      name: 'AtData',
      website: 'atdata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Email intelligence platform.',
      priority: false
    },
    {
      id: 'attom-data',
      name: 'ATTOM Data',
      website: 'attomdata.com',
      category: 'PROP',
      optOutMethod: 'Online form',
      processingTime: '45 days',
      notes: 'Property and real estate data.',
      priority: false
    },
    {
      id: 'auto-web',
      name: 'AutoWeb',
      website: 'autoweb.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Automotive lead data.',
      priority: false
    },
    {
      id: 'bb-direct',
      name: 'BB Direct',
      website: 'bbdirect.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing lists.',
      priority: false
    },
    {
      id: 'bdo',
      name: 'BDO',
      website: 'bdo.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Accounting/advisory.',
      priority: false
    },
    {
      id: 'bigdbm',
      name: 'BIGDBM',
      website: 'bigdbm.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: '7 business days',
      notes: 'Consumer and B2B data.',
      priority: false
    },
    {
      id: 'billtrust',
      name: 'Billtrust',
      website: 'billtrust.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B payment data.',
      priority: false
    },
    {
      id: 'bizapedia',
      name: 'Bizapedia',
      website: 'bizapedia.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business registry data.',
      priority: false
    },
    {
      id: 'blis',
      name: 'Blis',
      website: 'blis.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location data platform.',
      priority: false
    },
    {
      id: 'blue-action',
      name: 'BlueAction',
      website: 'blueaction.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data services.',
      priority: false
    },
    {
      id: 'board-ex',
      name: 'BoardEx',
      website: 'boardex.com',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'Executive/board member intelligence.',
      priority: false
    },
    {
      id: 'brooks-im',
      name: 'Brooks IM',
      website: 'brooksim.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Insurance marketing data.',
      priority: false
    },
    {
      id: 'business-watch-network',
      name: 'BusinessWatch Network',
      website: 'businesswatchnetwork.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business intelligence.',
      priority: false
    },
    {
      id: 'buxton-co',
      name: 'Buxton Co',
      website: 'buxtonco.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer analytics.',
      priority: false
    },
    {
      id: 'bvd-info',
      name: 'BVD Info (Bureau van Dijk)',
      website: 'bvdinfo.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Company/financial data (Moody\'s).',
      priority: false
    },
    {
      id: 'cadent',
      name: 'Cadent',
      website: 'cadent.tv',
      category: 'AD',
      optOutMethod: 'Online form + Email confirm',
      processingTime: '45 days',
      notes: 'TV advertising data.',
      priority: false
    },
    {
      id: 'carney-direct',
      name: 'Carney Direct',
      website: 'carneydirect.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail marketing.',
      priority: false
    },
    {
      id: 'catalina',
      name: 'Catalina',
      website: 'catalina.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Shopper intelligence/marketing data.',
      priority: false
    },
    {
      id: 'catalist',
      name: 'Catalist',
      website: 'catalist.us',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Political data and analytics.',
      priority: false
    },
    {
      id: 'catalyze-ai',
      name: 'CatalyzeAI',
      website: 'catalyze.ai',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'AI-driven advertising.',
      priority: false
    },
    {
      id: 'cision',
      name: 'Cision',
      website: 'cision.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'PR/media intelligence.',
      priority: false
    },
    {
      id: 'civis-analytics',
      name: 'Civis Analytics',
      website: 'civisanalytics.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data science/analytics.',
      priority: false
    },
    {
      id: 'claritas',
      name: 'Claritas',
      website: 'claritas.com',
      category: 'MKT',
      optOutMethod: 'Online form + Email + ID',
      processingTime: 'Varies',
      notes: 'Consumer segmentation data. Requires valid state ID or utility bill upload.',
      priority: false
    },
    {
      id: 'clickagy',
      name: 'Clickagy',
      website: 'clickagy.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Behavioral data.',
      priority: false
    },
    {
      id: 'cognism',
      name: 'Cognism',
      website: 'cognism.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: '30 days',
      notes: 'B2B contact database.',
      priority: false
    },
    {
      id: 'compact-lists',
      name: 'Compact Lists',
      website: 'compactlists.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mailing list provider.',
      priority: false
    },
    {
      id: 'compile',
      name: 'Compile',
      website: 'compile.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business data.',
      priority: false
    },
    {
      id: 'complementics',
      name: 'Complementics',
      website: 'complementics.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'complete-medical-lists',
      name: 'Complete Medical Lists',
      website: 'completemedicallists.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare marketing lists.',
      priority: false
    },
    {
      id: 'consider',
      name: 'Consider',
      website: 'consider.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Sales intelligence.',
      priority: false
    },
    {
      id: 'consumers-datax',
      name: 'Consumers DataX',
      website: 'dataxltd.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer credit data.',
      priority: false
    },
    {
      id: 'contentgine',
      name: 'Contentgine',
      website: 'contentgine.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Content marketing data.',
      priority: false
    },
    {
      id: 'convex',
      name: 'Convex',
      website: 'convex.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Commercial services data.',
      priority: false
    },
    {
      id: 'cre-moodys',
      name: 'CRE (Moody\'s Analytics)',
      website: 'economy.com',
      category: 'PROP',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Commercial real estate analytics.',
      priority: false
    },
    {
      id: 'cross-pixel',
      name: 'CrossPixel',
      website: 'crosspixel.net',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Audience data.',
      priority: false
    },
    {
      id: 'crosswalk-nyc',
      name: 'Crosswalk NYC',
      website: 'crosswalknyc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'crunchbase',
      name: 'Crunchbase',
      website: 'crunchbase.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business/startup database. Submit at https://preferences.crunchbase.com/dont_sell',
      priority: false
    },
    {
      id: 'cuebiq',
      name: 'Cuebiq',
      website: 'cuebiq.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location intelligence.',
      priority: false
    },
    {
      id: 'cybba',
      name: 'Cybba',
      website: 'cybba.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Digital advertising.',
      priority: false
    },
    {
      id: 'cyndx',
      name: 'Cyndx',
      website: 'cyndx.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Financial data/deal intelligence.',
      priority: false
    },
    {
      id: 'data-lead',
      name: 'Data-Lead',
      website: 'data-lead.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B lead data.',
      priority: false
    },
    {
      id: 'data-management',
      name: 'Data-Management',
      website: 'data-management.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data services.',
      priority: false
    },
    {
      id: 'datanyze',
      name: 'Datanyze',
      website: 'datanyze.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Technographic data (ZoomInfo subsidiary).',
      priority: false
    },
    {
      id: 'data-partners',
      name: 'DataPartners',
      website: 'datapartnersinc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'decide',
      name: 'Decide',
      website: 'decide.co',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Sales intelligence.',
      priority: false
    },
    {
      id: 'deloitte',
      name: 'Deloitte',
      website: 'deloitte.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consulting with data services.',
      priority: false
    },
    {
      id: 'demand-science',
      name: 'DemandScience',
      website: 'demandscience.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B demand generation data.',
      priority: false
    },
    {
      id: 'demyst',
      name: 'Demyst',
      website: 'demyst.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'External data platform.',
      priority: false
    },
    {
      id: 'diablo-media',
      name: 'Diablo Media',
      website: 'diablomedia.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Performance marketing.',
      priority: false
    },
    {
      id: 'digital-segment',
      name: 'DigitalSegment',
      website: 'digitalsegment.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Audience data.',
      priority: false
    },
    {
      id: 'diligent',
      name: 'Diligent',
      website: 'diligent.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Governance/board data.',
      priority: false
    },
    {
      id: 'disco-network',
      name: 'DiscoNetwork',
      website: 'disconetwork.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising network.',
      priority: false
    },
    {
      id: 'disqus',
      name: 'Disqus',
      website: 'disqus.com',
      category: 'OTHER',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'Comment platform.',
      priority: false
    },
    {
      id: 'dm-databases',
      name: 'DM Databases',
      website: 'dmdatabases.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail data.',
      priority: false
    },
    {
      id: 'dnb-utility',
      name: 'DNB Utility (Dun & Bradstreet)',
      website: 'dnb.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business data.',
      priority: false
    },
    {
      id: 'driven-iq',
      name: 'DrivenIQ',
      website: 'driveniq.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data-driven advertising.',
      priority: false
    },
    {
      id: 'dstillery',
      name: 'Dstillery',
      website: 'dstillery.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Audience data for advertising.',
      priority: false
    },
    {
      id: 'dtn',
      name: 'DTN',
      website: 'dtn.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Weather/agriculture/energy data.',
      priority: false
    },
    {
      id: 'edvisors',
      name: 'Edvisors',
      website: 'edvisors.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Student data/financial aid.',
      priority: false
    },
    {
      id: 'ekata',
      name: 'Ekata (Mastercard)',
      website: 'ekata.com',
      category: 'ID',
      optOutMethod: 'Online form + Email verify code',
      processingTime: '30 days',
      notes: 'Identity verification.',
      priority: false
    },
    {
      id: 'enigma',
      name: 'Enigma',
      website: 'enigma.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business identity data.',
      priority: false
    },
    {
      id: 'equifax',
      name: 'Equifax',
      website: 'equifax.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: '15 days',
      notes: 'HIGH PRIORITY. Major credit bureau. Go to https://myprivacy.equifax.com/opt-in-opt-out/personal-info',
      priority: true
    },
    {
      id: 'experian-health',
      name: 'Experian Health',
      website: 'experian.com/healthcare',
      category: 'FIN',
      optOutMethod: 'Email',
      processingTime: 'Varies',
      notes: 'Healthcare credit data.',
      priority: false
    },
    {
      id: 'eyeota',
      name: 'Eyeota',
      website: 'eyeota.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Audience data marketplace.',
      priority: false
    },
    {
      id: 'famous-birthdays',
      name: 'FamousBirthdays',
      website: 'famousbirthdays.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Celebrity/public figure database.',
      priority: false
    },
    {
      id: 'fifty',
      name: 'Fifty',
      website: 'fifty.io',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Audience intelligence.',
      priority: false
    },
    {
      id: 'first-direct-marketing',
      name: 'First Direct Marketing',
      website: 'firstdirectcorp.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail marketing.',
      priority: false
    },
    {
      id: 'forewarn',
      name: 'FOREWARN',
      website: 'forewarn.com',
      category: 'ID',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Real estate identity verification.',
      priority: false
    },
    {
      id: 'four-leaf-data',
      name: 'FourLeafData',
      website: 'fourleafdata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer marketing data.',
      priority: false
    },
    {
      id: 'fraiser',
      name: 'Fraiser',
      website: 'fraiser.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'gale',
      name: 'Gale (Cengage)',
      website: 'gale.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Library/research databases.',
      priority: false
    },
    {
      id: 'get-emails',
      name: 'GetEmails',
      website: 'getemails.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Email identification platform.',
      priority: false
    },
    {
      id: 'giant-partners',
      name: 'Giant Partners',
      website: 'giantpartners.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data lists.',
      priority: false
    },
    {
      id: 'grassroots-analytics',
      name: 'Grassroots Analytics',
      website: 'grassrootsanalytics.com',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Political data analytics.',
      priority: false
    },
    {
      id: 'grata',
      name: 'Grata',
      website: 'grata.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Private company intelligence.',
      priority: false
    },
    {
      id: 'gravy-analytics',
      name: 'Gravy Analytics',
      website: 'gravyanalytics.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location data analytics. Note: If you reset your device advertising ID, you must re-submit opt-out.',
      priority: false
    },
    {
      id: 'gray-hair-software',
      name: 'GrayHair Software',
      website: 'grayhairsoftware.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail data.',
      priority: false
    },
    {
      id: 'growbots',
      name: 'Growbots',
      website: 'growbots.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Outbound sales data.',
      priority: false
    },
    {
      id: 'harmon-research',
      name: 'Harmon Research',
      website: 'harmonresearch.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data.',
      priority: false
    },
    {
      id: 'health-wise-data',
      name: 'HealthWise Data',
      website: 'healthwisedata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare marketing lists.',
      priority: false
    },
    {
      id: 'heartbeat',
      name: 'Heartbeat',
      website: 'heartbeat.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Influencer marketing data.',
      priority: false
    },
    {
      id: 'hunter',
      name: 'Hunter',
      website: 'hunter.io',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: '5 business days',
      notes: 'Email finder tool.',
      priority: false
    },
    {
      id: 'hybrid-theory',
      name: 'HybridTheory',
      website: 'hybridtheory.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Contextual advertising.',
      priority: false
    },
    {
      id: 'id-analytics',
      name: 'ID Analytics',
      website: 'idanalytics.com',
      category: 'ID',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity risk analytics.',
      priority: false
    },
    {
      id: 'idi-data',
      name: 'IDI Data',
      website: 'ididata.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'People search/investigation data.',
      priority: false
    },
    {
      id: 'idology',
      name: 'IDology',
      website: 'idology.com',
      category: 'ID',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity verification.',
      priority: false
    },
    {
      id: 'infofree',
      name: 'Infofree',
      website: 'infofree.com',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: '15-45 days',
      notes: 'Business and consumer data.',
      priority: false
    },
    {
      id: 'informa-divisions',
      name: 'Informa Divisions',
      website: 'informa.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Business intelligence/events data.',
      priority: false
    },
    {
      id: 'intalytics',
      name: 'Intalytics',
      website: 'intalytics.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location analytics.',
      priority: false
    },
    {
      id: 'intent-iq',
      name: 'IntentIQ',
      website: 'intentiq.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity resolution for advertising.',
      priority: false
    },
    {
      id: 'intent-macro',
      name: 'IntentMacro',
      website: 'intentmacro.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Intent data.',
      priority: false
    },
    {
      id: 'internet-brands',
      name: 'Internet Brands',
      website: 'internetbrands.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Web media company.',
      priority: false
    },
    {
      id: 'interseller',
      name: 'Interseller',
      website: 'interseller.io',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Sales prospecting tool.',
      priority: false
    },
    {
      id: 'intranet-quorum',
      name: 'IntranetQuorum',
      website: 'quorum.us',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Political/government data.',
      priority: false
    },
    {
      id: 'ip2-location',
      name: 'IP2Location',
      website: 'ip2location.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'IP geolocation data.',
      priority: false
    },
    {
      id: 'ispot',
      name: 'iSpot',
      website: 'ispot.tv',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'TV ad measurement.',
      priority: false
    },
    {
      id: 'iss-governance',
      name: 'ISS Governance',
      website: 'issgovernance.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'ESG/governance data.',
      priority: false
    },
    {
      id: 'jd-power',
      name: 'J.D. Power',
      website: 'jdpower.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data/ratings.',
      priority: false
    },
    {
      id: 'jdm-list-services',
      name: 'JDM List Services',
      website: 'jdmlistservices.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mailing list broker.',
      priority: false
    },
    {
      id: 'join-5x5',
      name: 'Join5x5',
      website: 'join5x5.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'jun-group',
      name: 'JunGroup',
      website: 'jungroup.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mobile advertising.',
      priority: false
    },
    {
      id: 'kb-synergy',
      name: 'KB Synergy',
      website: 'kbsynergy.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'key-marketing-advantage',
      name: 'Key Marketing Advantage',
      website: 'keymarketingadvantage.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing data.',
      priority: false
    },
    {
      id: 'key-opinion-leaders',
      name: 'Key Opinion Leaders',
      website: 'keyopinionleaders.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare professional data.',
      priority: false
    },
    {
      id: 'keyword-connects',
      name: 'KeywordConnects',
      website: 'keywordconnects.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Lead generation.',
      priority: false
    },
    {
      id: 'l2-political',
      name: 'L2 Political',
      website: 'l2political.com',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Voter/political data.',
      priority: false
    },
    {
      id: 'leadership-connect',
      name: 'LeadershipConnect',
      website: 'leadershipconnect.io',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Government/business contacts.',
      priority: false
    },
    {
      id: 'lead-iq',
      name: 'LeadIQ',
      website: 'leadiq.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B prospecting tool.',
      priority: false
    },
    {
      id: 'lead-loft',
      name: 'LeadLoft',
      website: 'leadloft.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Sales prospecting.',
      priority: false
    },
    {
      id: 'lead-me-media',
      name: 'LeadMe Media',
      website: 'leadmemedia.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Lead generation.',
      priority: false
    },
    {
      id: 'lead-post',
      name: 'LeadPost',
      website: 'leadpost.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Website visitor identification.',
      priority: false
    },
    {
      id: 'leads-market',
      name: 'LeadsMarket',
      website: 'leadsmarket.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Lead marketplace.',
      priority: false
    },
    {
      id: 'lifesight',
      name: 'Lifesight',
      website: 'lifesight.io',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing intelligence.',
      priority: false
    },
    {
      id: 'lightcast',
      name: 'Lightcast',
      website: 'lightcast.io',
      category: 'HR',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Labor market/workforce data.',
      priority: false
    },
    {
      id: 'list-match',
      name: 'ListMatch',
      website: 'listmatch.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing list matching.',
      priority: false
    },
    {
      id: 'list-service-direct',
      name: 'List Service Direct',
      website: 'listservicedirect.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mailing list broker.',
      priority: false
    },
    {
      id: 'lists-online',
      name: 'ListsOnline',
      website: 'listsonline.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mailing list data.',
      priority: false
    },
    {
      id: 'live-intent',
      name: 'LiveIntent',
      website: 'liveintent.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Email-based advertising.',
      priority: false
    },
    {
      id: 'locate-smarter',
      name: 'LocateSmarter',
      website: 'locatesmarter.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data for collections.',
      priority: false
    },
    {
      id: 'lotame',
      name: 'Lotame',
      website: 'lotame.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data management platform.',
      priority: false
    },
    {
      id: 'luc',
      name: 'Luc',
      website: 'luc.id',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Research/survey data.',
      priority: false
    },
    {
      id: 'lusha',
      name: 'Lusha',
      website: 'lusha.com',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'B2B contact database (100M+ profiles).',
      priority: false
    },
    {
      id: 'machintel',
      name: 'Machintel',
      website: 'machintel.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B intelligence.',
      priority: false
    },
    {
      id: 'madison-logic',
      name: 'Madison Logic',
      website: 'madisonlogic.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'ABM data.',
      priority: false
    },
    {
      id: 'magnite',
      name: 'Magnite',
      website: 'magnite.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Programmatic advertising.',
      priority: false
    },
    {
      id: 'malvern-media',
      name: 'Malvern Media',
      website: 'malvernmedia.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'marinus-analytics',
      name: 'Marinus Analytics',
      website: 'marinusanalytics.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'AI-powered analytics.',
      priority: false
    },
    {
      id: 'market-force-corp',
      name: 'MarketForce Corp',
      website: 'marketforcecorp.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Customer experience data.',
      priority: false
    },
    {
      id: 'max-mind',
      name: 'MaxMind',
      website: 'maxmind.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'IP geolocation and fraud detection.',
      priority: false
    },
    {
      id: 'mediaocean',
      name: 'Mediaocean',
      website: 'mediaocean.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising workflow.',
      priority: false
    },
    {
      id: 'media-soft-studio',
      name: 'MediaSoft Studio',
      website: 'mediasoftstudio.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Digital media.',
      priority: false
    },
    {
      id: 'media-wallah',
      name: 'MediaWallah',
      website: 'mediawallah.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity resolution.',
      priority: false
    },
    {
      id: 'meltwater',
      name: 'Meltwater',
      website: 'meltwater.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Media intelligence/PR data.',
      priority: false
    },
    {
      id: 'merkle',
      name: 'Merkle (Dentsu)',
      website: 'merkleinc.com',
      category: 'MKT',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'Performance marketing data.',
      priority: false
    },
    {
      id: 'might-rep',
      name: 'MightRep',
      website: 'mightrep.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Sales data.',
      priority: false
    },
    {
      id: 'milestone-marketing',
      name: 'Milestone Marketing',
      website: 'milestonemarketingsolutions.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing.',
      priority: false
    },
    {
      id: 'mlxp',
      name: 'MLXP',
      website: 'mlxp.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'mobilewalla',
      name: 'Mobilewalla',
      website: 'mobilewalla.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: '10 days',
      notes: 'Mobile/location consumer data.',
      priority: false
    },
    {
      id: 'modigie',
      name: 'Modigie',
      website: 'modigie.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'mogean',
      name: 'Mogean',
      website: 'mogean.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing platform.',
      priority: false
    },
    {
      id: 'monevo',
      name: 'Monevo',
      website: 'monevo.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Credit/financial lead data.',
      priority: false
    },
    {
      id: 'monocl',
      name: 'Monocl',
      website: 'monocl.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare expert data.',
      priority: false
    },
    {
      id: 'mrg-inc',
      name: 'MRG Inc',
      website: 'mrginc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail data.',
      priority: false
    },
    {
      id: 'multimedia-lists',
      name: 'Multimedia Lists',
      website: 'multimedialists.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mailing list provider.',
      priority: false
    },
    {
      id: 'my-flash-cloud',
      name: 'MyFlashCloud',
      website: 'myflashcloud.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'nativo',
      name: 'Nativo',
      website: 'nativo.com',
      category: 'AD',
      optOutMethod: 'Online form + Email confirm',
      processingTime: '15 days',
      notes: 'Native advertising platform.',
      priority: false
    },
    {
      id: 'ncaa',
      name: 'NCAA',
      website: 'ncaa.org',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Student-athlete data.',
      priority: false
    },
    {
      id: 'net-wise-data',
      name: 'NetWise Data',
      website: 'netwisedata.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B data.',
      priority: false
    },
    {
      id: 'next-roll',
      name: 'NextRoll',
      website: 'nextroll.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'AdRoll/RollWorks parent.',
      priority: false
    },
    {
      id: 'next-wave-marketing',
      name: 'NextWave Marketing',
      website: 'nextwavemarketingstrategies.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'nexxa-group',
      name: 'Nexxa Group',
      website: 'nexxagroup.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing services.',
      priority: false
    },
    {
      id: 'nexxen',
      name: 'Nexxen',
      website: 'nexxen.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Connected TV advertising.',
      priority: false
    },
    {
      id: 'oan',
      name: 'OAN',
      website: 'oan.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data services.',
      priority: false
    },
    {
      id: 'onemata',
      name: 'Onemata',
      website: 'onemata.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location data.',
      priority: false
    },
    {
      id: 'on-spot-data',
      name: 'OnSpot Data',
      website: 'onspotdata.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Geolocation data.',
      priority: false
    },
    {
      id: 'open-people-search',
      name: 'OpenPeopleSearch',
      website: 'openpeoplesearch.com',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'People search API.',
      priority: false
    },
    {
      id: 'open-x',
      name: 'OpenX',
      website: 'openx.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Programmatic advertising.',
      priority: false
    },
    {
      id: 'optimal-fusion',
      name: 'Optimal Fusion',
      website: 'optimalfusion.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'pacific-east',
      name: 'Pacific East',
      website: 'pacificeast.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'parade',
      name: 'Parade',
      website: 'parade.ai',
      category: 'HR',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Recruiting/HR data.',
      priority: false
    },
    {
      id: 'path-2-response',
      name: 'Path2Response',
      website: 'path2response.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct mail analytics.',
      priority: false
    },
    {
      id: 'permutive',
      name: 'Permutive',
      website: 'permutive.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Publisher data platform.',
      priority: false
    },
    {
      id: 'pick-medicare',
      name: 'PickMedicare',
      website: 'pickmedicare.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Medicare lead data.',
      priority: false
    },
    {
      id: 'pop-acta',
      name: 'PopActa',
      website: 'popacta.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'postie',
      name: 'Postie',
      website: 'postie.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Programmatic direct mail.',
      priority: false
    },
    {
      id: 'preferred-communications',
      name: 'Preferred Communications',
      website: 'preferredcom.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing.',
      priority: false
    },
    {
      id: 'priv-co',
      name: 'PrivCo',
      website: 'privco.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Private company financial data.',
      priority: false
    },
    {
      id: 'pub-matic',
      name: 'PubMatic',
      website: 'pubmatic.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Programmatic advertising.',
      priority: false
    },
    {
      id: 'pulse-point',
      name: 'PulsePoint',
      website: 'pulsepoint.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Health/programmatic advertising.',
      priority: false
    },
    {
      id: 'pwc-us',
      name: 'PwC US',
      website: 'pwc.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consulting with data services.',
      priority: false
    },
    {
      id: 'quad',
      name: 'Quad',
      website: 'quad.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing services/printing.',
      priority: false
    },
    {
      id: 'qualfon',
      name: 'Qualfon',
      website: 'qualfon.com',
      category: 'MKT',
      optOutMethod: 'Email',
      processingTime: 'Varies',
      notes: 'Business process outsourcing.',
      priority: false
    },
    {
      id: 'ray-cdp',
      name: 'RayCDP',
      website: 'raycdp.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Customer data platform.',
      priority: false
    },
    {
      id: 'reach-marketing',
      name: 'Reach Marketing',
      website: 'reachmarketing.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B marketing data.',
      priority: false
    },
    {
      id: 'recruit-bot',
      name: 'RecruitBot',
      website: 'recruitbot.com',
      category: 'HR',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Recruiting data.',
      priority: false
    },
    {
      id: 'redi-data',
      name: 'RediData',
      website: 'redidata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data lists.',
      priority: false
    },
    {
      id: 'reklaim',
      name: 'Reklaim',
      website: 'reklaimyours.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Data ownership platform.',
      priority: false
    },
    {
      id: 'rel-sci',
      name: 'RelSci',
      website: 'relsci.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Relationship intelligence.',
      priority: false
    },
    {
      id: 'reonomy',
      name: 'Reonomy',
      website: 'reonomy.com',
      category: 'PROP',
      optOutMethod: 'Online form + phone code + Email',
      processingTime: 'Varies',
      notes: 'Commercial real estate data.',
      priority: false
    },
    {
      id: 'research-usa-llc',
      name: 'Research USA LLC',
      website: 'researchusallc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'resonate',
      name: 'Resonate',
      website: 'resonate.com',
      category: 'MKT',
      optOutMethod: 'Online (one-click)',
      processingTime: 'Immediate',
      notes: 'Consumer intelligence.',
      priority: false
    },
    {
      id: 'response-solutions-llc',
      name: 'Response Solutions LLC',
      website: 'responsesolutionsllc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'reveal-mobile',
      name: 'RevealMobile',
      website: 'revealmobile.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Location-based audiences.',
      priority: false
    },
    {
      id: 'rich-media-llc',
      name: 'RichMedia LLC',
      website: 'richmediallc.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'rrd',
      name: 'RRD (R.R. Donnelley)',
      website: 'rrd.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing/printing data.',
      priority: false
    },
    {
      id: 'sp-global',
      name: 'S&P Global',
      website: 'spglobal.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Financial data and analytics.',
      priority: false
    },
    {
      id: 'salutary-data',
      name: 'Salutary Data',
      website: 'salutarydata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data.',
      priority: false
    },
    {
      id: 'sbfe',
      name: 'SBFE',
      website: 'sbfe.org',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Small business financial data exchange.',
      priority: false
    },
    {
      id: 'sci-leads',
      name: 'SciLeads',
      website: 'scileads.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Scientific B2B data.',
      priority: false
    },
    {
      id: 'scraping-robot',
      name: 'ScrapingRobot',
      website: 'scrapingrobot.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Web scraping service.',
      priority: false
    },
    {
      id: 'seamless-ai',
      name: 'Seamless AI',
      website: 'seamless.ai',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'Real-time sales lead data.',
      priority: false
    },
    {
      id: 'share-local-media',
      name: 'ShareLocal Media',
      website: 'sharelocalmedia.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Local advertising data.',
      priority: false
    },
    {
      id: 'sharethrough',
      name: 'Sharethrough',
      website: 'sharethrough.com',
      category: 'AD',
      optOutMethod: 'Online (DAA opt-out)',
      processingTime: 'Varies',
      notes: 'Native advertising. Redirects to DAA opt-out.',
      priority: false
    },
    {
      id: 'simio-cloud',
      name: 'SimioCloud',
      website: 'simiocloud.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'slashdot-media',
      name: 'Slashdot Media',
      website: 'slashdotmedia.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Tech media/advertising.',
      priority: false
    },
    {
      id: 'snov',
      name: 'Snov',
      website: 'snov.io',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Email finder and sales tool.',
      priority: false
    },
    {
      id: 'socialgist',
      name: 'Socialgist',
      website: 'socialgist.com',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Social media data.',
      priority: false
    },
    {
      id: 'source-it-marketing',
      name: 'SourceIt Marketing',
      website: 'sourceitmarketing.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'sovrn',
      name: 'Sovrn',
      website: 'sovrn.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Publisher monetization.',
      priority: false
    },
    {
      id: 'statara',
      name: 'Statara',
      website: 'statara.com',
      category: 'GOV',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Political data.',
      priority: false
    },
    {
      id: 'statlistics',
      name: 'Statlistics',
      website: 'statlistics.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer data lists.',
      priority: false
    },
    {
      id: 'step-2-success-marketing',
      name: 'Step2Success Marketing',
      website: 'step2successmarketing.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'steppingblocks',
      name: 'Steppingblocks',
      website: 'steppingblocks.com',
      category: 'HR',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Career outcome data.',
      priority: false
    },
    {
      id: 'sterling-strategies',
      name: 'Sterling Strategies',
      website: 'sterlingstrategies.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'swordfish',
      name: 'Swordfish',
      website: 'swordfish.ai',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Contact finder. Processes immediately.',
      priority: false
    },
    {
      id: 't-mobile-marketing',
      name: 'T-Mobile Marketing Solutions',
      website: 't-mobile.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Telecom advertising data.',
      priority: false
    },
    {
      id: 'taboola',
      name: 'Taboola',
      website: 'taboola.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Content recommendation/advertising. Must repeat per device/browser.',
      priority: false
    },
    {
      id: 'tapad',
      name: 'Tapad',
      website: 'tapad.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Cross-device identity.',
      priority: false
    },
    {
      id: 'tech-target',
      name: 'TechTarget',
      website: 'techtarget.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'B2B tech purchase intent data.',
      priority: false
    },
    {
      id: 'telefi',
      name: 'Telefi',
      website: 'telefi.app',
      category: 'OTHER',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Phone data app.',
      priority: false
    },
    {
      id: 'telephone-lists',
      name: 'TelephoneLists',
      website: 'telephonelists.biz',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: '45 days',
      notes: 'Phone number marketing lists.',
      priority: false
    },
    {
      id: 'terminus',
      name: 'Terminus',
      website: 'terminus.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'ABM platform.',
      priority: false
    },
    {
      id: 'the-bridge-corp',
      name: 'TheBridgeCorp',
      website: 'thebridgecorp.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Direct marketing data.',
      priority: false
    },
    {
      id: 'the-work-number',
      name: 'TheWorkNumber (Equifax)',
      website: 'theworknumber.com',
      category: 'HR',
      optOutMethod: 'Online form',
      processingTime: '15 days',
      notes: 'HIGH PRIORITY. Employment/income verification database (670M+ records). Also call 1-866-295-6801.',
      priority: true
    },
    {
      id: 'throtle',
      name: 'Throtle',
      website: 'throtle.io',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Identity resolution/marketing.',
      priority: false
    },
    {
      id: 'tl1-mkt',
      name: 'TL1 MKT',
      website: 'tl1mkt.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'tower-data',
      name: 'TowerData',
      website: 'towerdata.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Email intelligence data. Processes immediately.',
      priority: false
    },
    {
      id: 'traackr',
      name: 'Traackr',
      website: 'traackr.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Influencer marketing data.',
      priority: false
    },
    {
      id: 'trestle-iq',
      name: 'TrestleIQ',
      website: 'trestleiq.com',
      category: 'ID',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Phone/identity intelligence.',
      priority: false
    },
    {
      id: 'true-data',
      name: 'TrueData',
      website: 'truedata.co',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mobile audience data.',
      priority: false
    },
    {
      id: 'tymax-media',
      name: 'Tymax Media',
      website: 'tymaxmedia.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'unity',
      name: 'Unity',
      website: 'unity.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Gaming/app advertising.',
      priority: false
    },
    {
      id: 'us-data-corporation',
      name: 'US Data Corporation',
      website: 'usdatacorporation.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer/business data lists.',
      priority: false
    },
    {
      id: 'us-marketing-group',
      name: 'US Marketing Group',
      website: 'usmarketinggrp.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Marketing data.',
      priority: false
    },
    {
      id: 'valassis',
      name: 'Valassis (Vericast)',
      website: 'valassis.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: '45 days',
      notes: 'Direct mail/coupon data.',
      priority: false
    },
    {
      id: 'veeva',
      name: 'Veeva',
      website: 'veeva.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare/pharma data.',
      priority: false
    },
    {
      id: 'venntel',
      name: 'Venntel',
      website: 'venntel.com',
      category: 'LOC',
      optOutMethod: 'Online form',
      processingTime: 'Immediate',
      notes: 'Government location data. Processes immediately.',
      priority: false
    },
    {
      id: 'versium',
      name: 'Versium',
      website: 'versium.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: '72 hours',
      notes: 'Identity resolution/marketing data.',
      priority: false
    },
    {
      id: 'vrtcal',
      name: 'Vrtcal',
      website: 'vrtcal.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Mobile advertising.',
      priority: false
    },
    {
      id: 'warmly',
      name: 'Warmly',
      website: 'warmly.ai',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Website visitor identification.',
      priority: false
    },
    {
      id: 'wealth-x',
      name: 'Wealth-X',
      website: 'wealthx.com',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'High-net-worth individual data.',
      priority: false
    },
    {
      id: 'we-inform',
      name: 'WeInform/TruthRecord',
      website: 'weinform.org',
      category: 'PUB',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'People search/records.',
      priority: false
    },
    {
      id: 'wiland',
      name: 'Wiland',
      website: 'wiland.com',
      category: 'MKT',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Consumer spending data.',
      priority: false
    },
    {
      id: 'windfall-data',
      name: 'Windfall Data',
      website: 'windfalldata.com',
      category: 'FIN',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Wealth intelligence data.',
      priority: false
    },
    {
      id: 'wiza',
      name: 'Wiza',
      website: 'wiza.co',
      category: 'B2B',
      optOutMethod: 'Online form + Email confirm',
      processingTime: 'Varies',
      notes: 'LinkedIn-based sales prospecting.',
      priority: false
    },
    {
      id: 'wodwo',
      name: 'Wodwo',
      website: 'wodwo.com',
      category: 'AD',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Advertising data.',
      priority: false
    },
    {
      id: 'zeta-global',
      name: 'Zeta Global',
      website: 'zetaglobal.com',
      category: 'MKT',
      optOutMethod: 'Online form + Email confirm',
      processingTime: '30-90 days',
      notes: 'Marketing data platform.',
      priority: false
    },
    {
      id: 'zs',
      name: 'ZS',
      website: 'zs.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Healthcare/pharma consulting data.',
      priority: false
    },
    {
      id: 'thompson-reuters',
      name: 'Thompson Reuters',
      website: 'thomsonreuters.com',
      category: 'B2B',
      optOutMethod: 'Online form',
      processingTime: 'Varies',
      notes: 'Cross-reference with legal/professional databases.',
      priority: false
    }
  ]
};
