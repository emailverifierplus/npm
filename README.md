# 📣 Introduction 

Use this API if you want to clean your email database and get rid of bad emails that are guaranteed to hard bounce and hurt your reputation which also negatively impacts your deliverability. Every email list should be regularly cleaned and updated otherwise you will be wasting a lot of money.

Our verifications are done using various methods using SMTP, DNS, HTTP, Grammar checks and many others in order to ensure that we get the best results.

The main score is under the `reachable` property of the response and is represented by a final verdict for each email address; it consists of 3 possible fields for each email:

- `yes` meaning the email address was found and it is safe to send
- `no` meaning the email was not found and you're likely to bounce if you send to it
- `unknown` meaning we're not sure, possible catchall email address

## ⚡ Usage

You will need a subscription and an API key for this API. A free plan is also available and it allows you to perform 20 verifications/day. 

**To get a KEY visit [the API page](https://rapidapi.com/emextools-emextools-default/api/email-verifier-plus).**

```typescript
import {checkEmailExists} from "email-verifier-plus";

...

const result = await checkEmailExists(apiKey, "mark@apple.com")

// ... json result

{
    "email": "mark@apple.com",
    "reachable": "no",
    "syntax": {
        "username": "mark",
        "domain": "apple.com",
        "valid": true
    },
    "smtp": {
        "host_exists": true,
        "full_inbox": false,
        "catch_all": false,
        "deliverable": false,
        "disabled": false
    },
    "gravatar": null,
    "suggestion": "",
    "disposable": false,
    "role_account": false,
    "free": false,
    "has_mx_records": true
}
```

## 🚀 Features

The following properties can also be found in the response:

- `free`: is it a free email address (yahoo, gmail etc)
- `role_account`: is it a role address (admin, info, support etc)
- `syntax`: syntax check
- `suggestion`: suggestion (if mispelled)
- `disposable` disposable (if the domain is known to be from disposable email boxes)
- `has_mx_records` DNS check (has mx records or not)

Use them wisely to figure out if the email is valid for your particular use case.

## 📌 Use cases

- blocking free emails from registering
- blocking disposable emails from registering
- blocking/detecting catch-all domains
- cleaning email lists to avoid hard bounces
- suggesting fixes for mispelled domains
- email list cleaning