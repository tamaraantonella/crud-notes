# Personal Notes API

The Personal Notes API is a powerful backend service for managing personal notes through RESTful endpoints. This API allows users to create, edit, delete, and organize their notes programmatically.

## Features

- Create new notes
- Update existing notes
- Delete notes
- Organize notes

## Installation

1. Clone this repository:

````git clone https://github.com/tuusuario/personal-notes-api.git
cd personal-notes-api
````

2. Install dependencies:
`yarn`

3. Set up your database configuration in `.env`, from `.env.example`.
4. Run the application:
`yarn start:dev`

## Usage

This API is designed to be integrated into other applications or used by developers who want to add note management functionality to their projects. Here's how you can interact with the API:

- **Create a new note:**

`POST /notes`

- **Update an existing note:**

`PUT /notes/:id`

- **Delete a note:**

`DELETE /notes/:id`

- **Retrieve all notes:**

`GET /notes`

- **Retrieve a specific note:**

`GET /notes/:id`

## Repository Design Pattern

This project follows the Repository Design Pattern to separate the data access layer from the business logic. The pattern provides a structured and efficient way to interact with the database, making the code more maintainable and testable.
