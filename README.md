# Personal Notes API

The Personal Notes API is a powerful backend service for managing personal notes through RESTful endpoints. This API allows users to create, edit, delete, and organize their notes programmatically.

## Features

- Create new notes
- Update existing notes
- Delete notes

## Installation

1. Clone this repository:

```git clone https://github.com/tuusuario/personal-notes-api.git
cd personal-notes-api
```

2. Install dependencies:
   `yarn`

3. Set up your database configuration in `.env`, from `.default.env`.
4. Run the application:
   `yarn start:dev`

## Documentation

Comprehensive documentation for all endpoints is available through Swagger and can be accessed at /docs.

## Repository Design Pattern

This project follows the Repository Design Pattern to separate the data access layer from the business logic. The pattern provides a structured and efficient way to interact with the database, making the code more maintainable and testable.
