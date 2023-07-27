# Hirechain Next.js Technical Test

## Introduction

Welcome to the Hirechain Next.js technical test. This test is designed to examine your understanding and proficiency in handling a complex API, and setting up tRPC and Next.js.

Our application is built over a t3 boilerplate that incorporates Next.js, Tailwind, and tRPC. We have created a mock API endpoint for testing purposes, which provides a series of challenges you need to overcome.

## Test Overview

Your task is to build a simple application that calls our provided REST API endpoint, and displays the results in a table.

The API endpoint is:

```sh
https://app.hirechain.xyz/api/tech-test
```

A simple GET request will return an array of objects containing a list of dummy candidates. We would like you to call this API endpoint from within a tRPC procedure and one has been setup for this in the boilerplate code. There is no authentication required to call this API.

This API is intentionally buggy, adding an extra level of complexity to the task.

The key features we need in the application are as follows:

1. **Display API Data:** Fetch the data from the API and display it in a table on a 'candidates.tsx' page.

2. **Table Configuration:** The table should be sortable by all of the columns and there should be a column for each key in the candidate objects returned by the API.

3. **Candidate Details:** Each row in the table represents a candidate. Clicking on a row should take the user to a page displaying the details of that candidate.

4. **Pagination:** The table must show 10 rows per page, with the total list including 50 candidates.

5. **API Issues Handling:** The API may occasionally throw a 500 error or a 401 error. Implement appropriate responses within the app.
   - **500 Error:** Display an icon on the page (toast, icon in header, etc) to indicate the app was unable to refresh the data but it is trying again.
   - **401 Error:** Redirect the user to a dummy login page. This page should include a button to take them back to the candidates page.

6. **API Data Nesting:** The API data may not always return all 50 candidates as expected due to nesting issues. Candidates might be stored in 2D arrays, several levels deep. Unravel this data to display correctly.

7. **API Response Times:** The API is inconsistent in it's response times. Sometimes it will respond immediately and other times it will take 5 seconds. This should not effect the responsiveness of the application. The user should be able to navigate between pages and refresh the data without any noticeable delay.

8. **Styling:** Style the application as you see fit using Tailwind. The main focus of this test is on code quality, not UI styling.

## Getting Started

### Starting The Test

To start the test, please fork the repository and create a new branch for your work.

Once your work is complete, add `@bkrhub` to the repository, create a pull request, and request code approval.

**NOTE:** Please, do not merge the PR into the main branch.

## Conclusion

This is a great opportunity to demonstrate your capabilities with complex API handling, Next.js, tRPC, and basic UI design.

Good luck with your test, and have fun!

---
